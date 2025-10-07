<template>
  <div class="app">
    <h1 v-text="msg"></h1>
    <hr />
    <!-- 通过父组件给子组件传递函数类型的props：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种写法，使用@或v-on）-->
    <!-- <Student v-on:ppp="demo" /> -->
    <Student @ppp="getStudentName" @click.native="show" />
    <!-- .native 绑定原生事件 -->
    <!-- <Student @ppp="getStudentName" @ggg="demo" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第二种写法，使用ref）-->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
// 引入MyStudent组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "学生信息",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App得到了学校的名字", name);
    },
    getStudentName(name) {
      console.log("App得到了学生的名字", name);
    },
    // demo() {
    //   console.log("demo被触发了");
    // },
    show() {
      alert("12345");
    },
  },
  mounted() {
    // this.$refs.student.$on("ppp", this.getStudentName);//绑定自定义事件
    // this.$refs.student.$once("ppp", this.getStudentName);//绑定自定义事件（一次性）
    // setTimeout(() => {
    //   this.$refs.student.$on("ppp", this.getStudentName);
    // }, 3000);//绑定自定义事件（定时）
  },
};
</script>

<style>
.app {
  background-color: #88c8e8;
  padding: 10px;
}
</style>