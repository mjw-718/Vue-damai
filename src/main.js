import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/dist/css/swiper.css';
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});