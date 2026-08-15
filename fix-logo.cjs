const { Jimp } = require('jimp');

async function processImage() {
  const image = await Jimp.read('public/imgs/logo.png');
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const alpha = this.bitmap.data[idx + 3];
    if (alpha > 0) {
      // Set to solid white
      this.bitmap.data[idx + 0] = 255; // R
      this.bitmap.data[idx + 1] = 255; // G
      this.bitmap.data[idx + 2] = 255; // B
    }
  });

  image.write('public/imgs/logo-white.png');
  console.log('Saved logo-white.png');
}

processImage();
