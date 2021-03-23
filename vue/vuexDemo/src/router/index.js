import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import single from '@/components/single'
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
      path: '/couples',
      name: 'couples',
      component: couples
    }
  ]
})
