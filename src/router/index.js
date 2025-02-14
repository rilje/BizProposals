import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/single-data/:id',
      name: 'single-data',
      component: () => import('../views/SingleDataView.vue'),
      props: true
    },
    {
      path: '/proposals',
      name: 'proposals',
      component: () => import('../views/ProposalsView.vue'),
      
    },
  ],
})

export default router
