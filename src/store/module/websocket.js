const websocket = {
  state: {
    client: new WebSocket(baseApi.wsServer),
    isConnect: false,
    taskId: null,
    onMessage: function () {

    },
    onConnect: function (ret) {
      this.isConnect = true;
      console.log(ret, '连接服务器成功');
    },
    onClosed: function () {
      this.isConnect = false;
    },
    onError: function () {
      this.isConnect = false;
    },
  },
  mutations: {},
  actions: {
    startSocketClient({state, dispatch}) {
      state.client.onopen = function (evt) {
        dispatch('setHeartBeat');
        state.onConnect(evt);
      };
      state.client.onclose = function (evt) {
        state.onClosed(evt);
      };
      state.client.onmessage = function (evt) {
        state.onMessage(evt.data ? JSON.parse(evt.data) : {});
      };
      state.client.onerror = function (evt) {
        state.onError(evt);
      };
    },
    setSocketConnectCall({state}, call) {
      state.onConnect = call;
    },
    setSocketMessageCall({state}, call) {
      state.onMessage = call;
    },
    socketSendMsg({state}, func, data) {
      if (!state.isConnect) {
        console.log('连接已断开，无法发送消息');
        return;
      }
      let ret = {
        head: {
          type: func,
          token: localStorage.getItem('token')
        },
        body: data
      }
      state.client.send(JSON.stringify(ret));
    },
    setHeartBeat({state, dispatch}) {
      state.taskId = setInterval(function () {
        dispatch('socketSendMsg', 'ping', {})
      }, 30000);
    }
  },
  getters: {}
};
export default websocket;
