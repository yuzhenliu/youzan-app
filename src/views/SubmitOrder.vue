<template>
  <div id="submitOrder" class="pages">
    <Header title="提交订单" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <van-button icon="add-square" @click="addAction">新增收货地址</van-button>
        <!-- 商品信息 -->
        <div class="goodInfoWrap">
          <p class="header">
            <van-icon name="shop" />
            <span>墨刀小集市</span>
          </p>
          <div class="content">
            <div class="left">
              <img :src="goodInfo.imgUrl" />
            </div>
            <div class="center">
              <h6>{{goodInfo.title}}</h6>
              <p>商品描述信息</p>
            </div>
            <div class="right">
              <p class="price">￥{{goodInfo.price}}</p>
              <p class="num">x{{goodInfo.goodNum}}</p>
            </div>
          </div>
          <van-cell-group>
            <van-cell title="配送方式" value="免邮费" label="快递发货" />
          </van-cell-group>
          <!-- 买家留言 -->
          <van-cell-group border>
            <van-field
              v-model="message"
              rows="1"
              autosize
              label="买家留言"
              type="textarea"
              placeholder="请输入留言"
            />
          </van-cell-group>
          <!-- 合计 -->
          <van-cell-group>
            <van-cell title="合计" :value="sum"/>
          </van-cell-group>
          <!-- 短信通知 -->
          <van-switch-cell v-model="checked" title="标题" />
          <!-- 提交订单 -->
          <van-submit-bar :price="sum" button-text="提交订单" @submit="submitAction" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "submit",
  components: {
    Header
  },
  data() {
    return {
      id: this.$route.params.id, // 接收到的商品id
      goodInfo: JSON.parse(localStorage.getItem('goodInfo')),
      message: "", // 买家留言
      checked: true, // 是否开启短信通知
      sum: 0,  // 总价
    };
  },
  methods: {
    // 添加收货地址
    addAction() {
      // 跳转到新增收货地址
      this.$route.push();
    },
    // 提交订单
    submitAction() {}
  },
  created() {
    this.sum = this.goodInfo.price * this.goodInfo.goodNum;
  }
};
</script>

<style lang="scss" scoped>
#submitOrder {
  bottom: 0;
  z-index: 10;
  background-color: #eee;

  // 新增收货地址
  .van-button {
    display: block;
    width: 100%;
    margin-top: 8px;
    text-align: left;
  }

  // 商品信息头部
  .header {
    width: 100%;
    height: 42px;
    padding-left: 10px;
    box-sizing: border-box;
    text-align: left;
    line-height: 42px;
    background-color: #fff;
  }

  // 中间的内容
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

  // 运费
  // 买家留言
  // 合计
  .van-cell__value {
    span {
      color: #f5053d;
    }
  }

  // 短信通知
  .van-switch-cell {
    margin: 10px 0;
  }
  // 提交订单
  .van-submit-bar__bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;

    // 提交订单信息
    .van-submit-bar__text {
      flex: 7;

      span {
        font-size: 16px;
        color: #555;
      }
      .van-submit-bar__price {

      }
    }
    // 提交订单按钮
    .van-submit-bar__button {
      flex: 3;
      font-size: 14px;
      background-color: #F5053D;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
