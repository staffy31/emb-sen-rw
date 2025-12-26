<template>
  <div class="space-y-6">

    <h1 class="text-2xl md:text-3xl font-bold text-embassy">
      {{ t('contact.title') }}
    </h1>

    <p>
      {{ t('contact.intro') }}
    </p>

    <div class="space-y-2 text-gray-700">
      <p><strong>Email :</strong> contact@ambasenegal-rwanda.sn</p>
      <p><strong>Téléphone :</strong> +250 XXX XXX XXX</p>
      <p><strong>Adresse :</strong> Kigali, Rwanda</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
