import { createRouter, createWebHistory } from 'vue-router'
import notFound from '../components/notFound.vue'
import openIndex from '../components/openAI/index.vue';

const routes = [
  {
    path: '/',
    component: openIndex
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
