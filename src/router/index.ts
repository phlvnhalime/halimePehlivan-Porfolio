import { createRouter, createWebHashHistory } from 'vue-router'
import BrainConcept from '@/components/BrainConcept.vue'
import SoftwareDevelop from '@/views/SoftwareDevelop.vue'
import MechMechanicalEngineer from '@/views/MechMechanicalEngineer.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrainConcept,
    },
    {
      path: '/software-developer',
      name: 'software-developer',
      component: SoftwareDevelop,
    },
    {
      path: '/mechanical-engineer',
      name: 'mechanical-engineer',
      component: MechMechanicalEngineer,
    },
  ],
})

export default router
