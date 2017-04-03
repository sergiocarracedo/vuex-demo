import Vue from 'vue'
import Router from 'vue-router'
import VuexDemo from '@/components/VuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VuexDemo',
      component: VuexDemo
    }
  ]
})
