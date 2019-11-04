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
          <van-switch-cell v-model="checked" title="短信通知收件人" />
          <!-- 商品金额 -->
          <div class="priceWrap">
            <p><span>商品金融</span><span>￥{{sum}}</span></p>
            <p><span>运费</span><span>￥{{fare}}</span></p>
          </div>
          <!-- 提交订单 -->
          <van-submit-bar :price="(sum * 100)" button-text="提交订单" @submit="submitAction" />
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
      fare: 0.00, // 运费
    };
  },
  methods: {
    // 添加收货地址
    addAction() {
      // 跳转到新增收货地址
      this.$router.push(`/discover/addaddr`);
    },
    // 提交订单
    submitAction() {
      // 获取到当前商品的信息，存入缓存中
      let goodObj = {
        id: this.id,
        goodInfo: this.goodInfo,
        message: this.message,
        checked: this.checked,
        sum: this.sum,
        fare:  this.fare,
      }
      // orderList: [] 全部
      // toPayList: [] 未付款
      // 判断缓存中有没有订单列表，有的话就取出来，把这个对象存进去 
      // 如果缓存中没有订单列表的话，就创建一个数组，以数组对象的形式存储
      if(localStorage.getItem('orderList')) {
        // 说明有
        let orderList = JSON.parse(localStorage.getItem('orderList'));
        orderList.push(goodObj);
        localStorage.setItem('orderList', JSON.stringify(orderList));

      }else {
        // 说明没有
        let orderList = [];
        orderList.push(goodObj);
        localStorage.setItem('orderList', JSON.stringify(orderList));
      }
      // 未付款列表
      if(localStorage.getItem('toPayList')) {
        // 说明有
        let orderList = JSON.parse(localStorage.getItem('toPayList'));
        orderList.push(goodObj);
        localStorage.setItem('toPayList', JSON.stringify(orderList));

      }else {
        // 说明没有
        let orderList = [];
        orderList.push(goodObj);
        localStorage.setItem('toPayList', JSON.stringify(orderList));
      }
      // 跳转到 order 页面
      this.$router.push(`/order`);
    }
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
  // 商品金额
  .priceWrap {
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;

    p {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      &:nth-of-type(2) {
        margin-top: 4px;
      }

      span {
        flex: 1;
        text-align: right;
        font-size: 14px;
        color: #555;

        &:nth-of-type(1) {
          text-align: left;
        }
      }
    }
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
