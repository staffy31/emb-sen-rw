import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import GenericPage from '@/pages/GenericPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    // AMBASSADE PAGES
    {
      path: '/ambassade/:index',
      component: GenericPage,
      props: (route: any) => ({
        section: 'ambassade',
        index: Number(route.params.index)
      })
    },
    // CONSULAR PAGES
    {
      path: '/consular/:index',
      component: GenericPage,
      props: (route: any) => ({
        section: 'consular',
        index: Number(route.params.index)
      })
    },
    // SENEGAL PAGES
    {
      path: '/senegal/:index',
      component: GenericPage,
      props: (route: any) => ({
        section: 'senegal',
        index: Number(route.params.index)
      })
    }
  ],
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  }
})
