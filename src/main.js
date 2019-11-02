import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Iscroll from 'iscroll/build/iscroll-probe'

// vant 组件
import { Tabbar, TabbarItem, Icon, NavBar, Swipe, SwipeItem, Button, Tab, Tabs  } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Swipe).use(SwipeItem).use(Button ).use(Tab).use(Tabs)
// Vue.use(Iscroll)

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
