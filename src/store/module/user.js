const user = {
  state: {
    info: {},
  },
  mutations: {},
  actions: {
    loginOut({state}) {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    setUserInfo({state}, info) {
      state.info = info;
    },
    getUserInfo({state}) {
      return state.info;
    },
  },
  getters: {}
};
export default user;
