<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <h2>爱好：{{ hobby }}</h2>
  <h2>测试数据：{{ job.a.b.c }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(19);

    // ref:定义一个响应式数据
    /*     let job = ref({
      type: "前端工程师",
      salary: "10k",
    }); */

    // reactive：定义一个对象属性的响应式数据
    let job = reactive({
      type: "前端工程师",
      salary: "10k",
      // reactive下测试数据
      a: { b: { c: 666 } },
    });

    let hobby = reactive(["唱歌", "跳舞", "画画"]);

    function changeInfo() {
      name.value = "李四";
      age.value = 20;

      // 用ref定义
      /* job.value.type = "后端工程师";
      job.value.salary = "30k"; */

      // 用reactive定义
      job.type = "后端工程师";
      job.salary = "30k";
      hobby[0] = "解密";

      job.a.b.c = 999;
    }

    // 返回值
    return {
      name,
      age,
      job,
      hobby,
      changeInfo,
    };
  },
};
</script>

