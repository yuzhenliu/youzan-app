<template>
  <div id="goodsList">
    <div class="header">
      <h3 class="title">{{goodsList.category.name}}</h3>
      <p class="info">{{goodsList.category.frontName}}</p>
    </div>
    <ul class="list">
      <li class="list-item" v-for="item in goodsList.itemList" :key="item.id" @click="clickAction(item.id)">
        <Good :good="item"/>
      </li>
      <li class="list-item"></li>
    </ul>
  </div>
</template>

<script>
import Good from "./Good";
export default {
  name: "goodsList",
  components: {
    Good
  },
  props: {
    goodsList: Object
  },
  data() {
    return {};
  },
  methods: {
    clickAction(id) {
      this.$router.push(`/discover/detail/id/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
#goodsList {
  margin-top: 10px;
  background-color: #fff;

  .header {
    width: 100%;
    height: 50px;
    padding-top: 6px;
    box-sizing: border-box;

    .title {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #333;
      font-weight: normal;
    }

    .info {
      width: 100%;
      text-align: center;
      font-size: 10px;
      color: #999;
      margin-top: 6px;
    }
  }

  .list {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .list-item {
      width: 40%;
      height: 230px;
    }
  }
}
</style>