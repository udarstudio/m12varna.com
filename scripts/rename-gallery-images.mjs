import { access, readFile, rename, writeFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';

function parseArgs(argv) {
  const args = { dryRun: false, manifest: '' };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg === '--manifest') {
      args.manifest = argv[i + 1] || '';
      i += 1;
    }
  }

  if (!args.manifest) {
    throw new Error('Missing required --manifest argument.');
  }

  return args;
}

function ensureFilenamePolicy(filename, categoryId) {
  const lower = filename.toLowerCase();
  const allowedPattern = new RegExp(`^${categoryId}-[a-z0-9-]+-varna-\\d{2}\\.(jpg|jpeg|png|webp|avif)$`);

  if (!allowedPattern.test(lower)) {
    throw new Error(`Invalid target filename pattern: ${filename}`);
  }

  if (/[ ()]/.test(filename) || /copy|img_/i.test(filename)) {
    throw new Error(`Target filename contains disallowed leftovers: ${filename}`);
  }
}

async function ensureExists(filePath) {
  await access(filePath, fsConstants.F_OK);
}

function replaceOverrideKeys(contents, categoryId, entries) {
  let updated = contents;

  for (const entry of entries) {
    const oldKey = `${categoryId}/${entry.old}`;
    const newKey = `${categoryId}/${entry.new}`;
    updated = updated.replaceAll(`'${oldKey}'`, `'${newKey}'`);
    updated = updated.replaceAll(`"${oldKey}"`, `"${newKey}"`);
  }

  return updated;
}

async function main() {
  const { dryRun, manifest } = parseArgs(process.argv.slice(2));
  const rootDir = process.cwd();
  const manifestPath = path.resolve(rootDir, manifest);
  const manifestData = JSON.parse(await readFile(manifestPath, 'utf8'));
  const { categoryId, files } = manifestData;

  if (!categoryId || !Array.isArray(files) || files.length === 0) {
    throw new Error('Manifest must include categoryId and a non-empty files array.');
  }

  const thumbsDir = path.join(rootDir, 'public', 'galeria', 'thumbs', categoryId);
  const fullDir = path.join(rootDir, 'public', 'galeria', 'full', categoryId);
  const dataFile = path.join(rootDir, 'data', 'gallery.ts');

  const seenOld = new Set();
  const seenNew = new Set();
  const operations = [];

  for (const entry of files) {
    if (!entry.old || !entry.new) {
      throw new Error('Each manifest entry must include old and new.');
    }

    if (seenOld.has(entry.old)) {
      throw new Error(`Duplicate source filename in manifest: ${entry.old}`);
    }
    if (seenNew.has(entry.new)) {
      throw new Error(`Duplicate destination filename in manifest: ${entry.new}`);
    }

    seenOld.add(entry.old);
    seenNew.add(entry.new);
    ensureFilenamePolicy(entry.new, categoryId);

    const thumbSrc = path.join(thumbsDir, entry.old);
    const fullSrc = path.join(fullDir, entry.old);
    const thumbDest = path.join(thumbsDir, entry.new);
    const fullDest = path.join(fullDir, entry.new);

    await ensureExists(thumbSrc);
    await ensureExists(fullSrc);

    operations.push({ entry, thumbSrc, fullSrc, thumbDest, fullDest });
  }

  for (const operation of operations) {
    if (operation.entry.old !== operation.entry.new) {
      try {
        await ensureExists(operation.thumbDest);
        throw new Error(`Destination already exists: ${operation.entry.new}`);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }

      try {
        await ensureExists(operation.fullDest);
        throw new Error(`Destination already exists: ${operation.entry.new}`);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }
    }
  }

  const galleryContents = await readFile(dataFile, 'utf8');
  const updatedGalleryContents = replaceOverrideKeys(galleryContents, categoryId, files);

  console.log(`${dryRun ? 'Dry run' : 'Renaming'} ${operations.length} gallery pairs for ${categoryId}:`);
  for (const { entry } of operations) {
    console.log(`- ${entry.old} -> ${entry.new}`);
  }

  if (dryRun) {
    console.log('Validation passed. No files were renamed.');
    return;
  }

  for (const { thumbSrc, fullSrc, thumbDest, fullDest } of operations) {
    await rename(thumbSrc, thumbDest);
    await rename(fullSrc, fullDest);
  }

  if (galleryContents !== updatedGalleryContents) {
    await writeFile(dataFile, updatedGalleryContents, 'utf8');
    console.log('Updated gallery alt override keys in data/gallery.ts.');
  }

  console.log('Rename completed successfully.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
