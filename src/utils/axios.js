import axios from 'axios'
import Vue from 'vue'
import {setSign} from "./base_func";

/** 请求拦截器 */
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem("token") ? localStorage.getItem("token") : '';
  return config;
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

/** 响应拦截器 */
axios.interceptors.response.use(function (response) {
  const res = response.data;
  console.log(setSign(res));
  return response;
}, function (error) {
  Vue.prototype.$message.error('哎呀！出错啦（' + error.message + '）', 3);
  return Promise.reject(error);
});
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http = axios;
