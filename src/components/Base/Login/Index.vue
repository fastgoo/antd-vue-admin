<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <div>
        <div>
          <a-input style="height: 38px;" v-model="user.username" placeholder="请输入账号"></a-input>
        </div>
        <div style="margin-top: 20px;">
          <a-input style="height: 38px;" type="password" placeholder="请输入密码" v-model="user.password"
                   @keyup.enter.native=""></a-input>
        </div>
        <div class="login-btn">
          <a-button type="primary" @click="loginByUsername">登录</a-button>
        </div>
        <div style="float: left;margin-top: 15px;" @click="register">
          <a href="javascript:" style="font-size:13px;line-height:30px;color:#999;text-decoration:none;">注册账号？</a>
        </div>
        <div style="float: right;margin-top: 15px;" @click="wecahtLogin">
          <a href="javascript:" style="font-size:13px;line-height:30px;color:#58B7FF;text-decoration:none;">微信登录</a>
        </div>
      </div>
    </div>
    <wechat ref="wechat"></wechat>
  </div>
</template>

<script>
  import Wechat from './Wechat'

  export default {
    components: {Wechat},
    created() {

    },
    data: function () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        this.$message.warning('暂不开放注册功能');
      },
      wecahtLogin() {
        this.$refs.wechat.wechatLogin();
      },
      loginByUsername() {
        if (!this.user.username || !this.user.password) {
          this.$message.warning('账号或者密码不能为空');
          return;
        }
        this.Post(baseApi.login, this.user, function () {

        });
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #324157;
  }

  .ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 380px;
    height: 250px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  }

  .ms-login:hover {
    box-shadow: 0 0 6px #ffffff;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
    margin-top: 23px;
  }
</style>
