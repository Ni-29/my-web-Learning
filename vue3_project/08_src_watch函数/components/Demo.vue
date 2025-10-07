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
import { ref, reactive, watch } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 19,
    });

    /* // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log("sum变了", newValue, oldValue);
    },{immediate:true}); */

    /* // 情况二：监视ref所定义的多个响应式数据
    watch([sum, msg],(newValue, oldValue) => {
        console.log("sum或msg变了", newValue, oldValue);
      },{ immediate: true }); */

    /* // 情况三：监视reactive所定义的一个响应式数据的全部属性,注意此处无法正确的获取oldValue并且强制开启了deep深度监视（deep配置无效）
    watch(person, (newValue, oldValue) => {
      console.log("person变了", newValue, oldValue);
    }); */

    /* // 情况四：监视reactive所定义的一个响应式数据的某个属性
    watch(()=>person.age, (newValue, oldValue) => {
      console.log("person的age变了", newValue, oldValue);
    }); */

    // 情况五：监视reactive所定义的一个响应式数据的某些属性
    watch(
      () => [person.age, person.name],
      (newValue, oldValue) => {
        console.log("person的age或name变了", newValue, oldValue);
      }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
