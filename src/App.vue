<template>
  <div id="app">
    <van-tabbar
      route
      v-model="active"
      active-color="#F5053D"
      inactive-color="#101010"
      class="tabBar"
    >
      <van-tabbar-item replace to="/discover" icon="good-job-o" class="tabBar-item">发现</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="notes-o" class="tabBar-item">订单</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o" class="tabBar-item">我</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

  img {
    width: 100%;
  }
}
html,
body {
  width: 100%;
  height: 100%;

  .van-icon {
    width: 30px;
    font-size: 20px;
  }
}
#app {
  width: 100%;
  height: 100%;

  #headCon {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: 12;
  }

  // 主页面
  .pages {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 50px;
    width: 100%;

    #wrapper {
      position: absolute;
      top: 44px;
      left: 0;
      bottom: 0;
      width: 100%;
      // overflow: hidden;

      .contentWrap {
        width: 100%;
        min-height: 100%;
      }
    }
  }
  // 主页面中覆盖的子页面
  .pages.subPages {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 14;
    background-color: #fff;
  }
}
</style>