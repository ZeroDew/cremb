import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  mapMutations
} from 'vuex'


import HomeVue from '@/views/home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: HomeVue
}, {
  path: '/classify',
  name: 'classify',
  component: () => import('@/views/classify.vue'),
  children: [{
    name: 'cateDetail',
    path: '/cateDetail',
    component: () => require('@/components/classify/cateDetail.vue')
  }]
}, {
  path: '/cart',
  name: 'cart',
  component: () => import('@/views/cart.vue')
}, {
  path: '/personal',
  name: 'personal',
  component: () => import('@/views/personal.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
}, {
  path: '/detail',
  name: 'detail',
  component: () => import('@/views/detail.vue')
}, {
  path: '/test',
  name: 'test',
  component: () => import('@/components/addCar.vue')
}, {
  path: '/search',
  name: 'search',
  component: () => import('@/views/searchVue.vue')
}, {
  path: '/coupon',
  name: 'coupon',
  component: () => import('@/views/coupon.vue')
}, {
  path: '/pages/news_list/index',
  name: 'news_list',
  component: () => import('@/views/news_list.vue')
}, {
  path: '/pages/users/commission_rank/index',
  name: 'commission_rank',
  component: () => import('@/views/commission_rank.vue')
}, {
  path: '/pages/activity/bargain/index',
  name: 'bargain',
  component: () => import('@/views/bargain.vue')
}]


const router = new VueRouter({
  routes
})



export default router