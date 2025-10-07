<template>
  <div class="sc">
    <h2>学校名称：{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "清华",
    };
  },
};
</script>

<style>
.sc {
  background-color: #eb9090;
}
</style>