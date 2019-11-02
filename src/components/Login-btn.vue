<template>
  <div class="loginBtn">
    <van-icon name="close" />
    <span></span>
  </div>
  <!-- <LoginBtn color="#fff" bgColor="#DD1A21" title="手机号快捷登录" iconName="phone-o"/>
  <LoginBtn color="#DD1A21" bgColor="#f8f8f8" title="邮箱账号登录" iconName="comment-o"/> -->
</template>

<script>
export default {
  name: 'login-btn',
  props: {
    color: String,
    bgColor: String,
    title: String,
    iconName: String
  },
  data() {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
.loginBtn {

}
</style>