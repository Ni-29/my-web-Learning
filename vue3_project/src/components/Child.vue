<template lang="">
  <div class='child'>
    <h2>我是孙组件&nbsp;&nbsp;{{car.name}}-{{car.price}}</h2>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Child',
  setup() {
    let car = inject('car')

    return {
      car
    }
  }
}
</script>

<style>
.child {
  background-color: #b2e3ff;
  padding: 5px;
}
</style>