import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

Vue.use(Router)

export const constantRouterMap = [{
  path: '/',
  // name: 'home',
  component: home,
  children: [{
    path: '/',
    name: 'navPage1A',
    component: () => import('@/views/navPage1/a')
  },{
    path: 'navPage1B',
    name: 'navPage1B',
    component: () => import('@/views/navPage1/b')
  },{
    path: 'navPage1C',
    name: 'navPage1C',
    component: () => import('@/views/navPage1/c')
  }] 
}]
// export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Layout,
//     name: '权限测试',
//     meta: { role: ['admin','super_editor'] }, //页面需要的权限
//     children: [
//     { 
//       path: 'index',
//       component: Permission,
//       name: '权限测试页',
//       meta: { role: ['admin','super_editor'] }  //页面需要的权限
//     }]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ]
export default new Router({
  routes: constantRouterMap
})