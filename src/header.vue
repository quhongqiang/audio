<template>
    <div class="header" v-show="header.show">
        <div @click="fLeftClick" class="left">
            <i class="icon_arrow"></i>
        </div>
        <h2 class="title">{{header.title}}</h2>
        <div @click="fRightClick" class="right">
            <span class="icon_right"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "cheader",
    data() {
        return {
            header: {}
        };
    },
    watch: {
        $route: {
            handler: function() {
                const meta = this.$route.meta;
                this.header = meta || {};
            },
            immediate: true
        }
    },
    computed: {},
    methods: {
        fLeftClick() {
            if(this.header.link){
                this.$router.push({path:this.header.link})
            }else{
                this.$router.go(-1);
            }
        },
        fRightClick() {}
    }
};
</script>

<style lang="scss">
.header {
    height: 88px;
    line-height: 88px;
    .left {
        position: absolute;
        padding:32px 25px 30px 25px;

        .icon_arrow {
            &:after {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                border-right: 3px solid #404040;
                border-top: 3px solid #404040;
                -webkit-transform: rotate(222deg);
                transform: rotate(222deg);
            }
        }
    }
    .title {
        font-size: 30px;
        text-align: center;
    }
}
</style>