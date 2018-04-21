const menu = {
  state: {
    customCollapsed: false,
    menuList: [{
      name: '首页',
      icon: 'home',
      url: '/home',
      selected: false,
    }, {
      name: '系统设置',
      icon: 'setting',
      expand: false,
      children: [{
        name: "管理员",
        icon: 'user',
        url: '/common/admin',
        selected: false,
      }, {
        name: "菜单管理",
        icon: 'bars',
        expand: false,
        selected: false,
        children: [{
          name: "菜单列表",
          icon: 'appstore',
          url: '/common/menu',
          selected: false,
        }, {
          name: "权限列表",
          icon: 'appstore',
          url: '/common/role',
          selected: false,
        }]
      }]
    }],
    breadcrumbs: [
      '首页'
    ],
  },
  mutations: {},
  actions: {
    customCollapsed({state}) {
      state.customCollapsed = state.customCollapsed ? false : true;
    },
    setBreadcrumbs({state}, list) {
      state.breadcrumbs = list;
    },
    addMenu({state}, menu) {
      state.menuList.push(menu);
    },
    delMenu({state}, index) {
      state.menuList.splice(index, 1);
    }
  },
  getters: {}
};
export default menu;
