import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    playing: {
      id: null,                               //  音乐ID   
      isPlay: false,                          //  播放状态
      url: '',                                //  歌曲URL
      title:'',                               //  歌名
      time:'',                                //  定时关闭毫秒数
      isCloseTime: false,                     //  未开启定时
    }
  },
  getters: {
    id: state => state.playing.id,
    isPlay: state => state.playing.isPlay,
    url: state => state.playing.url,
    title: state => state.playing.title,
    time: state => state.playing.time,
    isCloseTime: state => state.playing.isCloseTime,
  },
  mutations: {
    setId: (state,id) => {state.playing.id = id},
    setUrl: (state,url) => {state.playing.url = url},
    setTitle: (state,title) => {state.playing.title = title},
    setIsPlay: (state,isPlay) => {state.playing.isPlay = isPlay},
    setTime: (state,time) => {state.playing.time = time},
    setIsCloseTime: (state,isCloseTime) => {state.playing.isCloseTime = isCloseTime},
  }
})