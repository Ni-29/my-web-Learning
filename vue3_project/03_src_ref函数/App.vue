<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(19);
    let job = ref({
      type: "前端工程师",
      salary: "10k",
    });

    function changeInfo() {
      name.value = "李四";
      age.value = 20;
      job.value.type = "后端工程师";
      job.value.salary = "30k";
    }

    // 返回值
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

