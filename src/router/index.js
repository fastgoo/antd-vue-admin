import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/** 使用懒加载来提高效率 */
const Login = () => import('@/components/Base/Login/Index');
const Home = () => import('@/components/Base/Common/Home');
const CommonAdmin = () => import('@/components/Base/SystemSet/Admin');
const CommonMenu = () => import('@/components/Base/SystemSet/Menu');
const CommonStats = () => import('@/components/Base/Stats/Index');

export default new Router({
  routes: [{
    path: '/login',
    component: Login,
  }, {
    path: '/',
    component: Home,
    children: [{
      path: '/common/admin',
      component: CommonAdmin,
    }, {
      path: '/common/menu',
      component: CommonMenu,
    }, {
      path: '/common/stats',
      component: CommonStats,
    },]
  }]
})
