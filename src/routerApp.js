import { createWebHistory, createRouter } from 'vue-router'

import home from './components/home/home.vue'
import details from './components/details/details.vue'

const routes = [
  { path: '/',         component: home    },
  { path: '/details',  component: details },
  { path: '/Bebidas0', component: details },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;