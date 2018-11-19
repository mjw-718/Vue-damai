import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from 'pages/home/Main'
import profile from 'pages/profiles/profile'
import CityPick from 'pages/citypick/CityPick'
import List from 'pages/List/List'
import Details from 'pages/Details/Details'
import search from 'pages/search/search'
import Cart from 'pages/Cart/Cart'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Main,
    meta:1
  },
  {
    name: 'profile',
    path: '/profile',
    component: profile,
    meta:2
  },
  {
    name: 'citypick',
    path: '/citypick',
    component: CityPick,
    meta:0
  },
  {
    name: 'list',
    path: '/list/:listid',
    component: List,
    meta:4
    
  },
  {
    name: 'details',
    path: '/details',
    component: Details,
    meta:5
    
  },
  {
    name: 'search',
    path: '/search',
    component: search,
    meta:5
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart,
    meta:6
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router