<template>
    <div class="artPro" id="artPro">
        <ul>
            <li v-for="item in artistProjectList" :key="item.artistId">
                <img :src="item.artPic" alt="">
                <div class ="artist-info">
                    <div>
                        <span class="artist-name">{{item.artistName}}</span>
                        <span  class="artist-fans">{{item.artFans>10000?((item.artFans/10000).toFixed(1)+"w"):item.artFans}}粉丝</span>
                    </div>
                    <div class="artist-city">{{(item.citySet).join("/")}}</div>
                    <div ata-spm="dfollow" class="artist-follow">+关注</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Http from "utils/http"
import {scroll} from 'utils/scroll'
export default {
    data(){
        return{
            artistProjectList:[]
        }
       
    },
    async beforeCreate() {
        let result = await Http({
        method: "get",
        url:"/h5/artistproject"
        })
        this.artistProjectList=result.data.data.artistProjectList
        
        this.$nextTick(() => {
            scroll({
                el: "#artPro",
                horizontal: true
            })
        })
      
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl';
.artPro 
    width: 100%;
    height: 1.04rem;
    padding-left: 0.18rem;

    ul 
        height: 100%;
        float left
        display: flex;
        li 
            display: flex;
            width: 2.26rem;
            height: 100%;
            margin-right: 0.1rem;
            background: #f5f5f5;

            img 
                width: 0.8rem;
                height: 0.8rem;
                margin: 0.12rem 0.09rem 0.12rem 0.12rem;
                border-radius: 50%;
            

            .artist-info 
                width: 1.25rem;
                height: 0.9rem;
                
                div
                    width 100%
                    height 0.33rem
                    padding-top 0.12rem
                    .artist-name
                        width 0.48rem
                        height 0.21rem
                        
                        font-size .16rem
                        color #111
                    .artist-fans
                        font-size 0.1rem
                        color  #111
                        margin-left .12rem
                .artist-city
                        margin-top .06rem;
                        font-size: .12rem;
                        height 0.15rem
                        color: #aaa;
                        padding 0
                        ellipsis()
                .artist-follow
                        width 0.48rem
                        margin-top 0.14rem
                        padding  0
                        text-align center
                        padding-top 0.02rem
                        height auto 
                        border-radius 0.2rem
                        background: #ff66bc 
 
</style>

