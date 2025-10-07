// 该文件专门用于创造整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              // 路径长的时候用name更方便
              name: 'xiangqing',
              path: 'detail',
              component: Detail,

              // props的第一种写法（不常用），值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              // props:{a:1,b:'hello'}

              // props的第二种写法(仅适用于params参数)，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props:true

              // props的第三种写法，值为函数,该函数返回的每一组key-value都会以props的形式传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              }
            }
          ]
        }
      ]
    }
  ]
})