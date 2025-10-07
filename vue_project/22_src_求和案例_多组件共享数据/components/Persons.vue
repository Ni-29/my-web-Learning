<template>
  <div>
    <h3 style="color: skyblue">上方组件的求和为{{ sum }}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul v-for="p in personsList" :key="p.id">
      <li>{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
// import { mapState } from "vuex";

export default {
  name: "Persons",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personsList() {
      return this.$store.state.personsList;
    },
    // ...mapState(["personsList"]),
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      // console.log(personObj);
      this.$store.commit("ADD_PERSONS", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>