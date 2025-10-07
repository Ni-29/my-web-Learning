<template>
  <div class="count">
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前求和放大10倍后为：{{ bigSum }}</h2>
    <select v-model.number="selectNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(selectNum)">+</button>
    <button @click="down(selectNum)">-</button>
    <button @click="old(selectNum)">当前和为奇数再加</button>
    <button @click="wait(selectNum)">等一等再加</button>

    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h4 style="color: skyblue">下方列表的总人数为：{{ personsList.length }}</h4>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      selectNum: 1,
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据   简写（数组写法）
    ...mapState("countAbout", ["sum", "school", "subject", "personsList"]),
    ...mapState("personAbout", ["personsList"]),

    // 借助mapGetters生成计算属性，从getters中读取数据  简写（数组写法）
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（对象写法）
    ...mapMutations("countAbout", { add: "JIA", down: "JIAN" }),

    // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions（对象写法）
    ...mapActions("countAbout", { old: "jiaOld", wait: "jiaWait" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>