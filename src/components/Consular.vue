<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('consular.title') }}
        </h2>
        <p class="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {{ t('consular.subtitle', 'Services administratifs et consulaires pour les citoyens sénégalais et étrangers.') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- CARD 1: VISA -->
        <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-embassy-green rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div>
            <span class="rounded-lg inline-flex p-3 bg-green-50 text-embassy-green ring-4 ring-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-medium">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ t('services.visa') }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              Informations sur les demandes de visa, documents requis et procédures pour se rendre au Sénégal.
            </p>
          </div>
          <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-embassy-green" aria-hidden="true">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>

        <!-- CARD 2: PASSPORT -->
        <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-embassy-green rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div>
            <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-600 ring-4 ring-white">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-medium">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                {{ t('services.passport') }}
              </a>
            </h3>
             <p class="mt-2 text-sm text-gray-500">
              Renouvellement et demande de passeport biométrique CEDEAO. Prise de rendez-vous en ligne.
            </p>
          </div>
        </div>

        <!-- CARD 3: CARTE CONSULAIRE -->
        <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-embassy-green rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div>
            <span class="rounded-lg inline-flex p-3 bg-red-50 text-red-600 ring-4 ring-white">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-medium">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Immatriculation
              </a>
            </h3>
             <p class="mt-2 text-sm text-gray-500">
              Inscription au registre des Sénégalais de l'extérieur et délivrance de la carte consulaire.
            </p>
          </div>
        </div>
      </div>
      
      <div class="mt-10 text-center">
        <a href="#" class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-embassy-green">
          Voir tous les services consulaires
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>