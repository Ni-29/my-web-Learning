<template>
  <input type="text" v-model="keyWord"><br>
  <h3>输入框中输入的是：{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: "App",
  setup() {
    // let keyWord = ref('')  //使用Vue提供的ref

    let timer
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        return {
          get() {
            track()  //通知Vue追踪value的变化
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()  //通知Vue去重新解析模版
            }, delay);
          }
        }
      })
    }
    let keyWord = myRef('111', 1000)// 使用程序员自定义的ref

    return {
      keyWord
    }
  }
};
</script>
