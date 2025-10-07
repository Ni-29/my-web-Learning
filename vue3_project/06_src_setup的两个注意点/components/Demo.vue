<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",

  /* beforeCreate() {
    console.log("------beforeCreate------");
  }, */

  props: ["msg", "school"],
  emits: ["hello"],

  // setup在beforeCreate之前会执行一次，this是undefined
  setup(props, context) {
    /* console.log("------setup------", this); */
    // console.log(props, context);
    // console.log(context.attrs);
    // console.log(context.emits);  //context.emit()触发自定义事件
    // console.log(context.slots); //插槽

    // 数据
    let person = reactive({
      name: "张三",
      age: 19,
    });

    function test() {
      context.emit("hello", 666);
    }

    // 返回值
    return {
      person,
      test,
    };
  },
};
</script>
