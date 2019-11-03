<template>
  <div class="pages">
    <Header title="管理收货地址" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">

        <!-- 地址列表本来应该是动态渲染的，但是因为网慢，暂时是假数据 -->
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
          @add="onAdd"
          @edit="onEdit"
        />

      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "addrManage",
  components: {
    Header
  },
  data() {
    return {
      // 原本就有的假数据

      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      console.log('新增地址');
    },

    onEdit(item, index) {
      console.log('编辑地址:' + index);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>