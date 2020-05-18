<template>
  <div class="audio">
    <div class="flex">
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" class="photo"/>
      <div class="name">{{title}}</div>
      <div>
        <img v-show="!isPlay" @click="playMusic" src="@/assets/play.png" alt="播放"  class="play" />
        <img v-show="isPlay" @click="playMusic" src="@/assets/puase.png" alt="播放"  class="play" />
      </div>
      <div @click="timing" class="time">
        <img src="@/assets/time.png" alt="" />
      </div>
      <audio :src="url" id="player" :loop="loop" autoplay="autoplay"></audio>
    </div>
    
    <div class="timeList">
      <van-action-sheet v-model="show"
        cancel-text="关闭"
        @cancel="onCancel"
      >
        <ul>
          <li 
            v-for="(item, index) in list"
            :key="index"
            :class="{ 'active': index === activeIndex}"
            @click="changeTime(item, index)"
          >{{item.name}}</li>
        </ul>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ActionSheet } from 'vant';
  Vue.use(ActionSheet);

  import { mapMutations, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        show: false,
        loop: false,
        activeIndex: 0,
        list: [{
          name: '关闭定时播放'
        },{
          name: '当前音乐播放完后停止'
        },{
          name: '90分钟后停止'
        },{
          name: '60分钟后停止'
        },{
          name: '30分钟后停止'
        },{
          name: '20分钟后停止'
        },{
          name: '10分钟后停止'
        }]
      }
    },
    computed: {
      ...mapGetters([
        'id',
        'url',
        'isPlay',
        'title',
        'time',
        'isCloseTime'
      ])
    },
    watch: {
      isPlay: function()  {
        this.togglePlay();
      },
      url: function()  {
        this.togglePlay();
      },
    },
    methods: {
      //  开始\暂停
      togglePlay() {
        var player =  document.querySelector('#player');
        setTimeout( () => {
          if( this.isPlay ) {
            player.play();
          }else {
            player.pause();
          }
        }, 1000)
      },
      playMusic() {
        if( this.isPlay ) {
          this.$store.commit('setIsPlay', false);
        }else {
          this.$store.commit('setIsPlay',true);
        }
      },
      timing() {
        this.show = true;
      },
      onCancel() {
        this.show = false;
      },
      changeTime(item, index) {
        this.activeIndex = index;
        switch (index) {
          case 0:
            this.$store.commit('setTime', '');
            this.$store.commit('setIsCloseTime', false);
            break;
          case 1:
            this.loop = false;
            this.$store.commit('setTime', '');
            this.$store.commit('setIsCloseTime', false);
            break;
          case 2:
            this.$store.commit('setTime', 5400000);
            this.timmer(5400000)
            break;
          case 3:
            this.$store.commit('setTime', 3600000);
            this.timmer(3600000)
            break;
          case 4:
            this.$store.commit('setTime', 1800000);
            this.timmer(1800000)
            break;
          case 5:
            this.$store.commit('setTime', 1200000);
            this.timmer(1200000)
            break;
          case  6:
            this.$store.commit('setTime', 600000);
            this.timmer(600000)
            break;
        }
      },
      timmer(second) { // 定时关闭播放
        setTimeout( () => {
          this.$store.commit('setIsPlay', false);
          this.$store.commit('setTime', '');
          this.$store.commit('setIsCloseTime', false);
          this.activeIndex = 0;
        }, second)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .audio {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .flex {
      width: 90%;
      height: rem(120);
      display: flex;
      background-color: #fff;
      align-items: center;
      padding: 0 5%;
      .photo {
        border-radius: 50%;
        overflow: hidden;
        width: rem(80);
        height: rem(80);
      }
      .name {
        font-size: rem(30);
        color: #404040;
        margin-left: rem(30);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .play {
        width: rem(80);
        height: rem(80);
        margin: 0 rem(35);
      }
      .time {
        width: rem(42);
        height: rem(48);
      }
    }
    .timeList {
      ul {
        padding: 0 rem(50);
        li {
          height: rem(100);
          line-height: rem(100);
          font-size: rem(30);
          font-family:Microsoft YaHei UI;
          font-weight:400;
          color:#404040;
        }
        .active {
          color: #EA6175;
        }
        .active::after {
          content: '';
          position: absolute;
          right: 0;
          background-image: url('..//../assets/tj_xz.png');
          background-repeat: no-repeat;
          width: rem(40);
          height: rem(40);
          display: inline-block;
          background-size: cover;
          margin: rem(30) rem(50);
        }
      }
    }
  }
</style>