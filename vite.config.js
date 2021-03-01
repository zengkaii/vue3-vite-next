const path = require('path')
function pathResolve(dir) {
  return path.resolve(__dirname, '.', dir);
}
module.exports = {
  alias: [
    {
      find: /^\/@\//,
      replacement: pathResolve('src') + '/',
    },
  ],
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