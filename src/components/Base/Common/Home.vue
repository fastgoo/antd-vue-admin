<template>
  <div id="components-layout-demo-custom-trigger">
    <v-layout style="height:100%;">
      <!--左侧菜单栏-->
      <v-sider collapsible :collapsed="this.$store.state.menu.customCollapsed" :trigger="false" :collapsed-width="64">
        <div class="logo">
          <span style="color: #108ee9;font-size: 15px;line-height: 32px;">快捷行管理后台</span>
        </div>
        <v-menu theme="dark" mode="inline" :data="this.$store.state.menu.menuList"
                :inline-collapsed="this.$store.state.menu.customCollapsed" @item-click="itemMenuClick">
        </v-menu>
      </v-sider>
      <v-layout>
        <!--头部栏-->
        <common-header></common-header>
        <v-breadcrumb style="margin: 23px 55px;position: absolute;">
          <v-breadcrumb-item v-for="breadcrumb in this.$store.state.menu.breadcrumbs">{{breadcrumb}}
          </v-breadcrumb-item>
        </v-breadcrumb>
        <!--内容栏-->
        <v-content style="padding:30px 30px;overflow-y:auto;">
          <div style="padding: 24px; background: #fff;height: 100%;">
            <transition name="move" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </v-content>
        <!--底部栏-->
        <!--<v-footer :style="{ textAlign: 'center' }">
          ©2017 快捷行提供技术支持
        </v-footer>-->
      </v-layout>
    </v-layout>
  </div>
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

  export default {
    created() {
      this.setDefaultSelected();
    },
    components: {CommonHeader},
    data() {
      return {}
    },
    methods: {
      /** 设置面包屑的路径 **/
      itemMenuClick(ret, href = true) {
        let breadcrumbArr = [];
        let url;
        for (let i = 0; i < ret.length; i++) {
          breadcrumbArr.push(ret[i].name);
          url = ret[i].url;
        }
        this.$store.dispatch('setBreadcrumbs', breadcrumbArr);
        href && this.$router.push(url);
      },
      /** 处理用户刷新后，菜单没办法选择以及面包屑路径清除的问题 */
      setDefaultSelected() {
        let breadcrumbArr = [];
        let menuList = this.$store.state.menu.menuList;
        for (let i = 0; i < menuList.length; i++) {
          if ('url' in menuList[i] && menuList[i].url == this.$route.path) {
            breadcrumbArr.push(menuList[i]);
            if ('selected' in menuList[i]) {
              menuList[i].selected = true;
            }
            break;
          }
          if ('children' in menuList[i] && menuList[i].children.length > 0) {
            breadcrumbArr.push(menuList[i]);
            menuList[i].expand = true;
            for (let c_i = 0; c_i < menuList[i].children.length; c_i++) {
              if ('url' in menuList[i].children[c_i] && menuList[i].children[c_i].url == this.$route.path) {
                breadcrumbArr.push(menuList[i].children[c_i]);
                if ('selected' in menuList[i].children[c_i]) {
                  menuList[i].children[c_i].selected = true;
                }
                break;
              }
              if ('children' in menuList[i].children[c_i] && menuList[i].children[c_i].children.length > 0) {
                menuList[i].children[c_i].expand = true;
                breadcrumbArr.push(menuList[i].children[c_i]);
                for (let c_i2 = 0; c_i2 < menuList[i].children[c_i].children.length; c_i2++) {
                  if ('url' in menuList[i].children[c_i].children[c_i2] && menuList[i].children[c_i].children[c_i2].url == this.$route.path) {
                    breadcrumbArr.push(menuList[i].children[c_i].children[c_i2]);
                    if ('selected' in menuList[i].children[c_i].children[c_i2]) {
                      menuList[i].children[c_i].children[c_i2].selected = true;
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        this.itemMenuClick(breadcrumbArr, false);
      },
    }
  }
</script>
