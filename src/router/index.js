import Vue from 'vue';
import VueRouter from 'vue-router';
var routes = null, router = null;

Vue.use(VueRouter);
// 引入路由
import babyMusic from '@/pages/babyMusic/index'; // 胎教音乐歌单
import musicList from '@/pages/babyMusic/musicList'; // 胎教音乐歌曲列表

// 定义路由
routes = [
    {
        name: 'babyMusic',
        path: '/',
        component: babyMusic,
        meta: {
            title: '胎教音乐歌单',
            show: true
        }
    },
    {
        name: 'musicList',
        path: '/musiclist',
        component: musicList,
        meta: {
            title: '胎教歌曲列表',
            show: true
        }
    }
];
// 实例路由
router = new VueRouter({
    mode: 'hash',
    routes: routes
});

export default router;
