<template>
  <div class="music-list">
    <div
      class="bg"
      style="background-image: url('https://img.yzcdn.cn/vant/cat.jpeg');"
    ></div>
    <div class="page-top">
      <div class="left">
        <img src="@/assets/left.png" alt="" >
      </div>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" class="pic" />
      <div class="title-name">
        <span>胎教音乐—打开宝宝的异想世界胎教音乐—打开宝宝的异想世界</span>
        <span>
          <img src="@/assets/bfl.png" alt="" /> 
          86457
        </span>
      </div>
    </div>
    <div class="page-main">
      <ul>
        <li 
          v-for="(item, index) in musicList"
          :key="index"
          @click="clickMusic(item, index)"
        >
          <img v-if="index === current" src="@/assets/ybf.png" alt="" class="icon">
          <img v-else src="@/assets/wbf.png" alt="" class="icon">
          <div 
            :class="{ 'play-name': index === current}"
            class="name"
          >{{item.name}}</div>
          <div class="tags">
            <span 
              v-for="(el, index) in item.tags"
              :key="index"
            >{{el}}</span>
          </div>
        </li>
      </ul>
      <img src="@/assets/by_banner2.png" alt="">
    </div>
    <Audio v-if="url !== ''"></Audio>
  </div>
</template>
<script>
  import Audio from './audio'; // 音乐组件
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        current: -1,
        musicList: [
          {
            id: 1,
            name: '淅沥沥啦啦',
            src: 'https://saas-oss.mumway.com/upload/images/20200515/20200515171822.mp3',
            tags: [
              '胎教音乐', '培养'
            ]
          },
          {
            id: 11,
            name: '莫问归期莫问归期莫问归期莫问归期',
            src: 'https://saas-oss.mumway.com/upload/images/20200515/20200515171854.mp3',
            tags: [
              '轻音乐', '欢快的歌曲'
            ]
          },
          {
            id: 13,
            name: '夏天的风',
            src: 'https://saas-oss.mumway.com/upload/images/20200515/20200515171908.mp3',
            tags: [
              '胎教音乐', '培养'
            ]
          },
          {
            id: 15,
            name: '少年',
            src: 'https://saas-oss.mumway.com/upload/images/20200515/20200515171929.mp3',
            tags: [
              '胎教音乐', '培养'
            ]
          },
          {
            id: 17,
            name: '后来遇见他',
            src: 'https://saas-oss.mumway.com/upload/images/20200514/20200514150326.mp3',
            tags: [
              '喜欢'
            ]
          },
        ]
      }
    },
    components: {
      Audio
    },
    methods: {
      clickMusic(musicUrl, index) {
        this.current = index;
        console.log(musicUrl)
        this.$store.commit('setId', musicUrl.id);
        this.$store.commit('setUrl', musicUrl.src);
        this.$store.commit('setTitle', musicUrl.name);
        this.$store.commit('setIsPlay',true);
        // if( this.isPlay ) {
        //   this.$store.commit('setIsPlay', false);
        // }else {
        //   this.$store.commit('setIsPlay',true);
        // }
      }
    },
    computed: {
      ...mapGetters([
        'url',
        'isPlay',
        'id',
        'title',
      ])
    },
  }
</script>

<style lang="scss">
  .music-list {
    min-height: 100%;
    .bg {
      height: rem(300);
      background-size: 100%;
      filter: blur(8px);
    }
    .page-top {
      display: flex;
      padding: 0.36rem;
      align-items: center;
      position: absolute;
      top: rem(88);
      left: 0;
      width: 90%;
      .left {
        width: rem(50);
        height: rem(50);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pic {
        width: rem(160);
        height: rem(160);
        margin-left: rem(40);
      }
      .title-name {
        margin-left: rem(35);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1;
        span:nth-child(1) {
          color: #404040;
          font-size: rem(30);
          display: inline-block;
          margin-top: 5%;
          margin-bottom: rem(20);
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
    .page-main {
      padding: 0 rem(25);
      background-color: #fff;
      border-radius: rem(60) rem(60) 0 0;
      padding-bottom: rem(120);
      position: absolute;
      top: rem(300);
      ul {
        padding: rem(20) 0;
        height: 45vh;
        overflow-y: scroll;
        li {
          height: rem(80);
          line-height: rem(80);
          display: flex;
          align-items: center;
          .icon {
            width: rem(40);
            height: rem(40);
          }
          .name {
            font-size: rem(30);
            color: #404040;
            margin: 0 rem(25);
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 40%;
            white-space: nowrap;
          }
          .play-name {
            font-size: rem(30);
            color: #EA6175;
            margin: 0 rem(25);
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 40%;
            white-space: nowrap;
          }
          .tags {
            span {
              color: #EA6175;
              border: 1px solid #EA6175;
              padding: rem(5) rem(13);
              border-radius: rem(15);
              margin-right: rem(10);
            }
          }
        }
        li:nth-last-child(1) {
          margin-bottom: rem(45);
        }
      }
    }
  }
</style>