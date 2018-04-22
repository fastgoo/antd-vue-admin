<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="this.$store.state.menu.customCollapsed ? 'menu-unfold' : 'menu-fold'"
            @click="toggle"/>
    <div class="user-info">
      <a-dropdown>
        <span class="el-dropdown-link">
        <img class="user-logo"
             src="https://thirdwx.qlogo.cn/mmopen/2eGvIazZjGgCU6JOic3ox6OPrbm9mPKfvb2Eznx4Z5dp62BMYW1DnnkMiaicFarYBCVPo25DA7RVAsYV9DzgjwQmXAREO6ykoQs/132">
        周先生🏅
        </span>
        <a-menu slot="overlay" style="text-align: center">
          <a-menu-item>
            <a href="javascript:;">个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">修改密码</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;" style="color: red">
              <a-icon type="poweroff"/>&nbsp;退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>
<script>

  export default {
    components: {},
    data() {
      return {}
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

