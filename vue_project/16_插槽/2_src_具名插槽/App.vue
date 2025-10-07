<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="demo1"
        src="https://ts2.tc.mm.bing.net/th/id/OIP-C.gBgo_ctCW6e-wryE4rMOLQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <a slot="demo2" href="#">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="demo1">
        <li v-for="(data, index) in games" :key="index">{{ data }}</li>
      </ul>
      <div slot="demo2" class="gm">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="视频">
      <video
        slot="demo1"
        src="https://vdse.bdstatic.com//aca764fcda1757e7020acf88cdc45ee9.mp4?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2025-09-04T08%3A12%3A20Z%2F-1%2Fhost%2F175b63ade6f22c1a88810e22563951531ba640583c5ee3d7314b04553f901185"
        controls
      ></video>
      <!-- <template slot="demo2"> -->
      <template v-slot:demo2>
        <div class="ft">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观影！</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["恋与深空", "世界之外", "易次元", "开心消消乐"],
      films: ["《霸王别姬》", "《大话西游》", "《教父》", "《千与千寻》"],
    };
  },
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
