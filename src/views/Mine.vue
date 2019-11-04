<template>
  <div id="mine" class="pages">
    <Header title="我的" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <!-- 头像 -->
        <div class="userAvarWrap">
          <p>头像</p>
          <div class="userAvar">
            <img src="../assets/1.jpeg" />
          </div>
        </div>
        <!-- 昵称等 -->
        <van-cell-group id="nick" border>
          <van-cell title="昵称" value="墨小刀" />
          <van-cell title="性别" value="女" />
          <!-- 路由跳转还没有实现 -->
          <van-cell title="我的收货地址" is-link to="/mine/addrManage" />
        </van-cell-group>
        <!-- 联系客服 -->
        <van-cell title="联系客服" is-link to="/mine/contact" id="contact" />
        <!-- 帮助中心 -->
        <van-cell title="帮助中心" is-link to="/mine/helpCenter" id="helpCenter" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "mine",
  components: {
    Header
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    // 组件内守卫
    next((vm) => {
      if (!vm.$store.state.isLogin) {
        vm.$router.push(`/login`);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#mine {
  background-color: #eee;

  // 用户头像
  .userAvarWrap {
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: 2px;
    background-color: #fff;

    p {
      text-align: left;
      font-size: 14px;
      color: #555;
    }
    .userAvar {
      width: 60px;
      height: 60px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  // 昵称
  #nick {
    margin-top: 12px;
  }

  // 联系客服
  #contact {
    margin-top: 12px;
  }

  // 帮助中心
  #helpCenter {
    margin-top: 12px;
  }
}
</style>