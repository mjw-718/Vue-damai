<template>
    <div class="list-container">
        <div class="listhead">
            <div class="category-wrapper skin manyitemwrapper">
                <ul class="manyitem">
                    <router-link to="/list/0" tag="li" exact-active-class="router-active">
                        <span>全部
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/35" tag="li" exact-active-class="router-active">
                        <span>演唱会
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/36" tag="li" exact-active-class="router-active">
                        <span>音乐会
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/37" tag="li" exact-active-class="router-active">
                        <span>话剧歌剧
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/38" tag="li" exact-active-class="router-active">
                        <span>儿童亲子
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/79" tag="li" exact-active-class="router-active">
                        <span>音乐剧
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/86" tag="li" exact-active-class="router-active">
                        <span>舞蹈芭蕾
                            <div></div>
                        </span>
                    </router-link>
                    <router-link to="/list/91" tag="li" exact-active-class="router-active">
                        <span>曲苑杂坛
                            <div></div>
                        </span>
                    </router-link>
                    
                    <router-link to="/list/99" tag="li" exact-active-class="router-active">
                        <span>展览休闲
                            <div></div>
                        </span>
                    </router-link>
                </ul>
            </div>
            <div class="category-wrapper skin">
                <ul class="manyclassify">
                    <li @click="sortNull"><span>全部
                        <svg t="1541984949946" viewBox="0 0 1462 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2047"  width="10" height="10"><path d="M659.017143 935.936c20.48 23.186286 48.274286 44.690286 74.605714 38.034286 26.331429 5.046857 51.2-18.139429 71.68-38.034286l633.417143-719.725714c32.182857-36.425143 32.182857-95.963429 0-132.388572a76.361143 76.361143 0 0 0-117.028571 0l-589.531429 685.056-590.994286-685.056a76.361143 76.361143 0 0 0-117.028571 0c-32.182857 36.425143-32.182857 95.963429 0 132.388572l634.88 719.725714z" p-id="2048"></path></svg></span></li>
                    <li @click="sortTime"><span>按时间
                        <svg t="1541984949946" viewBox="0 0 1462 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2047"  width="10" height="10"><path d="M659.017143 935.936c20.48 23.186286 48.274286 44.690286 74.605714 38.034286 26.331429 5.046857 51.2-18.139429 71.68-38.034286l633.417143-719.725714c32.182857-36.425143 32.182857-95.963429 0-132.388572a76.361143 76.361143 0 0 0-117.028571 0l-589.531429 685.056-590.994286-685.056a76.361143 76.361143 0 0 0-117.028571 0c-32.182857 36.425143-32.182857 95.963429 0 132.388572l634.88 719.725714z" p-id="2048"></path></svg></span></li>
                    <li @click="sortPrice"><span>按价格
                        <svg t="1541984949946" viewBox="0 0 1462 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2047"  width="10" height="10"><path d="M659.017143 935.936c20.48 23.186286 48.274286 44.690286 74.605714 38.034286 26.331429 5.046857 51.2-18.139429 71.68-38.034286l633.417143-719.725714c32.182857-36.425143 32.182857-95.963429 0-132.388572a76.361143 76.361143 0 0 0-117.028571 0l-589.531429 685.056-590.994286-685.056a76.361143 76.361143 0 0 0-117.028571 0c-32.182857 36.425143-32.182857 95.963429 0 132.388572l634.88 719.725714z" p-id="2048"></path></svg></span></li>
                </ul>
            </div>
        </div>
            <div class="listscroll">
                <listitems :listid="listid" :listitems="listitems"></listitems>
            </div>        
    </div>
</template>
<script>
import { scroll } from "utils/scroll";
import listitems from "pages/List/ListItems";
import http from "utils/http.js";
import axios from "axios";
import BScroll from "better-scroll";
import { Toast, Indicator } from "mint-ui";
import _ from "lodash";
export default {
  data() {
    return {
      listid: 0,
      listitems: [],
      inititems: [],
      page: 1,
      transitionName:""
    };
  },
  methods: {
    sortTime: function() {
      let sortitems = _.sortBy(this.listitems, ["min_show_time"]);
      // console.log(this.listitems)
      this.listitems = sortitems;
      this.bscroll.scrollTo(0, 0);
    },
    sortNull: function() {
      this.listitems = this.inititems;
      this.bscroll.scrollTo(0, 0);
    },
    sortPrice: function() {
      let sortitems = _.sortBy(this.listitems, ["min_price"]);
      this.listitems = sortitems;
      this.bscroll.scrollTo(0, 0);
    }
  },
  components: {
    listitems
  },
  beforeCreate() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
  },
  async mounted() {
    this.listid = this.$route.params.listid;
    scroll({
      el: ".manyitemwrapper",
      horizontal: "true"
    });
    const params = "category=" + this.listid + "&page=1";
    let result = await http({
      method: "post",
      url: "/Show/getShowList",
      params
    });
    let totalitems = result.data.data.list.slice(0, 10);
    this.listitems = totalitems;
    this.listitems.page = this.page
    this.inititems = totalitems;
    // var pagenum = this.page
    this.listitems.forEach(a => a.page = this.page)
    // console.log(this.listitems)
    Indicator.close();
    this.$nextTick(() => {
      this.bscroll = new BScroll(".listscroll", {
        probeType: 1,
        click: true,
        pullUpLoad: {
          threshold: 50
        }
      });

      this.bscroll.on("pullingUp", async () => {
        this.page++;
        let pardata = "category=" + this.listid + "&page=" + this.page;
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
        let result = await http({
          method: "post",
          url: "/Show/getShowList",
          params: pardata
        });
        Indicator.close();
        let data = [];
        if (result.data.data === "") {
          Toast({
            message: "到底了",
            position: "bottom",
            duration: 3000
          });
        } else if (result.data.data.list.length < 10) {
          data = result.data.data.list;
        } else {
          data = result.data.data.list.slice(0, 10);
        }

        data.forEach(a => a.page = this.page)
        this.listitems.push(...data);
        // console.log(this.page)
        
        // console.log(this.listitems)
        this.$nextTick(() => {
          this.bscroll.refresh();
        });

        this.bscroll.finishPullUp();
      });
    });
  },
  watch: {
    async $route(to, from) {
      // 对路由变化作出响应...
    //   console.log(from.params.listid,to.params.listid)
    //   if(from.params.listid<to.params.listid){
    //      this.transitionName = 'slide-left'
    //   }else{
    //       this.transitionName = 'slide-right'
    //   }  
    //   console.log( this.transitionName)
      this.listid = this.$route.params.listid;
      const params = "category=" + this.listid + "&page=1";
    //   Indicator.open({
    //     text: "加载中...",
    //     spinnerType: "fading-circle"
    //   });
      let result = await http({
        method: "post",
        url: "/Show/getShowList",
        params
      });
    //   Indicator.close();
      this.listitems = result.data.data.list.slice(0, 10);
      //   console.log(this.listitems);
      //   this.$nextTick(() => {
      //     // scroll({
      //     //   el: ".listscroll",
      //     //   method: "post",
      //     //   url: "/Show/getShowList",
      //     //   category: this.listid,
      //     //   vm: this,
      //     //   maindata: this.listitems
      //     // });
      //   });
      //   console.log(this.bscroll);
      this.page = 1;
      this.bscroll.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl';

.list-container {
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;

    .listscroll {
        flex: 1;
        height: 5.77rem;
    }

    .listhead {
        z-index: 9999;
        background: #fff;
    }

    .skin {
        height: 0.45rem;
        width: 100%;
        color: #666;
        border: 0 0 1px 0, #ccc;

        .manyitem {
            height: 100%;
            display: flex;
            justify-content: space-around;
            width: max-content;

            li {
                padding: 0 0.15rem;
                font-size: 0.12rem;

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    position: relative;
                }
            }

            .router-active {
                span {
                    div {
                        position: absolute;
                        width: 100%;
                        border-bottom: 0.02rem solid red;
                        bottom: -0.01rem;
                    }
                }
            }
        }

        .manyclassify {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;

            li {
                height: 100%;
                font-size: 0.12rem;

                span {
                    height: 100%;
                    display: flex;
                    align-items: center;

                    svg {
                        margin-top: 0.02rem;
                        margin-left: 0.02rem;
                    }
                }
            }
        }
    }
}
</style>

