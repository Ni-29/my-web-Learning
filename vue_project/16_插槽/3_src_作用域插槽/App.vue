<template>
  <div class="container">
    <Category title="游戏">
      <template scope="ppp" slot="demo1">
        <ul>
          <li v-for="(data, index) in ppp.games" :key="index">{{ data }}</li>
        </ul>
      </template>
      <div slot="demo2" class="gm">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="游戏">
      <template scope="{games}" slot="demo1">
        <ol>
          <li v-for="(data, index) in games" :key="index">{{ data }}</li>
        </ol>
      </template>
      <div slot="demo2" class="gm">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="游戏">
      <template scope="ppp" slot="demo1">
        <h4 v-for="(data, index) in ppp.games" :key="index">{{ data }}</h4>
      </template>
      <div slot="demo2" class="gm">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.gm,
.ft {
  display: flex;
  justify-content: space-around;
}

img,
video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>
