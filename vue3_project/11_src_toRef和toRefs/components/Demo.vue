<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="name += '!'">修改姓名</button>&nbsp;
  <button @click="age++">修改年龄</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 19,
    });

    return {
      /* name: toRef(person, 'name'),
      age: toRef(person, 'age') */

      ...toRefs(person)
    };
  },
};
</script>
