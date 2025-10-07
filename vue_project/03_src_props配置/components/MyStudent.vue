<template>
  <div class="sc">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <h2>学生年龄: {{ myAge }}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    // console.log(this.age);
    return {
      // name: "小郭",
      // gender: "女",
      // age: 20,
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  props: ["name", "gender", "age"], //简单接收

  /* // 接收的同时对数据进行类型限制
  props: {
    name: String,
    gender: String,
    age: Number,
  }, */

  /* // 接收的同时对数据:进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      require: true, //name是必要的
    },
    gender: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      default: 99, //默认值，一般不和require同时出现
    },
  }, */
};
</script>

<style>
.sc {
  background-color: #eb9090;
}
</style>