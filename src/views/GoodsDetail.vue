<template>
  <div class="goodsDetail pages subPages">
    <Header title="有赞精选" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img :src="data.picUrl1" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="data.picUrl1" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="data.picUrl1" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="data.picUrl1" />
          </van-swipe-item>
        </van-swipe>
        <!-- 标题部分 -->
        <div class="titleWrap">
          <h3 class="tit">{{goodDetail.name}}</h3>
          <p class="price">￥{{goodDetail.retailPrice}}</p>
        </div>
        <!-- 运费盒子 -->
        <div class="fare">
          <p>运费:免运费</p>
          <p>剩余:233</p>
          <p>销量:23</p>
        </div>
        <!-- 详情页面 -->
        <div class="detail" ref="detail"></div>
        <!-- 立即购买 -->
        <van-button block color="#F5053D" @click="clickBuyAction">立即购买</van-button>
        
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import Header from "../components/Header";
export default {
  name: "",
  props: {
    id: String
  },
  components: {
    Header
  },
  data() {
    return {
      goodDetail: {},
      data: {}
    };
  },
  methods: {
    // 请求数据
    async requestGoodDetail() {
      try {
        const response = await axios.get("/api/item/detail", {
          params: {
            id: 3826035
          },
          baseURL: "http://www.littleemmayang.com:8000"
        });
        this.goodDetail = response.data.data;
        this.data = this.goodDetail.itemDetail;
        this.$refs.detail.innerHTML = this.data.detailHtml;
      } catch (error) {
        console.error(error);
      }
    },
    // 点击立即购买
    clickBuyAction() {

    }
  },
  created() {
    this.requestGoodDetail();
  }
};
</script>

<style lang="scss" scoped>
.goodsDetail {
  // 轮播图
  .van-swipe {
    width: 100%;
    height: 362px;

    .van-swipe-item {
      width: 100%;
      height: 100%;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  // 标题部分
  .titleWrap {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;

    .tit {
      font-size: 18px;
      color: #333;
    }
    .price {
      font-size: 16px;
      color: #f5053d;
      margin-top: 4px;
    }
  }

  // 运费盒子
  .fare {
    width: 100%;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    p {
      height: 22px;
      line-height: 22px;
      color: #9e9e9e;
      font-size: 12px;
    }
  }
  // 详情页面
  .detail {
    width: 100%;
    overflow: hidden;

    p {
      width: 100%;

      img {
        width: 100%;
        display: block;
      }
    }
  }

  // 立即购买
  .van-button {
    position: fixed;
    left: 0;
    bottom: 0;
  }

}
</style>