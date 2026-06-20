import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import imageSize from 'image-size';

type GalleryCategory = {
	id: string;
	label: string;
};

type GalleryImage = {
	id: string;
	categoryId: string;
	alt: string;
	thumbSrc: string;
	fullSrc: string;
	width: number;
	height: number;
};

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const galleryCategoryLabels: Record<string, string> = {
	klimatizaciya: 'Климатизация',
	ventilaciya: 'Вентилация',
	vik: 'ВиК',
	remonti: 'Ремонти',
};
const galleryCategoryOrder = ['klimatizaciya', 'ventilaciya', 'vik', 'remonti'];
const galleryAltOverrides: Record<string, string> = {};

function getBatchYear(filename: string) {
	const match = filename.match(/-(\d{4})-/);

	return match ? Number(match[1]) : 0;
}

function compareGalleryFilenames(a: string, b: string) {
	const yearDifference = getBatchYear(b) - getBatchYear(a);

	if (yearDifference !== 0) {
		return yearDifference;
	}

	return a.localeCompare(b, 'en', { numeric: true });
}

function compareGalleryImages(a: GalleryImage, b: GalleryImage) {
	const yearDifference =
		getBatchYear(b.fullSrc.split('/').pop() || '') - getBatchYear(a.fullSrc.split('/').pop() || '');

	if (yearDifference !== 0) {
		return yearDifference;
	}

	return a.fullSrc.localeCompare(b.fullSrc, 'en', { numeric: true });
}

function normalizeSegment(value: string) {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\.[^.]+$/, '')
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.toLowerCase();
}

function toCategoryLabel(categoryId: string) {
	return (
		galleryCategoryLabels[categoryId] || categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
	);
}

function fallbackAlt(categoryLabel: string) {
	return `Снимка от проект ${categoryLabel.toLowerCase()} на Мани 12 ЕООД във Варна.`;
}

async function getCategoryDirectories(baseDir: string) {
	const entries = await readdir(baseDir, { withFileTypes: true });

	return entries
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
		.map((entry) => entry.name);
}

async function getImageFilenames(dir: string) {
	const entries = await readdir(dir, { withFileTypes: true });

	return entries
		.filter((entry) => {
			if (!entry.isFile() || entry.name.startsWith('.')) {
				return false;
			}

			const extension = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase();
			return imageExtensions.has(extension);
		})
		.map((entry) => entry.name)
		.sort(compareGalleryFilenames);
}

export default defineEventHandler(async () => {
	const galleryRoot = join(process.cwd(), 'public', 'galeria');
	const thumbsRoot = join(galleryRoot, 'thumbs');
	const fullRoot = join(galleryRoot, 'full');

	const availableCategoryIds = await getCategoryDirectories(thumbsRoot);
	const categoryIds = galleryCategoryOrder.filter((categoryId) =>
		availableCategoryIds.includes(categoryId)
	);
	const categories: GalleryCategory[] = [
		{ id: 'all', label: 'Всички' },
		...categoryIds.map((categoryId) => ({
			id: categoryId,
			label: toCategoryLabel(categoryId),
		})),
	];

	const imagesByCategory = await Promise.all(
		categoryIds.map(async (categoryId) => {
			const thumbsDir = join(thumbsRoot, categoryId);
			const fullDir = join(fullRoot, categoryId);
			const filenames = await getImageFilenames(thumbsDir);
			const categoryLabel = toCategoryLabel(categoryId);

			const images = await Promise.all(
				filenames.map(async (filename) => {
					const fullPath = join(fullDir, filename);
					const fullBuffer = await readFile(fullPath);
					const dimensions = imageSize(fullBuffer);

					if (!dimensions.width || !dimensions.height) {
						throw createError({
							statusCode: 500,
							statusMessage: `Missing image dimensions for ${categoryId}/${filename}`,
						});
					}

					const encodedFilename = encodeURIComponent(filename);
					const overrideKey = `${categoryId}/${filename}`;

					return {
						id: `${categoryId}-${normalizeSegment(filename)}`,
						categoryId,
						alt: galleryAltOverrides[overrideKey] || fallbackAlt(categoryLabel),
						thumbSrc: `/galeria/thumbs/${categoryId}/${encodedFilename}`,
						fullSrc: `/galeria/full/${categoryId}/${encodedFilename}`,
						width: dimensions.width,
						height: dimensions.height,
					} satisfies GalleryImage;
				})
			);

			return images;
		})
	);

	return {
		categories,
		images: imagesByCategory.flat().sort(compareGalleryImages),
	};
});
