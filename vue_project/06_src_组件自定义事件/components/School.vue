<template>
  <div class="sc">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="sendSchoolName">点我把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "北大",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sc {
  background-color: #f5b3b3;
  margin-bottom: 15px;
  padding: 10px;
}
button {
  margin-top: 7px;
  background-color: #ffd563;
  border: 1.5px solid #000000;
  padding: 2px;
  cursor: pointer;
}
</style>