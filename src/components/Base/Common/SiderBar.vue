<template>
  <a-layout-sider :trigger="false" v-model="this.$store.state.menu.customCollapsed">
    <div class="logo"><span style="color: #108ee9;font-size: 15px;line-height: 32px;">快捷行管理后台</span></div>
    <a-menu :defaultSelectedKeys="[this.$route.path]" :defaultOpenKeys="openMenu" mode="inline" theme="dark"
            :inlineCollapsed="this.$store.state.menu.customCollapsed" @select="menuClick">

      <a-sub-menu :key="menuList.key" v-for="menuList in this.$store.state.menu.menuList"
                  v-if="'children' in menuList">
        <span slot="title"><a-icon :type="menuList.icon"/><span>{{menuList.name}}</span></span>
        <a-sub-menu :key="subMenu.key" v-for="subMenu in menuList.children" v-if="'children' in subMenu">
          <span slot="title">
            <a-icon :type="subMenu.icon" v-if="'icon' in subMenu"/>
            <span>{{subMenu.name}}</span>
          </span>
          <a-menu-item :key="subMenuItem.key" v-for="subMenuItem in subMenu.children">
            <a-icon :type="subMenuItem.icon" v-if="'icon' in subMenuItem"/>
            {{subMenuItem.name}}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item :key="subMenu.key" v-else>
          <a-icon :type="subMenu.icon" v-if="'icon' in subMenu"/>
          {{subMenu.name}}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item :key="menuList.key" v-else>
        <a-icon :type="menuList.icon" v-if="'icon' in menuList"/>
        <span>{{menuList.name}}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>

  export default {
    created() {
      this.setBreadcrumb(this.$route.path);
    },
    components: {},
    data() {
      return {
        menuData: this.$store.state.menu.menuList,
        openMenu: [],
      }
    },
    methods: {
      menuClick(ret) {
        this.setBreadcrumb(ret.key);
        this.$router.push(ret.key);
      },
      setBreadcrumb(key) {
        let breadcrumbArr = [];
        this.openMenu = [];
        let isOpen = false;
        for (let i = 0; i < this.menuData.length; i++) {
          if (this.menuData[i].key == key) {
            breadcrumbArr.push(this.menuData[i].name);
            isOpen = true;
            break;
          }
          if ('children' in this.menuData[i] && this.menuData[i].children.length > 0) {
            breadcrumbArr.push(this.menuData[i].name);
            this.openMenu.push(this.menuData[i].key);
            for (let c_i = 0; c_i < this.menuData[i].children.length; c_i++) {
              if (this.menuData[i].children[c_i].key == key) {
                breadcrumbArr.push(this.menuData[i].children[c_i].name);
                isOpen = true;
                break;
              }
              if ('children' in this.menuData[i].children[c_i] && this.menuData[i].children[c_i].children.length > 0) {
                breadcrumbArr.push(this.menuData[i].children[c_i].name);
                this.openMenu.push(this.menuData[i].children[c_i].key);
                for (let c_i2 = 0; c_i2 < this.menuData[i].children[c_i].children.length; c_i2++) {
                  if (this.menuData[i].children[c_i].children[c_i2].key == key) {
                    breadcrumbArr.push(this.menuData[i].children[c_i].children[c_i2].name);
                    isOpen = true;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!isOpen) {
          this.openMenu = [];
        }
        console.log(this.openMenu);
        this.$store.dispatch('setBreadcrumbs', breadcrumbArr);
      }

    }
  }
</script>
