<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import HeroSplit from '@/components/HeroSplit.vue';

const { t, locale } = useI18n();

function switchLang(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <!-- ================= HEADER ================= -->
<header class="grid grid-cols-[auto_1fr_auto] items-center
       px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-7 mx-2
       border-b-[3px] border-embassy bg-white rounded-lg shadow-sm
       max-lg:grid-cols-1 max-lg:gap-4 max-lg:text-center">


    <!-- Rwanda -->
    <div class="text-center shadow-md rounded-lg p-2">
      <img src="/rwanda.png" class="h-[120px] sm:h-[140px] md:h-[170px] mx-auto mb-1" /><br>
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.rwanda') }}
      </span>
    </div>

    <!-- CENTER TITLE BLOCK -->
    <div class="text-center px-2 sm:px-4">

      <!-- REPUBLIC -->
      <h1 class="text-lg sm:text-xl md:text-[22px] font-bold">
        {{ t('republic') }}
      </h1>

      <!-- MOTTO -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 mb-4 text-xs sm:text-[13px] font-semibold text-gray-600">
        <span class="relative pb-[6px] after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-[65%] after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.people') }}
        </span>-
        <span class="relative pb-[6px] after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-[65%] after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.goal') }}
        </span>-
        <span class="relative pb-[6px] after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-[65%] after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.faith') }}
        </span>
      </div>

      <!-- EMBASSY NAME -->
      <h1 class="text-lg sm:text-xl md:text-[22px] font-bold">
        {{ t('hero_title') }}
      </h1>
      <p class="text-sm sm:text-[15px] text-gray-600 mt-[6px] mb-[14px] px-2">
        {{ t('hero_subtitle') }}
      </p>

      <!-- TOP BAR -->
      <div class="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-2 text-xs sm:text-[13px] mt-[10px]">

        <!-- LEFT -->
        <div class="text-center sm:text-left">
          <a href="#contact" class="font-medium text-gray-700">
            {{ t('topbar.contact') }}
          </a>
          <span class="mx-2 text-gray-400">|</span>
          <a href="#emergency" class="font-medium text-gray-700">
            {{ t('topbar.emergency') }}
          </a>
        </div>

        <!-- CENTER -->
        <div class="text-center">
          <button @click="switchLang('fr')" :class="locale === 'fr'
            ? 'bg-embassy text-white border border-embassy px-2 py-1 text-xs font-semibold rounded'
            : 'border px-2 py-1 text-xs font-semibold rounded hover:bg-gray-50'">
            FR
          </button>
          <button @click="switchLang('en')" :class="locale === 'en'
            ? 'bg-embassy text-white border border-embassy px-2 py-1 text-xs font-semibold ml-1 rounded'
            : 'border px-2 py-1 text-xs font-semibold ml-1 rounded hover:bg-gray-50'">
            EN
          </button>
        </div>

        <!-- RIGHT -->
        <div class="text-center sm:text-right space-x-3 font-semibold text-embassy">
          <a href="#" class="hover:text-embassy/80 transition-colors">Fb</a>
          <a href="#" class="hover:text-embassy/80 transition-colors">X</a>
          <a href="#" class="hover:text-embassy/80 transition-colors">In</a>
        </div>

      </div>
    </div>

    <!-- Senegal -->
    <div class="text-center shadow-md rounded-lg p-2">
      <img src="/senegal.png" class="h-[120px] sm:h-[140px] md:h-[170px] mx-auto mb-1" /><br>
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.senegal') }}
      </span>
    </div>

  </header>

  <!-- HERO -->
  <HeroSplit />

  <!-- SERVICES -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
    <div v-for="key in ['consular', 'visa', 'passport', 'appointment']" :key="key" 
         class="p-6 sm:p-[30px] text-center font-semibold border rounded-lg bg-white
                hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300
                text-sm sm:text-base">
      {{ t(`services.${key}`) }}
    </div>
  </section>

  <!-- AMBASSADOR -->
  <section class="bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 mx-2 rounded-lg shadow-sm">
    <h2 class="text-base sm:text-lg font-bold mb-3">
      {{ t('ambassador_title') }}
    </h2>
    <p class="text-gray-700 max-w-3xl text-sm sm:text-base leading-relaxed">
      {{ t('ambassador_message') }}
    </p>
  </section>
</template>
