import vue from '@vitejs/plugin-vue'

const path = require('path')
function pathResolve(dir) {
  return path.resolve(__dirname, '.', dir)
}
module.exports = {

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  // hostname: '0.0.0.0',
  // port: 3000,
  // 是否自动在浏览器打开
  open: true,
  outDir: 'dist',
  server: {
    proxy: {
      // '/sys': 'https://www.youxiuqn-dev.com/sys',
      '/sys': {
        target: 'https://www.youxiuqn-dev.com/sys',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/sys/, 'sys')
      },
    }
  }
}