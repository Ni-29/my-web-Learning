<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHi">点击显示个人信息</button>
</template>

<script>
export default {
  name: "App",
  // 此处只是测试setup,暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = "小明";
    let age = 19;

    // 方法
    function sayHi() {
      alert(`我叫${name}，${age}岁了`);
    }

    // 返回值（返回一个对象）
    return {
      name,
      age,

      sayHi,
    };
  },
};
</script>

