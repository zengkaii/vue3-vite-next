const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    '/@/': resolve(__dirname, './src')
  },
  // hostname: '0.0.0.0',
  // port: 3000,
  // 是否自动在浏览器打开
  open: true,
  outDir: 'dist',

  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:4000',
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, '')
  //   }
  // }
}