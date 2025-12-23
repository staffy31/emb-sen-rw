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
       px-10 py-7 mx-2
       border-b-[3px] border-embassy bg-white
       max-md:grid-cols-1 max-md:gap-5">


    <!-- Rwanda -->
    <div class="text-center ml-3 shadow-md">
      <img src="/rwanda.png" class="h-[170px] mx-auto mb-1" /><br>
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.rwanda') }}
      </span>
    </div>

    <!-- CENTER TITLE BLOCK -->
    <div class="text-center">

      <!-- REPUBLIC -->
      <h1 class="text-[22px] font-bold">
        {{ t('republic') }}
      </h1>

      <!-- MOTTO -->
      <div class="flex justify-center gap-8 mb-4 text-[13px] font-semibold text-gray-600">
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
      <h1 class="text-[22px] font-bold">
        {{ t('hero_title') }}
      </h1>
      <p class="text-[15px] text-gray-600 mt-[6px] mb-[14px]">
        {{ t('hero_subtitle') }}
      </p>

      <!-- TOP BAR -->
      <div class="grid grid-cols-[1fr_auto_1fr] items-center text-[13px] mt-[10px]
               max-md:grid-cols-1 max-md:gap-2 max-md:text-center">

        <!-- LEFT -->
        <div class="text-left max-md:text-center">
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
            ? 'bg-embassy text-white border border-embassy px-2 py-1 text-xs font-semibold'
            : 'border px-2 py-1 text-xs font-semibold'">
            FR
          </button>
          <button @click="switchLang('en')" :class="locale === 'en'
            ? 'bg-embassy text-white border border-embassy px-2 py-1 text-xs font-semibold ml-1'
            : 'border px-2 py-1 text-xs font-semibold ml-1'">
            EN
          </button>
        </div>

        <!-- RIGHT -->
        <div class="text-right max-md:text-center space-x-3 font-semibold text-embassy">
          <a href="#">Fb</a>
          <a href="#">X</a>
          <a href="#">In</a>
        </div>

      </div>
    </div>

    <!-- Senegal -->
    <div class="text-center">
      <img src="/senegal.png" class="h-[170px] mx-auto mb-1" /><br>
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.senegal') }}
      </span>
    </div>

  </header>

  <!-- HERO -->
  <HeroSplit />

  <!-- SERVICES -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-10 py-12">
    <div v-for="key in ['consular', 'visa', 'passport', 'appointment']" :key="key" class="p-[30px] text-center font-semibold border rounded-lg bg-white
             hover:shadow-xl hover:-translate-y-[2px] transition">
      {{ t(`services.${key}`) }}
    </div>
  </section>

  <!-- AMBASSADOR -->
  <section class="bg-gray-50 px-10 py-12">
    <h2 class="text-lg font-bold mb-3">
      {{ t('ambassador_title') }}
    </h2>
    <p class="text-gray-700 max-w-3xl">
      {{ t('ambassador_message') }}
    </p>
  </section>
</template>
