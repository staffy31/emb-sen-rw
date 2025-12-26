<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      {{ t('menu.consular.items[0]') }}
    </h1>
    <ul class="list-disc ml-6 space-y-2">
      <li>{{ t('services.visa') }}</li>
      <li>{{ t('services.passport') }}</li>
      <li>{{ t('services.appointment') }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
