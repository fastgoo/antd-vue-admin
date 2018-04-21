// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'vue-beauty/package/style/vue-beauty.min.css'
import VueBeauty from 'vue-beauty'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueBeauty);
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
