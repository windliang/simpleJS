import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import a from '@/views/a'
import b from '@/views/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: home,
      children: [{
        path: '/',
        name: 'a',
        component: a
      },{
        path: 'b',
        name: 'b',
        component: b
      }] 
    }
  ]
})