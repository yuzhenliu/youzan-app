<template>
  <div class="pages">
    <Header title="联系客服" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">联系客服的内容</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "contact",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>