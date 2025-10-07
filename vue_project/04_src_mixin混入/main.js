// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// mixin全局变量
import { hunhe } from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(hunhe)

// 创建Vue实例
new Vue({
  el: '#app',
  render: h => h(App)
})