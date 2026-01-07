<template>
  <section class="w-full py-14 bg-slate-50">
    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">
      {{ lang === 'fr' ? 'Découvrir le Sénégal' : 'Discover Senegal' }}
    </h2>

    <!-- Language Switch -->
    <div class="flex justify-center mb-6">
      <button
        class="px-4 py-2 mx-1 rounded-lg border text-sm font-medium"
        :class="lang === 'en' ? 'bg-green-600 text-white' : 'bg-white'"
        @click="lang = 'en'"
      >
        EN
      </button>
      <button
        class="px-4 py-2 mx-1 rounded-lg border text-sm font-medium"
        :class="lang === 'fr' ? 'bg-green-600 text-white' : 'bg-white'"
        @click="lang = 'fr'"
      >
        FR
      </button>
    </div>

    <!-- Swiper -->
    <Swiper
      :modules="modules"
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :coverflowEffect="{
        rotate: 35,
        stretch: 0,
        depth: 180,
        modifier: 1,
        slideShadows: true
      }"
      :pagination="{ clickable: true }"
      class="max-w-6xl mx-auto"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        class="w-[260px] sm:w-[300px] md:w-[340px]"
      >
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden
                 transition-transform duration-300 hover:scale-105"
        >
          <img
            :src="slide.image"
            class="w-full h-60 object-cover"
            alt=""
          />

          <div class="p-4 text-center">
            <h3 class="font-semibold text-lg">
              {{ slide.title[lang] }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ slide.subtitle[lang] }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const modules = [EffectCoverflow, Pagination, Autoplay]

const lang = ref('en')

const slides = [
  {
    title: { en: 'Dakar', fr: 'Dakar' },
    subtitle: {
      en: 'Capital city of Senegal',
      fr: 'Capitale du Sénégal'
    },
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364'
  },
  {
    title: { en: 'Gorée Island', fr: 'Île de Gorée' },
    subtitle: {
      en: 'UNESCO World Heritage site',
      fr: 'Site classé au patrimoine mondial de l’UNESCO'
    },
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7'
  },
  {
    title: { en: 'Pink Lake', fr: 'Lac Rose' },
    subtitle: {
      en: 'Unique natural wonder',
      fr: 'Merveille naturelle unique'
    },
    image: 'https://images.unsplash.com/photo-1602503875133-9d90d30f4c9d'
  },
  {
    title: { en: 'Casamance', fr: 'Casamance' },
    subtitle: {
      en: 'Nature and culture',
      fr: 'Nature et culture'
    },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
  }
]
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>
