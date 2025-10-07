<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">点我+!</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="person.name += '!'">修改姓名</button>&nbsp;
  <button @click="person.age++">修改年龄</button>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = ref({
      name: "张三",
      age: 19,
    });

    // sum和msg不需要加value,person需要加
    watch(person.value, (newValue, oldValue) => {
      console.log(newValue, oldValue, person.value);
    });
    /* // 或者加深度监视
    watch(person,(newValue, oldValue) => {
        console.log(newValue, oldValue);
      },{ deep: true }); */

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
