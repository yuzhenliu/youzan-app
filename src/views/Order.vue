<template>
  <div id="order" class="pages">
    <Header title="订单" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <OrderTab />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import OrderTab from "../components/Order-tab";

export default {
  name: "order",
  components: {
    Header,
    OrderTab
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // 组件内守卫
    next(vm => {
      if (!vm.$store.state.isLogin) {
        vm.$router.push(`/login`);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#order {
  background-color: #eee;
}
</style>