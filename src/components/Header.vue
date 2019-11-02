<template>
  <div id="headCon">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight" border>
      <van-icon name="arrow-left" slot="left" color="#DD1A2E"/>
      <van-icon name="wap-home-o" slot="right" color="#DD1A2E"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "headCon",
  props: {
    title: String
  },
  data() {
    return {
    
    };
  },
  methods: {
    onClickLeft() {
      window.console.log("返回");
      this.$router.back();
    },
    onClickRight() {
      window.console.log("首页");
      this.$router.push({name: 'home'});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>