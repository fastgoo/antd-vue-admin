<template>
  <div>
    <a-modal title="使用微信扫码登录" :visible="wechat.visible" style="text-align: center"
             @cancel="wechat.visible = !wechat.visible">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="wechat.loading" @click="wechatLogin"
                  style="width: 80px;">刷新
        </a-button>
      </template>
      <img :src="wechat.imgUrl" width="350" height="350"/>
    </a-modal>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        wechat: {
          visible: false,
          loading: false,
          imgUrl: null,
        }
      }
    },
    methods: {
      wechatLogin() {
        this.wechat.loading = true;
        this.authKey = parseInt(Math.random() * (999999 - 100000 + 1) + 100000);
        let that = this;
        this.$store.dispatch('socketSendMsg', 'getQrcode', {key: this.authKey, app_id: baseApi.appId});
        this.$store.dispatch('setSocketMessageCall', function (ret) {
          if (ret.head.type == 'getQrcode') {
            that.wechat.imgUrl = ret.body.url;
            that.wechat.loading = false;
            that.wechat.visible = true;
            that.$store.dispatch('setSocketMessageCall', function (ret) {
              if (ret.head.type == 'getQrcodeAuthInfo') {
                that.loginByWechatToken(ret.body.token);
              }
            });
          }

        });
      },
      loginByWechatToken(token) {
        console.log(token);
      },
    }
  }
</script>
