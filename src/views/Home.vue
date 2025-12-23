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
  <header class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center
           px-6 md:px-10 py-6 border-b-4 border-embassy bg-white gap-6">

    <!-- Rwanda -->
    <div class="text-center">
      <img src="/rwanda.png" alt="Rwanda Coat of Arms" class="h-16 mx-auto mb-1" />
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.rwanda') }}
      </span>
    </div>

    <!-- CENTER TITLE BLOCK -->
    <div class="text-center">

      <!-- REPUBLIC NAME -->
      <div class="uppercase text-sm font-bold tracking-widest mb-1">
        {{ t('republic') }}
      </div>

      <!-- NATIONAL MOTTO -->
      <div class="flex justify-center gap-6 mb-3 text-sm font-semibold text-gray-600">
        <span class="relative pb-1 after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-2/3 after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.people') }}
        </span>
        <span class="relative pb-1 after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-2/3 after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.goal') }}
        </span>
        <span class="relative pb-1 after:absolute after:left-1/2 after:-translate-x-1/2
                     after:bottom-0 after:w-2/3 after:h-[2px]
                     after:bg-gradient-to-r after:from-transparent after:via-embassy after:to-transparent">
          {{ t('motto.faith') }}
        </span>
      </div>

      <!-- EMBASSY NAME -->
      <h1 class="text-xl font-bold">
        {{ t('hero_title') }}
      </h1>
      <p class="text-sm text-gray-600 mt-1 mb-3">
        {{ t('hero_subtitle') }}
      </p>

      <!-- TOP INFO BAR -->
      <div class="grid grid-cols-1 md:grid-cols-3 items-center text-sm mt-2 gap-2">

        <!-- LEFT -->
        <div class="md:text-left text-center">
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
            ? 'bg-embassy text-white px-2 py-1 text-xs font-semibold'
            : 'border px-2 py-1 text-xs font-semibold'">
            FR
          </button>
          <button @click="switchLang('en')" :class="locale === 'en'
            ? 'bg-embassy text-white px-2 py-1 text-xs font-semibold ml-1'
            : 'border px-2 py-1 text-xs font-semibold ml-1'">
            EN
          </button>
        </div>

        <!-- RIGHT -->
        <div class="md:text-right text-center space-x-3 font-semibold text-embassy">
          <a href="#" aria-label="Facebook">Fb</a>
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="LinkedIn">In</a>
        </div>

      </div>
    </div>

    <!-- Senegal -->
    <div class="text-center">
      <img src="/senegal.png" alt="Senegal Coat of Arms" class="h-16 mx-auto mb-1" />
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.senegal') }}
      </span>
    </div>

  </header>

  <!-- ================= HERO SPLIT ================= -->
  <HeroSplit />

  <!-- ================= SERVICES ================= -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 py-12">
    <div v-for="key in ['consular', 'visa', 'passport', 'appointment']" :key="key" class="bg-white border rounded-lg p-8 text-center font-semibold
             hover:shadow-2xl hover:-translate-y-1 transition">
      {{ t(`services.${key}`) }}
    </div>
  </section>

  <!-- ================= AMBASSADOR ================= -->
  <section class="bg-gray-50 px-6 md:px-10 py-12">
    <h2 class="text-lg font-bold mb-3">
      {{ t('ambassador_title') }}
    </h2>
    <p class="text-gray-700 max-w-3xl">
      {{ t('ambassador_message') }}
    </p>
  </section>

  <!-- TAILWIND TEST (REMOVE LATER) -->
  <div class="bg-embassy text-white p-4 text-center">
    Tailwind is ACTIVE
  </div>
</template>
