<template>
  <v-header :style="{ background: '#fff', padding: 0 }">
    <v-icon class="trigger" :type="this.$store.state.menu.customCollapsed ? 'menu-unfold' : 'menu-fold'"
            @click.native="toggle"></v-icon>
    <div class="user-info">
          <span class="el-dropdown-link">
            <v-dropdown :data="data">
            <img class="user-logo"
                 src="https://thirdwx.qlogo.cn/mmopen/2eGvIazZjGgCU6JOic3ox6OPrbm9mPKfvb2Eznx4Z5dp62BMYW1DnnkMiaicFarYBCVPo25DA7RVAsYV9DzgjwQmXAREO6ykoQs/132">

              周先生🏅
            </v-dropdown>
          </span>
    </div>

  </v-header>
</template>
<script>

  export default {
    components: {},
    data() {
      return {
        data: [
          {content: '个人中心'},
          {content: '修改密码'},
          {content: '退出登录'},
        ],
      }
    },
    methods: {
      toggle() {
        this.$store.dispatch('customCollapsed')
      }
    }
  }
</script>
<style>
  .user-info {
    float: right;
    padding-right: 50px;
    font-size: 14px;
  }

  .user-info .el-dropdown-link {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    cursor: pointer;
    vertical-align: middle;
  }

  .user-info .user-logo {
    position: absolute;
    left: 0;
    top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>

