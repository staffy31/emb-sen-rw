<template>
  <section class="py-12 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('consular.title') }}
        </h2>
        <p class="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {{ t('consular.subtitle', 'Services administratifs et consulaires pour les citoyens sénégalais et étrangers.') }}
        </p>
      </div>

      <div class="relative">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${activeSlide * 100}%)` }">
          <!-- SLIDE 1: VISA -->
          <div class="w-full flex-shrink-0 px-4">
            <div class="relative group bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200 max-w-4xl mx-auto">
              <div class="flex items-center justify-between mb-6">
                <span class="rounded-2xl inline-flex p-4 bg-white text-embassy-green shadow-md">
                  <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                <span class="text-green-600 font-semibold text-sm uppercase tracking-wide">Service Visa</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('services.visa') }}
                </h3>
                <p class="text-gray-600 text-lg leading-relaxed">
                  Informations sur les demandes de visa, documents requis et procédures pour se rendre au Sénégal.
                </p>
                <button class="mt-6 inline-flex items-center px-6 py-3 bg-embassy-green text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-200">
                  En savoir plus
                  <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- SLIDE 2: PASSPORT -->
          <div class="w-full flex-shrink-0 px-4">
            <div class="relative group bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-200 max-w-4xl mx-auto">
              <div class="flex items-center justify-between mb-6">
                <span class="rounded-2xl inline-flex p-4 bg-white text-yellow-600 shadow-md">
                  <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </span>
                <span class="text-yellow-600 font-semibold text-sm uppercase tracking-wide">Service Passeport</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('services.passport') }}
                </h3>
                <p class="text-gray-600 text-lg leading-relaxed">
                  Renouvellement et demande de passeport biométrique CEDEAO. Prise de rendez-vous en ligne.
                </p>
                <button class="mt-6 inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-xl hover:bg-yellow-700 transition-colors duration-200">
                  En savoir plus
                  <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- SLIDE 3: IMMATRICULATION -->
          <div class="w-full flex-shrink-0 px-4">
            <div class="relative group bg-gradient-to-br from-red-50 to-rose-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-200 max-w-4xl mx-auto">
              <div class="flex items-center justify-between mb-6">
                <span class="rounded-2xl inline-flex p-4 bg-white text-red-600 shadow-md">
                  <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span class="text-red-600 font-semibold text-sm uppercase tracking-wide">Service Immatriculation</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  Immatriculation
                </h3>
                <p class="text-gray-600 text-lg leading-relaxed">
                  Inscription au registre des Sénégalais de l'extérieur et délivrance de la carte consulaire.
                </p>
                <button class="mt-6 inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors duration-200">
                  En savoir plus
                  <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Controls -->
        <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button v-for="(slide, index) in 3" :key="index" @click="activeSlide = index" :class="[
            'w-3 h-3 rounded-full transition-all duration-200',
            activeSlide === index ? 'bg-embassy-green scale-125' : 'bg-gray-300 hover:bg-gray-400'
          ]"></button>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <a href="#" class="inline-flex items-center px-8 py-4 bg-embassy-green text-white font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-embassy-green transition-all duration-200 shadow-lg hover:shadow-xl">
          Voir tous les services consulaires
          <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeSlide = ref(0)
let autoSlideInterval: NodeJS.Timeout

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % 3
}

const prevSlide = () => {
  activeSlide.value = activeSlide.value === 0 ? 2 : activeSlide.value - 1
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>