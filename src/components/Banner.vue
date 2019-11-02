<template>
  <van-swipe :autoplay="4000" indicator-color="white" id="banner">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index" class="banner-item">
      <img :src="item.picUrl" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  name: "banner",
  props: {
    bannerList: Array
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
#banner {
  width: 100%;
  height: 191px;

  .banner-item {
    width: 100%;
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>