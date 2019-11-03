<template>
  <div class="goodOrder">
    <!-- 头部 -->
    <div class="header">
      <div class="left">
        <h6>店铺: 墨小刀</h6>
        <p>订单编号: {{goodInfo.id + goodInfo.goodInfo.valueId}}</p>
      </div>
      <div class="right">
        <p>等待买家付款</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="left">
        <img :src="goodInfo.goodInfo.imgUrl" />
      </div>
      <div class="center">
        <h6>{{goodInfo.goodInfo.title}}</h6>
        <!-- 本来应该是描述信息，没保存 -->
        <p>{{goodInfo.goodInfo.title}}</p>
      </div>
      <div class="right">
        <p class="price">￥{{goodInfo.sum}}</p>
        <p class="num">x {{goodInfo.goodInfo.goodNum}}</p>
      </div>
    </div>
    <!-- 总计 -->
    <p class="allPrice">
      合计:
      <span class="price">￥{{goodInfo.sum}}</span>
    </p>
    <!-- 付款 -->
    <p class="priceBtn">
      <van-button plain>取消</van-button>
      <van-button color="#F5053D" @click="clickAction">{{todo}}</van-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "goodOrder",
  props: {
    goodInfo: Object,
    todo: String,
    index: Number
  },
  data() {
    return {};
  },
  methods: {
    // 需要根据用户点击的时候的值来判断
    clickAction() {
      switch (this.todo) {
        case "未付款": // 点击的是全部里面的，没有任何动作
          console.log("你点击了未付款");
          break;
        case "去付款": // 点击的是全部里面的，没有任何动作
          console.log("你点击了去付款");
          this.payAction();
          break;
        case "催发货": // 点击的是全部里面的，没有任何动作
          console.log("已催促买家发货");
          break;
        case "确认收货": // 点击的是全部里面的，没有任何动作
          console.log("确认收货");
          break;
      }
    },

    // 当点击付款的时候，弹出确认框
    // 点击确定时，从缓存中获得未付款列表，如果有就存入，如果没有就创建一个数组，存入
    // 未付款列表
    // 付款
    payAction() {
      if (confirm("确认付款")) {
        // true

        if (localStorage.getItem("toShippedList")) {
          // 说明有
          let orderList = JSON.parse(localStorage.getItem("toShippedList"));
          orderList.push(this.goodInfo);
          localStorage.setItem("toShippedList", JSON.stringify(orderList));
        } else {
          // 说明没有
          let orderList = [];
          orderList.push(this.goodInfo);
          localStorage.setItem("toShippedList", JSON.stringify(orderList));
        }

        // 要从未付款中删除这条数据
        let arr = JSON.parse(localStorage.getItem('toPayList'));
        arr.splice(this.index, 1);
        localStorage.setItem('toPayList', JSON.stringify(arr))
      } else {
        // false
        // 没有任何动作
      }
    }
  }
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
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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