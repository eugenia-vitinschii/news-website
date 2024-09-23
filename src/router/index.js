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
   ]
 })
 

export default router