import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import product from "./modules/product"
import cart from "./modules/cart"
const store = new Vuex.Store({
    state: {
      city: '全国'
    },
    mutations: {
        citypick (state,city) {
        state.city = city
      }
    },
    actions: {
      citypick ({commit},city) {
        
        commit('citypick',city)
      }
    },
    modules:{
      product,
      cart
    }
  })

export default store
