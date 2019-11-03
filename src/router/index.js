import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    name: 'home',
    component: () => import(/* webpackChunkName: "discover" */ '../views/Discover.vue')
  },
  {
    path: '/discover/detail/id/:id',
    component: () => import(/*webpackChunkName: "detail" */'../views/GoodsDetail.vue')
  },
  {
    path: '/discover/submitOrder/id/:id',
    component: () => import(/*webpackChunkName: "submitOrder" */'../views/SubmitOrder.vue')
  },
  {
    path: '/discover/addaddr',
    name: 'addaddr',
    component: () => import(/* webpackChunkName: "addaddr" */ '../views/AddAddr.vue')
  },
  {
    path: '/order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  {
    path: '/mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  },
  {
    path: '/mine/addrManage',
    component: () => import(/* webpackChunkName: "addrManage" */ '../views/AddrManage.vue')
  },
  {
    path: '/mine/contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/mine/helpCenter',
    component: () => import(/* webpackChunkName: "helpCenter" */ '../views/HelpCenter.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
