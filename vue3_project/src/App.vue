<template lang="">
  <div class='dad'>
    <h2>我是父组件 &nbsp;&nbsp; {{name}}-{{price}}</h2>
    <Son :car="car"/>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue';
import Son from './components/Son.vue';
export default {
  name: 'App',
  components: { Son },
  setup() {
    let car = reactive({
      name: '奔驰',
      price: "20w"
    })

    provide('car', car)  //给自己的后代传递数据

    return {
      car,
      ...toRefs(car)
    }
  }
}
</script>

<style>
.dad {
  background-color: #a19e9e;
  padding: 5px;
}
</style>