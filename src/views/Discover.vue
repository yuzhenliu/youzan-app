<template>
  <div id="discover" class="pages">
    <Header title="发现" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <Banner :bannerList="data.currentCategory.bannerList"/>
        <ul>
          <li v-for="(item, index) in data.categoryItemList" :key="index"><GoodsList :goodsList="item"/></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios")

import Header from "../components/Header"
import Banner from "../components/Banner"
import GoodsList from "../components/GoodsList"
import { request } from 'http';

export default {
  name: "discover",
  components: {
    Header,
    Banner,
    GoodsList
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async requestData() {
      try {
        const response = await axios.get("/api/home/catelist/itemlist", {
          params: {
            id: 1043000
          },
          baseURL: "http://www.littleemmayang.com:8000"
        });
        this.data = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.requestData();
  },
  mounted() {
    // var myScroll = new IScroll(this.refs.wrapper, {
    //   tap: true,
    //   click: true,
    //   probeType: 3
    // });
  },
  updated() {
    // myScroll.refresh();
  },
};
</script>

<style lang="scss" scoped>
</style>