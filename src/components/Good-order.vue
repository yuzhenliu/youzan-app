<template>
  <div class="goodOrder">
    <!-- 头部 -->
    <div class="header">
      <div class="left">
        <h6>店铺: lagln</h6>
        <p>订单编号: leli</p>
      </div>
      <div class="right">
        <p>等待买家付款</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="left">
        <img src="../assets/logo.png" />
      </div>
      <div class="center">
        <h6>右击刷个</h6>
        <p>79g,gore</p>
      </div>
      <div class="right">
        <p class="price">￥234</p>
        <p class="num">x 2</p>
      </div>
    </div>
    <!-- 总计 -->
    <p class="allPrice">
      合计:
      <span class="price">￥233.00</span>
    </p>
    <!-- 付款 -->
    <p class="priceBtn">
      <van-button plain>取消</van-button>
      <van-button color="#F5053D">付款</van-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "goodOrder",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.goodOrder {
  width: 100%;
  height: 236px;
  background-color: #fff;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  .header {
    width: 100%;
    height: 60px;
    display: flex;
    box-sizing: border-box;
    padding: 10px;

    .left,
    .right {
      flex: 1;
    }

    .left {
      h6 {
        font-size: 14px;
        font-weight: normal;
        color: #101010;
      }
      p {
        font-size: 12px;
        color: #555;
        margin-top: 6px;
      }
    }
    .right {
      p {
        color: #f5053d;
        font-size: 14px;
        text-align: right;
      }
    }
  }

  .content {
    width: 100%;
    height: 93px;
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    background-color: #e3e3e3;

    .left {
      width: 87px;
      height: 87px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .center {
      margin-left: 10px;
      width: 160px;

      h6 {
        width: 100%;
        font-size: 16px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      p {
        width: 100%;
        font-size: 12px;
        color: #555;
      }
    }
    .right {
      .price {
        font-size: 16px;
        color: #333;
        text-align: right;
      }
      .num {
        font-size: 12px;
        color: #555;
        text-align: right;
      }
    }
  }

  .allPrice {
    width: 100%;
    text-align: right;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: #444;
    box-sizing: border-box;
    padding-right: 10px;

    .price {
      color: #f5053d;
    }
  }
  .priceBtn {
    height: 45px;
    line-height: 45px;
    text-align: right;
    padding-right: 10px;

    .van-button {
      width: 45px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      font-size: 10px;
      padding: 0;
      margin: 0 4px;
    }
  }
}
</style>