// 引入了一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


/* const app = createApp(App)
app.mount('app')  //mount 挂载

// unmount 卸载
setTimeout(() => {
  app.unmount('#app')
}, 1000) */