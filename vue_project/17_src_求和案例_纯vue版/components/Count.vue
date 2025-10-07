<template>
  <div class="count">
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model.number="selectNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="down">-</button>
    <button @click="old">当前和为奇数再加</button>
    <button @click="wait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      selectNum: 1,
    };
  },
  methods: {
    add() {
      this.sum += this.selectNum;
    },
    down() {
      this.sum -= this.selectNum;
    },
    old() {
      if (this.sum % 2 !== 0) {
        this.sum += this.selectNum;
      }
    },
    wait() {
      setTimeout(() => {
        this.sum += this.selectNum;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>