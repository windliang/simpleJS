import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import single from '@/components/single'
import singleDemo from '@/components/single/demo'
import couples from '@/components/couples'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/single',
      name: 'single',
      component: single
    },
    {
      path: '/singleDemo',
      name: 'singleDemo',
      component: singleDemo
    },
    {
      path: '/couples',
      name: 'couples',
      component: couples
    }
  ]
})
