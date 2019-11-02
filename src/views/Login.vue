<template>
  <div id="login" class="pages subPages">
    <Header title="登录" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <div class="center">
          <span>有赞APP</span>
        </div>
        <van-button icon="phone-o" hairline color="#DD1A21" class="btn">手机号快捷登录</van-button>
        <van-button icon="comment-o" hairline color="#DD1A21" plain class="btn">邮箱账号登录</van-button>
        <p class="links">
          <a href="javascript:;">
            <van-icon name="chat" color="7F7F7F" class="icon"/>
            <span>微信</span>
          </a>
          <a href="javascript:;">
            <van-icon name="friends" color="7F7F7F" class="icon"/>
            <span>QQ</span>
          </a>
          <a href="javascript:;">
            <van-icon name="smile" color="7F7F7F" class="icon"/>
            <span>微博</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "login",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.contentWrap {
  background-color: #f8f8f8;

  .center {
    width: 100%;
    height: 200px;
    text-align: center;
    line-height: 200px;

    span {
      font-size: 20px;
      font-weight: bold;
      color: #555;
    }
  }
  .btn {
    display: block;
    width: 86%;
    margin: 12px auto;
  }
  .links {
    position: absolute;
    width: 100%;
    bottom: 50px;
    text-align: center;

    a {
      display: inline-block;
      border-right: 1px solid #ddd;
      padding: 5px 10px;

      .icon {
        color: #7F7F7F;
        font-size: 14px;
        vertical-align: middle;
      }
      span {
        color: #7F7F7F;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>