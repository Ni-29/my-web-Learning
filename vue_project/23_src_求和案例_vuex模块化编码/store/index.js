// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

const countAbout = {
  namespaced: true,
  state: {
    sum: 0,
    school: '北大',
    subject: '前端',

  },
  actions: {
    jiaOld: function (context, value) {
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait: function (context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 500);
    }
  },
  mutations: {
    JIA(state, value) {
      // console.log('mutations中的JIA被调用了', state, value)
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}
const personAbout = {
  namespaced: true,
  state: {
    personsList: [{
      id: '001',
      name: '小明'
    }]
  },
  actions: {},
  mutations: {
    ADD_PERSONS(state, value) {
      // value就是输入的人名
      // console.log('mutations中的ADD_PERSONS被调用了', state, value);
      state.personsList.unshift(value)
    }
  },
  getters: {}
}







/* // 准备actions——用于响应组件中的动作
const actions = {
  jiaOld: function (context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait: function (context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500);
  }
} */

/* // 准备mutations——用于操作数据（state）
const mutations = {
  JIA(state, value) {
    // console.log('mutations中的JIA被调用了', state, value)
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
  ADD_PERSONS(state, value) {
    // value就是输入的人名
    // console.log('mutations中的ADD_PERSONS被调用了', state, value);
    state.personsList.unshift(value)
  }
} */

/* // 准备state——用于存储数据
const state = {
  sum: 0,
  school: '北大',
  subject: '前端',

  personsList: [{
    id: '001',
    name: '小明'
  }]
} */

/* // 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
} */

// 创建并暴露（导出）store
export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})

