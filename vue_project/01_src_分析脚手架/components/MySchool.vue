// <v快捷键

<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{adress}}</h2>
    <button @click='showName'>点我展示学校名</button>
  </div>
</template>>


<script>
//组件交互相关的代码（数据、方法等）
export default {
  name:'MySchool',
  data() {
    return {
      name: '北大',
      adress: '北京'
    }
  },
  methods:{
    showName(){
      alert(this.name)
    }
  }
};
</script>


<style>
/* 组件的样式 */
</style>