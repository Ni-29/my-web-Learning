// <v快捷键

<template>
  <!-- 组件的结构 -->
  <div>
    <img src='./assets/logo.png' alt='log'></img>
    <MySchool></MySchool>
    <hr>
    <MyStudent></MyStudent>
  </div>
</template>>


<script>
import MySchool from './components/MySchool'
import MyStudent from './components/MyStudent'

//组件交互相关的代码（数据、方法等）
export default {
  name:'App',
  components:{
    MySchool,
    MyStudent
  }
};
</script>


<style>
/* 组件的样式 */
</style>