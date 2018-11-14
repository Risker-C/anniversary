import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcomePage',
      component: () => import('@/components/welcomePage')
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('@/components/letter')
    }
  ]
})
