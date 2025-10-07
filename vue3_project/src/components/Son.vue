<template lang="">
  <div class='son'>
    <h2>我是子组件&nbsp;&nbsp;{{car.name}}-{{car.price}}</h2>
    <Child/>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  name: 'Son',
  props: ['car'],
  components: { Child },

}
</script>

<style>
.son {
  background-color: #ffa0a0;
  padding: 5px;
}
</style>