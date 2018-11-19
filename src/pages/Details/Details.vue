<template>
    <div class="detailsWrap">
        <div class="mainWrap">
            <div class="detailsMain">
                <div class="detTop">
                    <div class="detTopBackImg" :style= pic></div>
                    <div class="detTopbox">
                        <img :src= imgpic alt="图片加载失败了噢" class="detTopPoster">
                        <div class="detTopWords">
                            <div class="detTopTop">
                                <p class="detTopWordsDetail">{{listone.schedular_name}}</p>
                                <p class="detTopWordsCity">{{listone.c_name}}</p>
                            </div>
                            <p class="detTopWordsPrice">{{listone.min_price}}-{{listone.max_price}}
                                <span class="detTopWordsSmall">元</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="detDesc">
                    <div class="detDescTitle">
                        {{listone.show_time}}
                    </div>
                    <svg t="1542248677481" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5062" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M356.28301783 231.94345637c-8.60283496 8.15536792-8.60283496 21.38854485-1e-8 29.54456391l264.07733751 250.51393378-264.07733751 250.50481527c-8.60283496 8.16057831-8.60283495 21.38919599 0 29.54977493 8.59827571 8.15992717 22.54401335 8.15992717 31.14228906 0l275.06992161-260.97112016c0 0 11.67257762-10.81542049 11.67257762-19.08346941 0-7.6199702-11.67257761-19.08802865-11.67257762-19.08802865L387.42595802 231.94345637C378.82703117 223.78287807 364.88129353 223.78287806 356.28301783 231.94345637z" p-id="5063"></path></svg>
                </div>
                <div class="detailsCity">
                    <div class="detailsCityTitle">
                        {{listone.v_name}}
                    </div>
                    <svg t="1542249302520" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5963" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M685.424818 155.291832l-39.476083-9.712199-125.352963 509.493923c-82.655512-65.398476-205.016327-34.17331-243.86103 45.712111-12.666484 25.993001-6.018064 57.95597 0.202615 75.089186 33.17354 91.364871 153.168472 84.049255 233.44275 13.19144 33.023114-29.148877 43.258223-60.231803 62.442144-138.205689L650.673339 334.437955c47.178509 10.099009 113.477494 86.86437 118.413923 142.888338 3.103688 35.539424-7.522324 79.317487-31.753191 105.942891-6.149047 6.729262-24.789593 29.28293-15.446807 27.576055 17.396205-3.178389 25.749454-9.743922 43.581588-26.340925 16.188704-15.068184 31.66928-39.888476 38.125319-56.249095C872.507704 353.224834 667.787112 296.462039 685.424818 155.291832" p-id="5964"></path><path d="M512 981.675032c-63.398936 0-124.909871-12.420891-182.823885-36.915771-55.929824-23.655769-106.157785-57.519018-149.287071-100.648304-43.129286-43.128263-76.992535-93.356224-100.649328-149.287071-24.495904-57.914014-36.915771-119.423927-36.915771-182.823885 0-63.398936 12.419867-124.909871 36.915771-182.822862 23.656793-55.930847 57.520041-106.157785 100.649328-149.287071 43.129286-43.129286 93.356224-76.992535 149.287071-100.649328 57.914014-24.495904 119.42495-36.915771 182.823885-36.915771s124.908848 12.419867 182.822862 36.915771c55.930847 23.656793 106.157785 57.520041 149.287071 100.649328 43.129286 43.128263 76.992535 93.356224 100.648304 149.287071 24.495904 57.912991 36.915771 119.423927 36.915771 182.822862 0 63.399959-12.420891 124.909871-36.915771 182.823885-23.655769 55.929824-57.519018 106.157785-100.648304 149.287071-43.128263 43.129286-93.355201 76.992535-149.287071 100.648304C636.908848 969.254142 575.398936 981.675032 512 981.675032zM512 73.024154c-59.267848 0-116.755144 11.604292-170.864506 34.490535-52.271504 22.10853-99.217722 53.762461-139.538033 94.081749s-71.973218 87.267553-94.082772 139.538033c-22.886243 54.108339-34.490535 111.595634-34.490535 170.864506s11.604292 116.755144 34.490535 170.864506c22.10853 52.271504 53.763484 99.218746 94.082772 139.538033s87.266529 71.973218 139.538033 94.081749c54.109362 22.886243 111.596657 34.490535 170.864506 34.490535 59.267848 0 116.755144-11.604292 170.864506-34.490535 52.271504-22.10853 99.218746-53.762461 139.538033-94.081749s71.973218-87.266529 94.081749-139.538033c22.886243-54.109362 34.490535-111.596657 34.490535-170.864506s-11.604292-116.755144-34.490535-170.864506c-22.10853-52.271504-53.762461-99.218746-94.081749-139.538033s-87.266529-71.973218-139.538033-94.081749C628.755144 84.628446 571.267848 73.024154 512 73.024154z" p-id="5965"></path></svg>
                </div>
                <div class="detCards">
                    <h1 class="detHd">介绍</h1>
                    <div class="detBd"><span>两大会场，七个舞台</span></div>
                    <div class="detFt">
                        <span>更多图文详情</span>
                        <svg t="1542248677481" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5062" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M356.28301783 231.94345637c-8.60283496 8.15536792-8.60283496 21.38854485-1e-8 29.54456391l264.07733751 250.51393378-264.07733751 250.50481527c-8.60283496 8.16057831-8.60283495 21.38919599 0 29.54977493 8.59827571 8.15992717 22.54401335 8.15992717 31.14228906 0l275.06992161-260.97112016c0 0 11.67257762-10.81542049 11.67257762-19.08346941 0-7.6199702-11.67257761-19.08802865-11.67257762-19.08802865L387.42595802 231.94345637C378.82703117 223.78287807 364.88129353 223.78287806 356.28301783 231.94345637z" p-id="5063"></path></svg>
                    </div>
                </div>
                <div class="detCards">
                    <h1 class="detHd">购票须知</h1>
                    <div class="detBd">
                        <ul class="project-notice__bd">
                            <li class="project-notice__item">
                                <span class="detBdTitle">演出时长</span>
                                <span class="detBdCont">最低演出时长 120分钟以上</span>
                            </li>
                            <li class="project-notice__item">
                                <span class="detBdTitle">入场时间</span>
                                <span class="detBdCont"> 演出前约90分钟</span>
                            </li>
                            <li class="project-notice__item">
                                <span class="detBdTitle">限购说明</span>
                                <span class="detBdCont">选座购买每单限6张，立即购买每单限20张。</span>
                            </li>
                            <li class="project-notice__item">
                                <span class="detBdTitle">儿童说明</span>
                                <span class="detBdCont">1.2米以下儿童谢绝入场（儿童项目除外），1.2米以上儿童需持票入场。</span>
                            </li>
                        </ul>
                    </div>
                    <div class="detFt">
                        <span>更多购票详情</span>
                        <svg t="1542248677481" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5062" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M356.28301783 231.94345637c-8.60283496 8.15536792-8.60283496 21.38854485-1e-8 29.54456391l264.07733751 250.51393378-264.07733751 250.50481527c-8.60283496 8.16057831-8.60283495 21.38919599 0 29.54977493 8.59827571 8.15992717 22.54401335 8.15992717 31.14228906 0l275.06992161-260.97112016c0 0 11.67257762-10.81542049 11.67257762-19.08346941 0-7.6199702-11.67257761-19.08802865-11.67257762-19.08802865L387.42595802 231.94345637C378.82703117 223.78287807 364.88129353 223.78287806 356.28301783 231.94345637z" p-id="5063"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        
        <DetailsNav class="detailsNav" v-bind:listone="listone"></DetailsNav>
    </div>
</template>
<script>
import DetailsNav from "pages/Details/DetailsNav";
import { scroll } from "utils/scroll";
import http from "utils/http.js";
import _ from 'lodash'
import { mapState,mapActions } from "vuex";
export default {
  components: {
    DetailsNav
  },
  data() {
    return {
        id: "",
        page:"",
        category:"",
        listone:{},
        pic:"",
        imgpic:""
    };
  },
  computed: {
    ...mapState("product", ["data"])
  },
  
  async mounted() {
    this.id = this.$route.query.id;
    this.page = this.$route.query.page
    this.category = this.$route.query.category
    // console.log(this.$route.query.page)
    const params = "category=" + this.category + "&page="+this.page;
    // console.log(this.$route.query)
    let result = await http({
      method: "post",
      url: "/Show/getShowList",
      params
    });
    
    const list = result.data.data.list
    // console.log(list)
    // console.log(this.id)
    this.listone = _.find(list, ['id', this.id]);
    // console.log(this.listone)
    this.pic = "background-image: url(http://image.juooo.com"+ this.listone.pic +"); "
    this.imgpic = "http://image.juooo.com"+ this.listone.pic
    
    scroll({
      el: ".mainWrap"
    });
    
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/mborder.styl';
@import '~styles/ellipsis.styl';

.detailsWrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .mainWrap {
        height: 6.19rem;
        flex: 1;

        .detailsMain {
            width: 100%;

            .detTop {
                position: relative;
                width: 100%;
                height: 1.9rem;
                mborder: 0 0 1px 0, #ccc;
                background: #fff;

                .detTopBackImg {
                    z-index: -1;
                    width: 100%;
                    height: 1.42rem;
                   
                    background-color: rgb(231, 231, 231);
                    background-repeat: no-repeat;
                    background-size: 200% auto;
                    background-position: 0 50%;
                    -webkit-transform: scale(1.1) !important;
                    transform: scale(1.1) !important;
                }

                .detTopbox {
                    position: absolute;
                    z-index: 999;
                    width: 100%;
                    padding: 0.3rem 0.085rem 0 0.12rem;
                    margin-top: -1.42rem;
                    height: 1.77rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    img {
                        width: 1.05rem;
                        height: 1.47rem;
                    }

                    .detTopWords {
                        width: 2.3rem;
                        height: 1.47rem;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;

                        .detTopTop {
                            .detTopWordsDetail {
                                width: 100%;
                                height: 0.19rem;
                                line-height: 0.19rem;
                                margin-bottom: 0.09rem;
                                font-size: 0.15rem;
                                color: #fff;
                                // font-family: sans-serif;
                                ellipsis();
                            }

                            .detTopWordsCity {
                                width: 100%;
                                height: 0.2rem;
                                line-height: 0.2rem;
                                font-size: 0.15rem;
                                color: #fff;
                                // font-family: sans-serif;
                            }
                        }

                        .detTopWordsPrice {
                            height: 0.26rem;
                            font-weight: 700;
                            color: #ff1268;
                            font-size: 0.2rem;

                            .detTopWordsSmall {
                                font-size: 0.1rem;
                                color: #999;
                            }
                        }
                    }
                }
            }

            .detDesc {
                width: 100%;
                height: 0.43rem;
                mborder: 0 0 1px 0, #ccc;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.12rem;
                color: #666;
                background: #fff;
                font-size: 0.13rem;

                svg {
                    fill: #666;
                }
            }

            .detailsCity {
                width: 100%;
                height: 0.505rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.12rem;
                color: #666;
                background: #fff;
                font-size: 0.13rem;
                margin-bottom: 0.1rem;

                svg {
                    fill: #666;
                }
            }

            .detCards {
                width: 100%;
                background: #fff;   
                margin-bottom: 0.1rem;
                mborder: 1px 0 1px 0, #ccc;
                // font-family: sans-serif;
                font-size: 0.13rem;
                color: #000;

                .detHd {
                    width: 100%;
                    height: 0.5rem;
                    padding: 0 0.125rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    font-weight: 700;
                }

                .detBd {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    mborder: 0 0 1px 0, #ccc;
                    padding: 0 0.125rem;
                    color: #666;

                    span {
                        height: 0.325rem;
                    }

                    ul {
                        height: max-content;

                        li {
                            width: 100%;
                            // height 0.265rem
                            height: max-content;
                            margin-bottom: 0.09rem;
                            display: flex;
                            justify-content: flex-start;

                            .detBdTitle {
                                margin-right: 0.16rem;
                                width: 0.53rem !important;
                            }

                            .detBdCont {
                                max-width: 2.81rem;
                            }
                        }
                    }
                }

                .detFt {
                    width: 100%;
                    height: 0.455rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #ff1268;
                    font-size: 0.12rem;
                }
            }
        }
    }

    .detailsNav {
        height: 0.48rem;
        width: 100%;
        z-index: 9999;
        background: #fff;
    }
}
</style>


