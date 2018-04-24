import Vue from 'vue';
import Vuex from 'vuex';
import menu from './module/menu'
import user from './module/user'
import websocket from './module/websocket'

Vue.use(Vuex);

const state = {};

const mutations = {};

const getters = {};

const modules = {
  menu, user, websocket
};

const actions = {};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
});

export default store
