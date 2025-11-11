import { createRouter, createWebHistory } from 'vue-router'
import BrainConcept from '@/components/BrainConcept.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrainConcept,
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: '/software-developer',
      name: 'software-developer',
      component: () => import('../views/SoftwareDevelop.vue'),
    },
    {
      path: '/mechanical-engineer',
      name: 'mechanical-engineer',
      component: () => import('../views/MechMechanicalEngineer.vue'),
    },
  ],
})

export default router
