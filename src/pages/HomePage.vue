<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

    <!-- TEXT -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-embassy">
        {{ t('home.title') }}
      </h2>

      <p class="font-semibold">
        {{ t('home.greeting') }}
      </p>

      <p>{{ t('home.paragraph1') }}</p>
      <p>{{ t('home.paragraph2') }}</p>
      <p>{{ t('home.paragraph3') }}</p>
      <p>{{ t('home.paragraph4') }}</p>

      <p class="font-semibold">
        {{ t('home.closing') }}
      </p>

      <p class="italic font-bold text-embassy">
        {{ t('home.signature') }}
      </p>
    </div>

    <!-- IMAGE -->
    <div class="flex justify-center lg:justify-end">
      <img
        src="/pages/amb.png"
        alt="Ambassade du Sénégal à Kigali"
        class="w-full max-w-[300px] rounded-lg shadow-md object-contain" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
