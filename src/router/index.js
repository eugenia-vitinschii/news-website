import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(),
   routes: [
     {
       path: '/',
       name: 'home',
       component: () => import('../views/HomeView.vue')
     }, 
    {
      path: '/all',
      name: 'all',
      component: () => import('../views/AllView.vue')
    },
     {
      path: '/top',
      name: 'top',
      component: () => import('../views/TopView.vue')
    },
    {
      path: '/thesis/:id',
      name: 'thesis',
      component: () => import('../views/ThesisView.vue'),
      props: true
    },
    {
      path: '/celebrity',
      name: 'celebrity',
      component: () => import('../views/CelebrityView.vue')
    },
    {
      path: '/sport',
      name: 'sport',
      component: () => import('../views/SportView.vue')
    },
    {
      path: '/politics',
      name: 'politics',
      component: () => import('../views/PoliticsView.vue')
    }, 
    {
      path: '/television',
      name: 'television',
      component: () => import('../views/TelevisionView.vue')
    },  
    {
      path: '/entertainment',
      name: 'entertainment',
      component: () => import('../views/EntertainmentView.vue')
    },
   ]
 })
 

export default router