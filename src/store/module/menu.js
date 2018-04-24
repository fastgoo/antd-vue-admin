const menu = {
  state: {
    customCollapsed: false,
    menuList: [{
      name: '首页',
      icon: 'home',
      key: '/',
    }, {
      name: '系统设置',
      icon: 'setting',
      key: 'setting',
      children: [{
        name: "统计图表",
        key: '/common/stats',
      },{
        name: "管理员",
        key: '/common/admin',
      }, {
        name: "菜单管理",
        key: 'menu-setting',
        children: [{
          name: "菜单列表",
          key: '/common/menu',
        }, {
          name: "权限列表",
          key: '/common/role',
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
