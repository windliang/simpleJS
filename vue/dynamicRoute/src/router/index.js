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
  },
  { 
    path: 'navPage2A',
    name: 'navPage2A',
    component: () => import('@/views/navPage2/a')
  },
  { 
    path: 'navPage2B',
    name: 'navPage2B',
    component: () => import('@/views/navPage2/b')
  },
  { 
    path: 'navPage2C',
    name: 'navPage2C',
    component: () => import('@/views/navPage2/c')
  }] 
}]
export default new Router({
  routes: constantRouterMap
})