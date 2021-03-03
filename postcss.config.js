const path = require('path')
module.exports =(file) => {
  const designWidth = file.cwd.includes(path.join('node_modules', 'vant')) ? 375 : 750 //好像vite读取不到 node_modules
  return {
    plugins: {
      // ...
      'postcss-px-to-viewport': {
        // options
        unitToConvert: "px",
        viewportUnit: 'vw',
        viewportWidth: 375, // designWidth
        viewportHeight: 667,
        minPixelValue: 1,
        // exclude: [/node_modules/]
      }
    }
  }
}