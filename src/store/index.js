import Vue from 'vue';
import Vuex from 'vuex';
import menu from './module/menu'

Vue.use(Vuex);

const state = {};

const mutations = {};

const getters = {};

const modules = {
  menu
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
