<template>
  <van-tabs
    v-model="active"
    color="#F5053D"
    title-inactive-color="#555"
    title-active-color="#F5053D"
  >
    <van-tab title="全部">
      <GoodOrder v-for="(good, index) in orderListAll" :key="good.id" :goodInfo="good" todo="未付款" :index="index"/>
    </van-tab>
    <van-tab title="待付款">
      <GoodOrder v-for="(good, index) in toPayList" :key="good.id" :goodInfo="good" todo="去付款" :index="index"/>
    </van-tab>
    <van-tab title="待发货">
      <GoodOrder v-for="(good, index) in toShippedList" :key="good.id" :goodInfo="good" todo="催发货" :index="index"/>
    </van-tab>
    <van-tab title="待收货">
      <GoodOrder v-for="(good, index) in toGetList" :key="good.id" :goodInfo="good" todo="确认收货" :index="index"/>
    </van-tab>
  </van-tabs>
</template>

<script>
import GoodOrder from "./Good-order";

export default {
  name: "ordertab",
  components: {
    GoodOrder
  },
  data() {
    return {
      active: 0,
      orderListAll: JSON.parse(localStorage.getItem("orderList")) || [], // 全部订单
      toPayList: JSON.parse(localStorage.getItem("toPayList")) || [], // 去付款
      toShippedList: JSON.parse(localStorage.getItem("toShippedList")) || [], // 待发货
      toGetList: JSON.parse(localStorage.getItem("toGetList")) || [], // 待收货
    };
  }
};
</script>

<style lang="scss" scoped>
.goodOrder {
  margin: 10px 0;
}
</style>