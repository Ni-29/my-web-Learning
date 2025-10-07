<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <hr />
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      // axios.get("http://localhost:8080/students").then(
      axios.get("http://localhost:8080/api/students").then(
        // 成功
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/ppp/cars").then(
        // 成功
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>