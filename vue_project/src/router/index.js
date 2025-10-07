// 该文件专门用于创造整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { isAuth: true, title: '关于' }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },  //意味着需要权限的校验

          /*  // 独享路由守卫,只有前置，没有后置
           beforeEnter: (to, from, next) => {
             // console.log("前置路由首位", to, from);
             if (to.meta.isAuth) {    //判断是否需要鉴定权限，比上面的简单
               if (localStorage.getItem('school') === '北大') {
                 next()
               } else {
                 alert('学校名不对，无权访问！')
               }
             } else {
               next()
             }
           } */

        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              // 路径长的时候用name更方便
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
              meata: { title: '详情' },

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


/* // 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  // console.log("前置路由首位", to, from);
  // next()  //放行
  // 两种写法，名字或者路径都可以
  // if (to.name === 'xinwen' || to.path === '/home/message') {
  if (to.meta.isAuth) {    //判断是否需要鉴定权限，比上面的简单
    if (localStorage.getItem('school') === '北大') {
      next()
    } else {
      alert('学校名不对，无权访问！')
    }
  } else {
    next()
  }
}) */

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  // console.log("后置路由守卫", to, from);
  document.title = to.meta.title || '测试系统'
})

export default router