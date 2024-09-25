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
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/thesis/:id',
      name: 'thesis',
      component: () => import('../views/ThesisView.vue')
    },
   ]
 })
 

export default router