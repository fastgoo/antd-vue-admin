<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <common-sider-bar></common-sider-bar>
    <a-layout>
      <common-header></common-header>
      <a-breadcrumb style="margin: 23px 55px;position: absolute;">
        <a-breadcrumb-item v-for="breadcrumb in this.$store.state.menu.breadcrumbs">{{breadcrumb}}</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content style="margin:24px 16px;padding:24px;background:#fff;minHeight:280px;overflow-y:auto;">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
  #components-layout-demo-custom-trigger {
    height: 100%;
  }

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #108ee9;
  }

  #components-layout-demo-custom-trigger .logo {
    overflow: hidden;
    height: 32px;
    background: #333;
    border-radius: 6px;
    margin: 16px;
    text-align: center;
  }

  #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
  }

  #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .nav-text {
    display: none;
  }
</style>

<script>
  import CommonHeader from "./Header.vue";
  import CommonSiderBar from "./SiderBar.vue";

  export default {
    created() {

    },
    components: {CommonHeader, CommonSiderBar},
    data() {
      return {}
    },
    methods: {}
  }
</script>
