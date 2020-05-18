<template>
  <div class="baby-music">
    <div class="main">
      <img src="@/assets/by_banner2.png" alt="">
      <div class="tab-main">
        <van-tabs>
          <van-tab title="功能类">
            <div class="type">
              <span @click="showPopup">不限类型</span>
            </div>
            <ul class="gd_list">
              <li @click="gqList"
                v-for="(item, index) in 7"
                :key="index"
              >
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
                <div class="title-name">
                  <span>胎教音乐—打开宝宝的异想世界胎教音乐—打开宝宝的异想世界</span>
                  <span>
                    <img src="@/assets/bfl.png" alt="" /> 
                    86457
                  </span>
                </div>
              </li>
            </ul>
            <van-popup v-model="show" position="top" :style="{ height: '30%' }">
              <div class="title">功能</div>
              <ul class="showList">
                <li>不限</li>
                <li>促进发育</li>
                <li>胎教故事</li>
                <li>孕期好眠</li>
                <li>安抚情绪</li>
                <li>智力成长</li>
              </ul>
            </van-popup>
          </van-tab>
          <van-tab title="风格类">
            <div class="type">
              <span @click="showPopupStyle">不限类型</span>
            </div>
            <ul class="gd_list">
              <li
                v-for="(item, index) in 5"
                :key="index"
              >
                <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                <div class="title-name">
                  <span>胎教音乐—打开宝宝的异想世界胎教音乐—打开宝宝的异想世界</span>
                  <span>
                    <img src="@/assets/bfl.png" alt="" /> 
                    86457
                  </span>
                </div>
              </li>
            </ul>
            <van-popup v-model="showStyle" position="top" :style="{ height: '30%' }">
              <div class="title">风格</div>
              <ul class="showList">
                <li>不限</li>
                <li>中国古典乐</li>
                <li>轻音乐</li>
                <li>交响曲</li>
                <li>世界名曲</li>
                <li>儿歌故事</li>
              </ul>
            </van-popup>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  
  import { Tab, Tabs , Popup } from 'vant';


  Vue.use(Tab).use(Tabs).use(Popup);

  
  export default {
    name: 'babyMusic',
    data() {
      return {
        show: false,
        showStyle: false
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      showPopupStyle() {
        this.showStyle = true;
      },
      gqList() {
        this.$router.push({
          name: 'musicList'
        })
      },
    },
  }
</script>
<style lang='scss' scoped>
  .baby-music {
    background-color: #FFEBEC;
    min-height: 100%;
    .main {
      .tab-main {
        border-radius: rem(60) rem(60) 0 0;
        overflow: hidden;
        margin: 0 rem(22);
        background-color: #fff;
        .type {
          margin: rem(50);
          span {
            font-size: rem(32);
            color: #404040;
          }
        }
        .gd_list {
          margin: 0 rem(50);
          li {
            display: flex;
            margin-bottom: rem(60);
            img {
              width: rem(160);
              height: rem(160);
            }
            .title-name {
              margin-left: rem(50);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              flex: 1;
              span:nth-child(1) {
                color: #404040;
                font-size: rem(30);
                display: inline-block;
                margin-top: 8%;
                margin-bottom: rem(30);
              }
              span:nth-child(2) {
                color: #BEBEBE;
                font-size: rem(26);
                display: flex;
                align-items: center;
                img {
                  width: rem(25);
                  height: rem(29);
                  margin-right: rem(10);
                }
              }
            }
          }
        }
        .title {
          margin: rem(36) 0 rem(36) rem(50);
          font-size: rem(32);
          color: #404040;
        }
        .showList {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 33%;
            margin-top: rem(20);
            text-align: center;
            height: rem(66);
            line-height: rem(66);
          }
        }
      }
    }
  }
</style>