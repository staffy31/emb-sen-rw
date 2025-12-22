<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

function switchLang(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <!-- ================= HEADER ================= -->
  <header class="header">

    <!-- Rwanda -->
    <div class="country">
      <img src="/rwanda.png" alt="Republic of Rwanda Coat of Arms" />
      <span>Republic of Rwanda</span>
    </div>

    <!-- Title -->
    <div class="title">
      <h1>{{ t('hero_title') }}</h1>
      <p>{{ t('hero_subtitle') }}</p>

      <div class="lang">
        <button
          :class="{ active: locale === 'fr' }"
          @click="switchLang('fr')"
        >
          FR
        </button>
        <button
          :class="{ active: locale === 'en' }"
          @click="switchLang('en')"
        >
          EN
        </button>
      </div>
    </div>

    <!-- Senegal -->
    <div class="country">
      <img src="/senegal.png" alt="Republic of Senegal Coat of Arms" />
      <span>Republic of Senegal</span>
    </div>

  </header>

  <!-- ================= SERVICES ================= -->
  <section class="services">
    <div class="card">{{ t('services.consular') }}</div>
    <div class="card">{{ t('services.visa') }}</div>
    <div class="card">{{ t('services.passport') }}</div>
    <div class="card">{{ t('services.appointment') }}</div>
  </section>

  <!-- ================= AMBASSADOR ================= -->
  <section class="ambassador">
    <h2>{{ t('ambassador_title') }}</h2>
    <p>{{ t('ambassador_message') }}</p>
  </section>
</template>

<style scoped>
/* ================= HEADER ================= */
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 24px 40px;
  border-bottom: 3px solid #1f7a3a;
  background: #ffffff;
}

.country {
  text-align: center;
}

.country img {
  height: 70px;
  display: block;
  margin: 0 auto 6px auto;
}

.country span {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.title {
  text-align: center;
}

.title h1 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.title p {
  font-size: 15px;
  margin: 6px 0 12px;
  color: #4b5563;
}

/* ================= LANGUAGE ================= */
.lang button {
  margin: 0 4px;
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
}

.lang button.active {
  background: #1f7a3a;
  color: #ffffff;
  border-color: #1f7a3a;
}

/* ================= SERVICES ================= */
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 50px 40px;
}

.card {
  padding: 30px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-weight: 600;
  background: #ffffff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

/* ================= AMBASSADOR ================= */
.ambassador {
  padding: 50px 40px;
  background: #f9fafb;
}

.ambassador h2 {
  margin-bottom: 12px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 900px) {
  .header {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .country img {
    height: 60px;
  }
}
</style>
