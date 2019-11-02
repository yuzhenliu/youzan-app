<template>
  <div id="good">
    <img :src="good.primaryPicUrl" class="img">
    <p class="info">{{good.simpleDesc}}</p>
    <h6 class="goodTit">{{good.name}}</h6>
    <p class="price">{{'￥' + good.retailPrice}}</p>
  </div>
</template>

<script>
export default {
  name: "good",
  props: {
    good: Object
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#good {
  width: 100%;
  height: 100%;

  .img {
    width: 100%;
    height: 150px;
    display: block;
  }

  .info {
    width: 100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: rgb(241, 4, 4);
    font-size: 12px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goodTit {
    width: 100%;
    height: 20px;
    font-weight: normal;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }

  .price {
    color: #DD1A21;
    font-size: 12px;
  }

}
</style>