<template>
  <div class="buyChoose">
    <div class="mask"></div>
    <div class="chooseWrap">
      <div class="top">
        <div class="left">
          <img :src="info.imgUrl" />
        </div>
        <div class="center">
          <h6>{{info.title}}</h6>
          <p class="price">￥{{info.price}}</p>
        </div>
        <div class="right">
          <van-icon name="clear" @click="closeAction" color="#ddd"/>
        </div>
      </div>
      <div class="center">
        <div class="choose" v-for="type in info.skuSpecList" :key="type.type">
          <p class="tit">{{type.name}}</p>
          <p class="btnWrap" ref="btnWrap">
            <!-- <van-button color="#F5053D">500 g</van-button> -->
            <van-button color="#ddd" plain v-for="(item, index) in type.skuSpecValueList" :key="item.id" @click="selectAction($event, item.id, type.id, index, item.picUrl)">{{item.value}}</van-button>
          </p>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <p>购买数量</p>
          <p>剩余9件</p>
        </div>
        <div class="right">
          <van-stepper v-model="value" input-width="32px" button-size="30px" />
        </div>
      </div>
      <!-- 下一步 -->
    <van-button block color="#F5053D" @click="nextAction">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "buyChoose",
  props: {
    info: Object
  },
  data() {
    return {
      value: 1, // 购买数量
      selectObj: {},
    };
  },
  methods: {
    // 点击下一步
    nextAction() {},
    // 关闭选择
    closeAction() {
      this.$emit('close');
    },
    // 选属性
    selectAction(el, valueId, typeId, index, picUrl) {
      this.selectObj.valueId = valueId;
      this.selectObj.typeId = typeId;
      this.$refs.btnWrap.forEach(item => {
        item.children.forEach(subItem => {
          subItem.style.backgroundColor = "#fff";
          subItem.style.color = "#555";
        });
      });
      el.target.style.backgroundColor = "#F5053D";
      el.target.style.color = "#fff";
    },
    nextAction() {
      this.selectObj.goodId = this.info.id;
      this.selectObj.goodNum = this.value;
      this.selectObj.imgUrl = this.info.imgUrl;
      this.selectObj.title = this.info.title;
      this.selectObj.price = this.info.price;
      localStorage.setItem('goodInfo', JSON.stringify(this.selectObj));
      console.log(this.selectObj);
      this.$router.push(`/discover/submitOrder/id/${this.selectObj.goodId}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.buyChoose {
  position: fixed;
  top: 44px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 13;

  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .chooseWrap {
    background-color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0;
    padding: 10px;

    .top {
      position: relative;
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: row;

      .left {
        position: absolute;
        top: -20px;
        width: 80px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .center {
        width: 160px;
        height: 80px;
        margin-left: 90px;
        box-sizing: border-box;
        padding-top: 20px;

        h6 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          color: #555;
        }
        p {
          font-size: 12px;
          color: #f5053d;
          margin-top: 10px;
        }
      }
      .right {
        .van-icon {
          width: 32px;
          height: 32px;
        }
      }
    }

    .center {
      width: 100%;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .choose{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 60px;

        // 标题
        .tit {
          font-size: 12px;
          color: #333;
          flex: 3;
          text-align: left;
        }

        .btnWrap {
          flex: 5;
          text-align: left;

          .van-button {
            width: 68px;
            height: 21px;
            text-align: center;
            line-height: 21px;
            font-size: 8px;
            margin:  0 4px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .van-button.active {

          }
          
        }
      }
    }
    .bottom {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
      padding-right: 20px;

      .left {
        padding-top: 16px;

        p {
          font-size: 14px;
          color: #555;
          margin-top: 4px;
        }
      }
      .right {
        height: 70px;
        line-height: 70px;
      }
    }

    // 下一步
    .van-button {
      margin-left: -10px;
    }
  }
}
</style>