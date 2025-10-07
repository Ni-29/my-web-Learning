const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器（方式一）:不能配置多个代理，不能灵活的控制走不走代理
  /*  devServer: {
     proxy: 'http://localhost:5000'
   } */
  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      // '/api'：请求前缀，api内容可换
      '/api': {
        target: 'http://localhost:5000',
        // ^/api:以/api开头的
        pathRewrite: { '^/api': '' },
        // ws: true,    // 用于支持websocket
        // changeOrigin: true   // 用于控制请求头中的host值
      },
      // 请求多个代理
      '/ppp': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/ppp': '' },
        // ws: true,    // 用于支持websocket
        // changeOrigin: true   // 用于控制请求头中的host值
      },
    }
  }
})
