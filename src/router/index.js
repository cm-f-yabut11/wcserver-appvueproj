import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/HomePage.vue'
import blog from '@/components/BlogPage.vue'
import gallery from '@/components/GalleryPage.vue'
import about from '@/components/AboutPage.vue'
import contact from '@/components/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: home,
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: blog,
    },
    {
      path: '/gallery',
      name: 'GalleryPage',
      component: gallery,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: about,
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: contact,
    },
  ]
})

export default router
