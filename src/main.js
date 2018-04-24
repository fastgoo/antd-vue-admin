// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './api/api.url'
import store from './store'
import moment from 'moment'
import ViserVue from 'viser-vue'
import 'moment/locale/zh-cn'
import './components'
import './utils/axios'
import Request from './utils/request'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ViserVue)
Vue.use(Request)
moment.locale('zh-cn');

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
