import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Iscroll from 'iscroll/build/iscroll-probe'

// vant 组件
import { Tabbar, TabbarItem, Icon, NavBar, Swipe, SwipeItem, Button, Tab, Tabs, Stepper, Cell, CellGroup, Field, SwitchCell, SubmitBar, AddressEdit, AddressList } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Swipe).use(SwipeItem).use(Button ).use(Tab).use(Tabs).use(Stepper).use(Cell).use(CellGroup).use(Field).use(SwitchCell).use(SubmitBar).use(AddressEdit).use(AddressList)
// Vue.use(Iscroll)

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
