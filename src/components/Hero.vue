<template>
   <div class="relative overflow-hidden">
      <!-- HERO SECTION -->
      <div class="relative min-h-screen flex items-center">
         <!-- Background with Gradient Overlay -->
         <div class="absolute inset-0">
            <img class="w-full h-full object-cover" src="/navbar.png" alt="Background Pattern" />
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/70 via-teal-600/65 to-cyan-600/60"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
         </div>

         <!-- Floating Elements -->
         <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div class="absolute bottom-32 right-16 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg animate-bounce"></div>
            <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-teal-300/15 rounded-full blur-md animate-pulse delay-1000"></div>
         </div>

         <!-- Hero Content -->
         <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
            <div class="space-y-8">
               <!-- Welcome Badge -->
               <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 text-sm font-medium">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                  {{ t('home.greeting') }}
               </div>

               <!-- Main Title -->
               <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span class="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                     {{ t('republic') }}
                  </span>
                  <span class="block text-2xl sm:text-3xl lg:text-4xl font-light mt-4 text-emerald-100">
                     {{ t('hero_title') }}
                  </span>
               </h1>

               <!-- Subtitle -->
               <p class="text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto font-light leading-relaxed">
                  {{ t('hero_subtitle') }}
               </p>

               <!-- CTA Buttons -->
               <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                  <a href="#services" class="group relative px-8 py-4 bg-white text-emerald-600 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                     <span class="relative z-10">{{ t('menu.consular.title') }}</span>
                     <div class="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="#contact" class="group relative px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1">
                     <span class="relative z-10">{{ t('menu.contact') }}</span>
                  </a>
               </div>
            </div>
         </div>

         <!-- Scroll Indicator -->
         <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
         </div>
      </div>

      <!-- OFFICIALS SECTION -->
      <div class="relative bg-gradient-to-b from-gray-50 to-white py-24">
         <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Officials Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
               <!-- PRESIDENT -->
               <div class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative p-8 text-center">
                     <div class="relative mx-auto w-32 h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <img src="/president.jpg" :alt="t('officials.president.name')" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
                     <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('officials.president.name') }}</h3>
                     <p class="text-sm text-emerald-600 font-semibold uppercase tracking-wider">{{ t('officials.president.title') }}</p>
                  </div>
               </div>

               <!-- MINISTER -->
               <div class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative p-8 text-center">
                     <div class="relative mx-auto w-32 h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <img src="/minister.png" :alt="t('officials.minister.name')" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
                     <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('officials.minister.name') }}</h3>
                     <p class="text-sm text-emerald-600 font-semibold uppercase tracking-wider">{{ t('officials.minister.title') }}</p>
                  </div>
               </div>

               <!-- AMBASSADOR -->
               <div class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative p-8 text-center">
                     <div class="relative mx-auto w-32 h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <img src="/hero/HE_ambassador.png" :alt="t('officials.ambassador.name')" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
                     <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('officials.ambassador.name') }}</h3>
                     <p class="text-sm text-emerald-600 font-semibold uppercase tracking-wider">{{ t('officials.ambassador.title') }}</p>
                  </div>
               </div>
            </div>

            <!-- Section Header -->
            <div class="text-center mb-16">
               <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{{ t('home.title') }}</h2>
               <div class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            </div>

            <!-- Welcome Message -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div class="space-y-6">
                  <div class="space-y-4 text-gray-700 leading-relaxed">
                     <p class="text-lg font-medium text-emerald-600">{{ t('home.paragraph1') }}</p>
                     <p>{{ t('home.paragraph2') }}</p>
                     <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                        <p class="font-semibold text-emerald-700">{{ t('home.closing') }}</p>
                        <p class="font-bold text-gray-900 italic mt-2">{{ t('home.signature') }}</p>
                     </div>
                  </div>
               </div>
               <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 transform rotate-3 rounded-3xl opacity-20"></div>
                  <div class="relative bg-white p-2 rounded-3xl shadow-2xl">
                     <img src="/pages/amb.png" alt="Embassy Building" class="w-full h-96 object-cover rounded-2xl" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
