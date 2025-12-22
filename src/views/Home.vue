<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

function switchLang(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <!-- HEADER -->
  <header class="header">
    <img src="/rwanda.png" alt="Rwanda" />
    <div class="title">
      <h1>{{ t('hero_title') }}</h1>
      <p>{{ t('hero_subtitle') }}</p>
    </div>
    <img src="/senegal.png" alt="Senegal" />

    <div class="lang">
      <button @click="switchLang('fr')">FR</button>
      <button @click="switchLang('en')">EN</button>
    </div>
  </header>

  <!-- SERVICES -->
  <section class="services">
    <div class="card">{{ t('services.consular') }}</div>
    <div class="card">{{ t('services.visa') }}</div>
    <div class="card">{{ t('services.passport') }}</div>
    <div class="card">{{ t('services.appointment') }}</div>
  </section>

  <!-- AMBASSADOR -->
  <section class="ambassador">
    <h2>{{ t('ambassador_title') }}</h2>
    <p>{{ t('ambassador_message') }}</p>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 3px solid #1f7a3a;
}
.title {
  text-align: center;
}
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
  padding: 40px;
}
.card {
  padding: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 600;
}
.ambassador {
  padding: 40px;
  background: #f9f9f9;
}
.lang button {
  margin-left: 5px;
}
</style>
