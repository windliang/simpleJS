import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import porpParent from '@/components/porps&$emit/parent'
import refParent from '@/components/ref&refs/parent'
import eventBusParent from '@/components/eventBus/parent'
import vuexParent from '@/components/vuex/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/porpParent',
      name: 'porpParent',
      component: porpParent
    },
    {
      path: '/refParent',
      name: 'refParent',
      component: refParent
    },
    {
      path: '/eventBusParent',
      name: 'eventBusParent',
      component: eventBusParent
    },
    {
      path: '/vuexParent',
      name: 'vuexParent',
      component: vuexParent
    }
  ]
})
