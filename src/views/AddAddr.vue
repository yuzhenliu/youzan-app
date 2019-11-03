<template>
  <div id="addaddr" class="pages subPages">
    <Header title="新增收货地址" />
    <div id="wrapper" ref="wrapper">
      <div class="contentWrap">
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "addaddr",
  components: {
    Header
  },
  data() {
    return {
      areaList,
      searchResult: [],
      id,
      name,
      tel,
      province,
      city,
      county,
      addressDetail,
      areaCode,
      postalCode,
      isDefault
    };
  },
  methods: {
    onSave() {
      console.log('save');
      let addObj = {
        id: this.id,
        name: this.name,
        tel: this.tel,
        province: this.province,
        city: this.city,
        county: this.county,
        addressDetail: this.addressDetail,
        areaCode: this.areaCode,
        postalCode: this.postalCode,
        isDefault: this.isDefault
      }
      console.log(addObj);
      // 存到缓存中 以数组对象的形式，在订单页面进行获取，显示地址
      // 跳转回去
      this.$router.back();
    },
    onDelete() {
       console.log('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#addaddr {
  // background-color: #fff;
}
</style>