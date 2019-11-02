<template>
  <van-tabs v-model="active" color="#F5053D" title-inactive-color="#555" title-active-color="#F5053D">
  <van-tab title="全部">
    <GoodOrder />
  </van-tab>
  <van-tab title="待付款">待付款</van-tab>
  <van-tab title="待发货">待发货</van-tab>
  <van-tab title="待收货">待收货</van-tab>
</van-tabs>
</template>

<script>
import GoodOrder from './Good-order'

export default {
  name: "ordertab",
  components: {
    GoodOrder
  },
  data() {
    return {
      active: 0
    };
  },
};
</script>

<style lang="scss" scoped>
</style>