<template>
<div class="cartWrap">
    <router-link to="/list/0" tag="div" class="cartTop">
        <div class="svg" >
            <svg t="1542268876679" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5303" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M383.88508444 512.27989333l332.40746667-332.41315555c13.96963556-13.96053333 13.96963556-36.62051556 0-50.58218667-13.96053333-13.96963556-36.62051556-13.96963556-50.58218667 0l-357.70254222 357.70481778c-13.97304889 13.96053333-13.97304889 36.62051556 0 50.58218667l357.70368 357.70368c6.98254221 6.98595556 16.13710222 10.48007111 25.29052445 10.48007111s18.30912-3.49411556 25.29052444-10.48007111c13.97304889-13.96053333 13.97304889-36.62051556 0-50.58218667l-332.40974222-332.41429333z" p-id="5304"></path></svg>
        </div>
        <span>订单</span>
    </router-link>
    <div class="listTitle">
        <div class="tOne">票名</div>
        <div class="tTwo">数量</div>
        <div class="tThree">操作</div>
    </div>
    <div class="listscroll">
        <div class="scrollWrap">
            <div class="listitems" v-for="item of cartinfo" :key="item.id" >
                <div class="project-item skin">
                    <div class="picAndInfo">
                        <div class="project-item-pic">
                        <img :src= item.pic> 
                    </div>
                    <div class="project-item-info">
                        <div class="project-item-info-title">
                            <span >{{item.schedularName}}</span>
                        </div>
                        <div class="project-item-info-vName">
                            {{item.vName}}
                        </div>
                        <div class="project-item-info-price">
                            <span class="project-item_info_price_str">{{item.price}}</span>
                            <span class="project-item-info-price-unit">元</span> 
                        </div>
                    </div>
                    </div>
                    <div class="listnum">
                        <span>{{item.quentitiy}}</span>
                    </div>    
                    <div class="cartdel"  @click="delinfo(item)">
                        <span>删除</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="totalwrap">
        <div class="TitAndPri">
            <div class="totalTit">总计</div>
            <div class="totalPri">
                <span>{{carttotal}}</span>元
            </div>
        </div>
        <div class="totalsum">去结算</div>
    </div>
    <!-- <div class="listscroll">
        <div class="swrap">
            <div class="listitems">
                <div class="project-item skin">
                    <div class="picAndInfo">
                        <div class="project-item-pic">
                            <img src="../../../public/9.png"> 
                        </div>
                        <div class="project-item-info">
                            <div class="project-item-info-title">
                                <span >王梦洋演唱会</span>
                            </div>
                            <div class="project-item-info-time">
                                王梦洋演唱会
                            </div>
                            <div class="project-item-info-price">
                                <span class="project-item_info_price_str">100-1000</span>
                                <span class="project-item-info-price-unit">元</span> 
                            </div>
                        </div>
                    </div>
                    <div class="listnum">
                        <span>5</span>
                    </div>    
                    <div class="cartdel">
                        <span>删除</span>
                    </div>
                </div>
            </div>
    
            <div class="listitems">
                <div class="project-item skin">
                    <div class="picAndInfo">
                        <div class="project-item-pic">
                            <img src="../../../public/9.png"> 
                        </div>
                        <div class="project-item-info">
                            <div class="project-item-info-title">
                                <span >王梦洋演唱会</span>
                            </div>
                            <div class="project-item-info-time">
                                王梦洋演唱会
                            </div>
                            <div class="project-item-info-price">
                                <span class="project-item_info_price_str">100-1000</span>
                                <span class="project-item-info-price-unit">元</span> 
                            </div>
                        </div>
                    </div>
                    <div class="listnum">
                        <span>5</span>
                    </div>    
                    <div class="cartdel">
                        <span>删除</span>
                    </div>
                </div>
            </div>
    
         
           
            <div class="listitems">
                <div class="project-item skin">
                    <div class="picAndInfo">
                        <div class="project-item-pic">
                            <img src="../../../public/9.png"> 
                        </div>
                        <div class="project-item-info">
                            <div class="project-item-info-title">
                                <span >王梦洋演唱会</span>
                            </div>
                            <div class="project-item-info-time">
                                王梦洋演唱会
                            </div>
                            <div class="project-item-info-price">
                                <span class="project-item_info_price_str">100-1000</span>
                                <span class="project-item-info-price-unit">元</span> 
                            </div>
                        </div>
                        </div>
                        <div class="listnum">
                            <span>5</span>
                        </div>    
                        <div class="cartdel">
                            <span>删除</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> -->

</div>
</template>
<script>
import { mapState,mapActions,mapGetters } from "vuex";
import {scroll} from "utils/scroll"
export default {
  data() {
    return {};
  },
  computed: {
     ...mapGetters('cart',["cartinfo","carttotal"])
  },
  methods: {
    delinfo(item){
      this.$store.dispatch("cart/delinfo",item)
    }
  },
  mounted() {
    // console.log (this.$store.state.cart.items)
    //   scroll({
    //       el:".listacroll"
    //   })
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl';
@import '~styles/ellipsis.styl';
 .totalwrap{
    margin-top 0.05rem
    background #ffffff
    width 100%
    height 0.4rem
    display flex
    justify-content space-between
    align-items center
    padding 0 0.2rem 0
    .TitAndPri{
        display flex
        justify-content center
        align-items center
        .totalTit{
            margin-right 0.05rem
        }
        .totalPri{
            span{
                margin-right 0.05rem
                color #ff1268;
                font-size 0.16rem
            }
            
        }
    }
    .totalsum{
        padding  0 0.15rem
        border-radius 15px
        background #ddd
    }
}
.listscroll
    // flex 1
    // height 6.06rem
.cartWrap
    height: 100%;
    display: flex;
    flex-direction: column;
    .cartTop
        z-index 9999
        width 100%
        height 0.44rem
        // padding 0.08rem
        display flex
        background #fff
        .svg
            height 100%
            flex 25
            display flex
            justify-content center
            align-items center
        span
            height 100%
            flex 290
            margin-left -0.25rem
            display flex
            justify-content center
            align-items center
    .listTitle
        // margin-bottom 0.05rem
        padding 0.02rem 0 0.03rem 0
        z-index 9999
        display flex
        background #ffffff
        border 1px 0 1px 0,#ccc
        padding-left 0.15rem
        .tOne
            flex 250
            // display flex
            // justify-content center
        .tTwo
            flex 40
        .tThree
            flex 60
    .listitems
        background #fff
        border 0 0 1px 0,#ccc
        width 100%
        padding-bottom 0.12rem
        .skin
            width 100%
            padding-left 0.15rem
            padding-top 0.15rem
            display flex
            height max-content;
            .picAndInfo
                flex 250
                display flex
                .project-item-pic
                    flex 25 
                    width 0.50rem
                    height 0.89rem
                    img 
                        width 100%
                        height 100%
                .project-item-info
                    flex 75
                    margin-left 0.1rem
                    padding-bottom 0.1rem
                    .project-item-info-title
                        span 
                            width 1.55rem
                            font-size 0.13rem
                            color #212121
                            ellipsis(null,2)
                    .project-item-info-vName
                        width 1.37rem
                        height 0.22rem
                        padding-top 0.06rem
                        color #aaa
                        font-size 0.13rem
                        ellipsis()
                    .project-item-info-price
                        width 1.37rem
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
                        // width 2.75rem
                        padding 0.07rem 0.07rem 0 0
                        ellipsis(null,2)
                        font-size 0.11rem
                        border 1px 0 0 0,#ccc
                        color #999
            .listnum
                flex 40
                display flex
                align-items center
                margin-top -0.2rem
                // justify-content center
            .cartdel
                flex 60
                display flex
                // justify-content center
                align-items center
                margin-top -0.2rem
                // padding-right 0.05rem
                span 
                    background #ddd
                    padding 0 0.05rem
                    border-radius 5px
        
</style>

