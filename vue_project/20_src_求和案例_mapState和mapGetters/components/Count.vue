<template>
  <div class="count">
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前求和放大10倍后为：{{ bigSum }}</h2>
    <select v-model.number="selectNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="down">-</button>
    <button @click="old">当前和为奇数再加</button>
    <button @click="wait">等一等再加</button>

    <h3>我在{{ school }},学习{{ subject }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      selectNum: 1,
    };
  },
  computed: {
    /*   sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 简写
    ...mapState(["sum", "school", "subject"]),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    add() {
      this.$store.commit("JIA", this.selectNum);
    },
    down() {
      this.$store.commit("JIAN", this.selectNum);
    },
    old() {
      this.$store.dispatch("jiaOld", this.selectNum);
    },
    wait() {
      this.$store.dispatch("jiaWait", this.selectNum);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>