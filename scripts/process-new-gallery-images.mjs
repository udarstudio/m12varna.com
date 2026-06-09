import { mkdir, readdir, stat } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';
import { readFileSync } from 'node:fs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(rootDir, 'for galery');
const fullRoot = path.join(rootDir, 'public', 'galeria', 'full');
const thumbsRoot = path.join(rootDir, 'public', 'galeria', 'thumbs');

const batches = [
	{
		sourceDir: 'klimatizaciq',
		categoryId: 'klimatizaciya',
		filenameBase: 'klimatizaciya-2026-proekt-varna',
	},
	{
		sourceDir: 'remonti',
		categoryId: 'remonti',
		filenameBase: 'remonti-2026-proekt-varna',
	},
];

function parseArgs(argv) {
	return {
		dryRun: argv.includes('--dry-run'),
	};
}

function compareNumberedFilenames(a, b) {
	const aNumber = Number.parseInt(path.parse(a).name, 10);
	const bNumber = Number.parseInt(path.parse(b).name, 10);

	if (Number.isFinite(aNumber) && Number.isFinite(bNumber) && aNumber !== bNumber) {
		return aNumber - bNumber;
	}

	return a.localeCompare(b, 'en', { numeric: true });
}

function toOutputFilename(filenameBase, index) {
	return `${filenameBase}-${String(index + 1).padStart(2, '0')}.jpg`;
}

function runSips(args) {
	return new Promise((resolve, reject) => {
		const child = spawn('sips', args, { stdio: 'inherit' });

		child.on('error', reject);
		child.on('exit', (code) => {
			if (code === 0) {
				resolve();
				return;
			}

			reject(new Error(`sips exited with code ${code}`));
		});
	});
}

async function assertDestinationAvailable(filePath) {
	try {
		await stat(filePath);
		throw new Error(`Destination already exists: ${path.relative(rootDir, filePath)}`);
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}
}

async function getSourceFiles(sourceDir) {
	const entries = await readdir(sourceDir, { withFileTypes: true });

	return entries
		.filter((entry) => entry.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(entry.name))
		.map((entry) => entry.name)
		.sort(compareNumberedFilenames);
}

async function processImage(sourcePath, fullDest, thumbDest) {
	const sourceDimensions = imageSize(readFileSync(sourcePath));

	if (!sourceDimensions.width || !sourceDimensions.height) {
		throw new Error(`Could not read image dimensions: ${path.relative(rootDir, sourcePath)}`);
	}

	await runSips(['-s', 'format', 'jpeg', '-Z', '2000', sourcePath, '--out', fullDest]);

	if (sourceDimensions.width <= sourceDimensions.height) {
		await runSips(['-s', 'format', 'jpeg', '--resampleWidth', '310', sourcePath, '--out', thumbDest]);
		return;
	}

	await runSips(['-s', 'format', 'jpeg', '--resampleHeight', '310', sourcePath, '--out', thumbDest]);
}

async function main() {
	const { dryRun } = parseArgs(process.argv.slice(2));
	const operations = [];

	for (const batch of batches) {
		const sourceDir = path.join(sourceRoot, batch.sourceDir);
		const fullDir = path.join(fullRoot, batch.categoryId);
		const thumbsDir = path.join(thumbsRoot, batch.categoryId);
		const sourceFiles = await getSourceFiles(sourceDir);

		for (const [index, sourceFile] of sourceFiles.entries()) {
			const outputFilename = toOutputFilename(batch.filenameBase, index);
			const sourcePath = path.join(sourceDir, sourceFile);
			const fullDest = path.join(fullDir, outputFilename);
			const thumbDest = path.join(thumbsDir, outputFilename);

			await assertDestinationAvailable(fullDest);
			await assertDestinationAvailable(thumbDest);

			operations.push({
				categoryId: batch.categoryId,
				sourcePath,
				fullDest,
				thumbDest,
				outputFilename,
			});
		}
	}

	console.log(`${dryRun ? 'Dry run for' : 'Processing'} ${operations.length} new gallery images:`);
	for (const operation of operations) {
		console.log(
			`- ${path.relative(rootDir, operation.sourcePath)} -> ${operation.categoryId}/${operation.outputFilename}`
		);
	}

	if (dryRun) {
		console.log('Validation passed. No files were written.');
		return;
	}

	for (const batch of batches) {
		await mkdir(path.join(fullRoot, batch.categoryId), { recursive: true });
		await mkdir(path.join(thumbsRoot, batch.categoryId), { recursive: true });
	}

	for (const operation of operations) {
		await processImage(operation.sourcePath, operation.fullDest, operation.thumbDest);
	}

	console.log('Gallery image processing completed.');
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
