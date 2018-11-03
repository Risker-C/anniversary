import Vue from 'vue'
import Router from 'vue-router'
import welcomePage from '@/components/welcomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcomePage',
      component: welcomePage
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('@/components/letter')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('@/components/photos')
    }
  ]
})
