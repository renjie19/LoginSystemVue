import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from "./router";
import { store } from "./store"

Vue.use(VueRouter);
Vue.use(axios);
Vue.use(VueAxios);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')





