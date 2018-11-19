<template>
    <section class="city-list-container" id="city-list-scroll">
        <div class="city-list-wrap">
            <section class="history-city-list">
                <div ref="visited" class="city-title">
                最近访问城市
                </div>
                <div class="city-list city-list-inline clearfix">
                    <div class="city-item" @click="pickIt()">
                        {{visitedcity}}
                    </div>
                </div>
            </section>
            <section>
                <div ref="hot" class="city-title">
                热门城市
                </div>
                <div class="city-list city-list-inline clearfix">
                    <div class="city-item" v-for="item of hotCities" :key="item.id" @click="pickIt(item.name)">
                        {{item.name}}
                    </div>
                </div>
            </section>
            <section>
                <div v-for="(value,key) of allcities" :key="key">
                    <div :ref="key" class="city-title city-title-letter">
                        {{key}}
                    </div>
                    <div class="city-list city-list-block clearfix">
                        <div v-for="item of value" :key="item.id"  class="city-item" @click="pickIt(item.name)" >
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
       <section class="nav">
            <div class="nav-item" @click="gotoVisited">
                最近
            </div>
            <div class="nav-item" v-on:click="gotoHot">
                热门
            </div>
            <div class="nav-letter nav-item"
                v-for="(value,key) of allcities"
                :key="key" 
                @click="gotoLetter(key)"
                @touchstart = "handleTouchStart($event)"
                @touchmove = "handleTouchMove($event)"
                @touchend = "handleTouchEnd($event)"
            >
                {{key}}
            </div>
        </section>
        
    </section>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      hotCities: [],
      allcities: []
    };
  },
  computed: {
    visitedcity: function() {
      return this.$store.state.city;
    }
  },
  methods: {
    pickIt(city) {
      this.$router.push("/home");
      //   console.log(city)
      if (city) {
        this.$store.dispatch("citypick", city);
        localStorage.city=city;
      }
    },

    gotoVisited() {
      this.bscroll.scrollToElement(this.$refs.visited);
    },
    gotoHot() {
      this.bscroll.scrollToElement(this.$refs.hot);
    },
    gotoLetter(key) {
      this.bscroll.scrollToElement(this.$refs[key][0]);
    },
    handleTouchStart(e) {
    //   console.log(this.allcities);
    },
    handleTouchMove(e) {
      let index = Math.floor((e.touches[0].clientY - 121) / 19);

      let letters = Object.keys(this.allcities);
      let Alphabet = letters[index];

      if (index >= 0 && index < letters.length) {
        this.bscroll.scrollToElement(this.$refs[Alphabet][0]);
      }
    },
    handleTouchEnd() {}
  },
  async mounted() {
    // console.log(this.$store.state);
    let result = await axios({
      method: "get",
      url: "/cities.json"
    });
    let data = result.data;
    this.hotCities = data.hotCities;
    this.allcities = data.cities;

    this.$nextTick(() => {
      this.bscroll = new BScroll("#city-list-scroll", {
        probeType: 1,
        click: true
      });
    });
  }
};
</script>

<style lang="stylus" scoped>
.city-list-container {
    height: 100%;
}

.history-city-list {
    width: 100%;
    height: 0.77rem;
}

.city-title {
    width: 100%;
    height: 0.25rem;
    background: #f2f3f4;
    line-height: 0.25rem;
    padding-left: 0.1rem;
    font-size: 0.13rem;
}

.city-list-inline {
    background-color: #f5f5f5;
}

.city-list {
    background: #ffffff;
    display: flex;
    flex-wrap: wrap;

    .city-item {
        width: 1.05rem;
        height: 0.35rem;
        border: 1px solid #e7e7e7;
        box-sizing: border-box;
        line-height: 0.44rem;
        text-align: center;
        margin: 0.08rem 0 0.08rem 0.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.13rem;
    }
}

.nav {
    position: fixed;
    top: 0.73rem;
    right: 0;
    height: 4.48rem;
    width: 0.35rem;
    font-size: 0.12rem;
    text-align: center;
    z-index: 10;
    color: #333;

    .nav-item {
        width: 0.35rem;
        height: 0.19rem;
    }

    .nav-letter {
        width: 0.15rem;
        margin-left: 0.15rem;
    }
}
</style>

