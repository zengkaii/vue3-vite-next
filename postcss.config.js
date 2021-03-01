module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      // options
      unitToConvert: "px",
      viewportUnit: 'vw',
      viewportWidth: 750,
      minPixelValue: 1
    }
  }
}