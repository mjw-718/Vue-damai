<template>
    <div class="listitems">
       <router-link tag="div" :to="{path:'/details', query: { id: item.id,page: item.page,category:listid}}"  class="project-item skin" v-for="item of listitems" :key="item.id">
            <div class="project-item-pic">
                <img :src="'http://image.juooo.com'+item.pic"> 
            </div>
            <div class="project-item-info">
                <div class="project-item-info-title">
                    <span >{{item.schedular_name}}</span>
                </div>
                <div class="project-item-info-time">
                    {{item.v_name}}
                </div>
                <div class="project-item-info-price">
                    <span class="project-item_info_price_str">{{item.min_price}}-{{item.max_price}}</span>
                    <span class="project-item-info-price-unit">元</span> 
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: ["listid","listitems"],
        data () {
            return {
            }
        },
        async mounted () {
            // console.log(this.listitems)
        },
        methods: {
           
        }

    }
</script>
<style lang="stylus" scoped>
    @import '~styles/ellipsis.styl';
    @import '~styles/border.styl';
    .listitems
        width 100%
        padding-bottom 0.12rem
        .skin
            width 100%
            padding-left 0.15rem
            padding-top 0.15rem
            display flex
            height max-content;
            justify-content space-between
            border 0 0 1px 0,#ccc
            .project-item-pic
                width 0.66rem
                height 0.89rem
                img 
                    width 100%
                    height 100%
            .project-item-info
                width 2.825rem
                padding-bottom 0.1rem
                .project-item-info-title
                    span 
                        font-size 0.15rem
                        color #212121
                        ellipsis(null,2)
                .project-item-info-time
                    width 2.37rem
                    height 0.22rem
                    padding-top 0.06rem
                    color #aaa
                    font-size 0.12rem
                    ellipsis()
                .project-item-info-price
                    width 2.49rem
                    height 0.26trm
                    margin-top 0.1rem
                    font-size 0.14rem
                    color #ff1268
                    margin-bottom 0.1rem
                    .project-item-info-price-unit
                        margin-left 0.02rem
                        font-size 0.08rem
                        color #000
                .project-item-info-head
                    width 2.75rem
                    padding 0.07rem 0.07rem 0 0
                    ellipsis(null,2)
                    font-size 0.11rem
                    border 1px 0 0 0,#ccc
                    color #999


</style>
