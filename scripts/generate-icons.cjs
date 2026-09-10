const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgFile = path.resolve(__dirname, '../public/icon.svg');
const publicDir = path.resolve(__dirname, '../public');

async function generateIcons() {
  const svg = fs.readFileSync(svgFile);

  await sharp(svg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));

  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));

  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

  await sharp(svg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Icons generated successfully.');
}

generateIcons().catch(console.error);
