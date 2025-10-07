<template>
  <h1>个人信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <button @click="changeInfo">修改人的信息</button>&nbsp; &nbsp;
  <button @click="addSex">添加人的性别</button>&nbsp;&nbsp;
  <button @click="deleteName">删除人的姓名</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 19,
      job: {
        type: "前端工程师",
        salary: "10k",
      },
      hobby: ["唱歌", "跳舞", "画画"],
    });

    function changeInfo() {
      person.name = "李四";
      person.age = 20;
      person.job.type = "后端工程师";
      person.job.salary = "30k";
      person.hobby[0] = "解密";
    }

    function addSex() {
      person.sex = "男";
    }
    function deleteName() {
      delete person.name;
    }

    // 返回值
    return {
      person,
      changeInfo,
      addSex,
      deleteName,
    };
  },
};
</script>
