// 该文件专门用于创造整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    }
  ]
})