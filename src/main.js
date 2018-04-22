// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './components'
import moment from 'moment'
import 'moment/locale/zh-cn';

Vue.config.productionTip = false;
Vue.use(Vuex);
moment.locale('zh-cn');

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
