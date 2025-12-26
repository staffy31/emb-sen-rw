import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

// Pages
import HomePage from '@/pages/HomePage.vue'
import CooperationPage from '@/pages/embassy/CooperationPage.vue'
import AmbassadorPage from '@/pages/embassy/AmbassadorPage.vue'
import JurisdictionPage from '@/pages/embassy/JurisdictionPage.vue'
import MissionsPage from '@/pages/embassy/MissionsPage.vue'

import ConsularServicesPage from '@/pages/consular/ServicesPage.vue'
import FAQPage from '@/pages/consular/FAQPage.vue'

import SenegalOverviewPage from '@/pages/senegal/OverviewPage.vue'
import VisitSenegalPage from '@/pages/senegal/VisitPage.vue'
import InvestSenegalPage from '@/pages/senegal/InvestPage.vue'
import TourismPage from '@/pages/senegal/TourismPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: HomePage },

        // Embassy
        { path: 'embassy/cooperation', component: CooperationPage },
        { path: 'embassy/ambassador', component: AmbassadorPage },
        { path: 'embassy/jurisdiction', component: JurisdictionPage },
        { path: 'embassy/missions', component: MissionsPage },

        // Consular
        { path: 'consular/services', component: ConsularServicesPage },
        { path: 'consular/faq', component: FAQPage },

        // Senegal
        { path: 'senegal/overview', component: SenegalOverviewPage },
        { path: 'senegal/visit', component: VisitSenegalPage },
        { path: 'senegal/invest', component: InvestSenegalPage },
        { path: 'senegal/tourism', component: TourismPage },
      ]
    }
  ]
})
