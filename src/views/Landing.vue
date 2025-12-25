<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

function switchLang(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <div class="w-full px-4 sm:px-6 lg:px-8">
    <div class="mx-auto">
      <!-- Content -->
    </div>
  </div>
</template>

