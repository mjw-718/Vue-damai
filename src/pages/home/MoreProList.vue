<template>
    <div class="moreList">
        
        <div class="project-item skin project_newhome" v-for="item of message" :key="item.id" >
             <div class="project-item-pic">
                <img class="project-item-pic-poster" :src="item.verticalPic" > 
            </div>
            <div class="project-item-info">
                <div class="project-item-info-title">
                    <span >{{item.name}}</span>
                </div>
                <div class="project-item-info-time project-item_limit_lines_1">
                    {{item.logicAddress}} / {{item.showTime}} / {{item.venueName}}
                </div>               
                <div class="project-item-info-promotion">
                    <span v-if="item.isSelectSeat" class="tag skin project-item_info_tag project-item-info-xuanzuo tag-small project_newhome_tag">
                        可选座
                    </span>
                    <span v-if="item.promotionTags" class="tag skin project-item_info_tag tag-small project_newhome_tag">
                        套票
                    </span>
                </div>
                <div class="project-item-info-price">
                    <span  class="project-item_info_price_str">￥{{item.priceStr}}</span> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        message: Array  //定义传值的类型<br>    
    },
    data(){
        return{
            projectInfo:[],
        }
    },
    // mounted() {
     
    //  console.log(63)
    // console.log(this.message,2)
    // },
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl';
@import '~styles/ellipsis.styl';
.moreList
    width 100%
    padding-top 0.08rem
    .project-item
        width 100%
        height 1.2rem
        padding-left .18rem
        margin-bottom 0.45rem
        display flex
        justify-content space-between
        .project-item-pic
            width 0.91rem
            height 1.2rem
            .project-item-pic-poster
                width 0.9rem
                height 1.2rem
                border 1px solid #ccc
        .project-item-info
            width 2.54rem
            height 1.2rem
            flex-direction column
            justify-content space-around
            align-items center  
            .project-item-info-title
                font-weight 700
                font-size 0.16rem
                color #111
                width 2.37rem
                ellipsis(null,2)
            .project-item-info-time
                width 2.37rem
                height 0.22rem
                padding-top 0.06rem
                color #aaa
                font-size 0.12rem
                ellipsis()
            .project-item-info-promotion
                width 100%
                height 0.265rem
                display flex
                justify-content flex-start
                align-items flex-end
                span 
                    padding 0.01rem 0.03rem 0.015rem 0.03rem
                    background #fbe8ef
                    color #ff1268
                    font-size 0.11rem
                    border-radius 0.04rem
                    margin-right 0.03rem
                .project-item-info-xuanzuo
                    color #111 
                    background #eee
            .project-item-info-price
                width 2.49rem
                height 0.16trm
                margin-top 0.1rem
                font-size 0.14rem
                color #ff1268
                


</style>

