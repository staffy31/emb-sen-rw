import { createRouter, createWebHistory } from 'vue-router'
import HeroLayout from '@/layouts/HeroLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import GenericPage from '@/pages/GenericPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HeroLayout,
      children: [
        // HOME
        {
          path: '',
          component: HomePage
        },

        // AMBASSADE PAGES
        {
          path: 'ambassade/:index',
          component: GenericPage,
          props: route => ({
            section: 'ambassade',
            index: Number(route.params.index)
          })
        },

        // CONSULAR PAGES
        {
          path: 'consular/:index',
          component: GenericPage,
          props: route => ({
            section: 'consular',
            index: Number(route.params.index)
          })
        },

        // SENEGAL PAGES
        {
          path: 'senegal/:index',
          component: GenericPage,
          props: route => ({
            section: 'senegal',
            index: Number(route.params.index)
          })
        }
      ]
    }
  ]
})
