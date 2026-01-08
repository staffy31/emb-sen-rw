<template>
  <div class="relative bg-white overflow-hidden">
    <!-- BACKGROUND & HERO CONTENT -->
    <div class="relative">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Background Pattern" />
        <div class="absolute inset-0 bg-gradient-to-r from-embassy-green/90 to-embassy-green/70 mix-blend-multiply"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center mb-6 drop-shadow-sm">
          {{ t('republic') }} - {{ t('hero_title') }}
        </h1>
        <p class="mt-6 text-xl text-gray-100 max-w-3xl mx-auto text-center font-light leading-relaxed">
           {{ t('hero_subtitle') }}
        </p>
        
         <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a href="#services" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-embassy-green bg-white hover:bg-gray-50 sm:px-8">
                {{ t('menu.consular.title') }}
              </a>
              <a href="#contact" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-embassy-yellow/20 hover:bg-embassy-yellow/30 bg-opacity-60 sm:px-8 backdrop-blur-sm border-white/30">
                {{ t('menu.contact') }}
              </a>
            </div>
          </div>
      </div>
    </div>

    <!-- OFFICIALS & WELCOME SECTION -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 pb-16">
      
      <!-- OFFICIALS CARDS -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <!-- PRESIDENT -->
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
             <div class="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                <img src="/president.jpg" :alt="t('officials.president.name')" class="h-full w-full object-cover" />
             </div>
             <h3 class="text-lg font-bold text-gray-900">{{ t('officials.president.name') }}</h3>
             <p class="text-sm text-embassy-green font-medium uppercase tracking-wide mt-1">{{ t('officials.president.title') }}</p>
          </div>

           <!-- MINISTER -->
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
             <div class="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                <img src="/minister.png" :alt="t('officials.minister.name')" class="h-full w-full object-cover" />
             </div>
             <h3 class="text-lg font-bold text-gray-900">{{ t('officials.minister.name') }}</h3>
             <p class="text-sm text-embassy-green font-medium uppercase tracking-wide mt-1">{{ t('officials.minister.title') }}</p>
          </div>

           <!-- AMBASSADOR -->
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
             <div class="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                <img src="/ambassador.jpeg" :alt="t('officials.ambassador.name')" class="h-full w-full object-cover scale-x-[-1]" />
             </div>
             <h3 class="text-lg font-bold text-gray-900">{{ t('officials.ambassador.name') }}</h3>
             <p class="text-sm text-embassy-green font-medium uppercase tracking-wide mt-1">{{ t('officials.ambassador.title') }}</p>
          </div>
      </div>

       <!-- INTRO TEXT -->
       <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="prose prose-lg text-gray-600">
             <h2 class="text-3xl font-bold text-gray-900 mb-6 font-display">{{ t('home.title') }}</h2>
             <p class="font-medium text-gray-900 mb-4 text-xl">{{ t('home.greeting') }}</p>
             <p>{{ t('home.paragraph1') }}</p>
             <p>{{ t('home.paragraph2') }}</p>
             <p class="font-semibold text-embassy-green mt-6">{{ t('home.closing') }}</p>
             <p class="font-bold text-gray-900 italic mt-2">{{ t('home.signature') }}</p>
          </div>
          <div class="relative">
             <div class="absolute inset-0 bg-embassy-yellow transform translate-x-3 translate-y-3 rounded-2xl"></div>
             <img src="/pages/amb.png" alt="Embassy Building" class="relative rounded-2xl shadow-xl w-full object-cover h-96 bg-white" />
          </div>
       </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
