import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svg = readFileSync(join(root, 'icons/plane-icon.svg'));

const sizes = [
  ['icons/apple-touch-icon.png', 180],
  ['icons/icon-192.png', 192],
  ['icons/icon-512.png', 512],
  ['icons/favicon-32.png', 32],
];

for (const [file, size] of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(root, file));
  console.log('wrote', file);
}
