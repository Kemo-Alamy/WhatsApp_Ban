const sharp = require('sharp');
const fs = require('fs');

async function imageToWebp(buffer) {
  const tmp = './temp_' + Date.now() + '.webp';
  await sharp(buffer).webp().toFile(tmp);
  return tmp;
}
async function writeExifImg(buffer, options) {
  return imageToWebp(buffer);
}
module.exports = { imageToWebp, writeExifImg };
