<template>
  <!-- Embassy.vue -->
  <section class="w-full bg-slate-50/90">

    <!-- ================= SLIDER ================= -->
    <div class="py-14">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">
        {{ t('hero_section.title') }}
      </h2>

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
                {{ t(slide.title) }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ t(slide.subtitle) }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- ================= BILATERAL RELATIONS ================= -->
    <div class="max-w-5xl mx-auto px-6 py-14 bg-white rounded-xl shadow-sm">
      <h3 class="text-2xl font-bold text-center mb-6">
        {{ t('bilateral.title') }}
      </h3>

      <p
        v-for="(p, i) in t('bilateral.paragraphs', {}, { returnObjects: true })"
        :key="i"
        class="text-gray-700 leading-relaxed mb-4 text-justify"
      >
        {{ p }}
      </p>
    </div>

    <!-- ================= TIMELINE ================= -->
    <div class="py-14">
      <h3 class="text-2xl font-bold text-center mb-10">
        {{ t('timeline.title') }}
      </h3>

      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div
          v-for="(item, i) in t('timeline.items', {}, { returnObjects: true })"
          :key="i"
          class="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-green-600"
        >
          <div class="text-green-700 font-bold text-lg mb-2">
            {{ item.date }}
          </div>
          <p class="text-gray-600 text-sm">
            {{ item.event }}
          </p>
        </div>
      </div>
    </div>

    <!-- ================= EMBASSY HOURS ================= -->
    <div class="max-w-4xl mx-auto px-6 py-10 text-center bg-white rounded-xl shadow-sm mb-10">
      <h4 class="font-semibold text-lg mb-2">
        {{ t('embassy.hours.title') }}
      </h4>
      <p class="text-gray-700">
        {{ t('embassy.hours.value') }}
      </p>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const { t } = useI18n()

const modules = [EffectCoverflow, Pagination, Autoplay]

/**
 * Slides now reference i18n KEYS, not raw text
 */
const slides = [
  {
    title: 'senegal.pages.0.content.1',
    subtitle: 'hero_section.description',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364'
  },
  {
    title: 'menu.senegal.items.0',
    subtitle: 'menu.senegal.items.1',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7'
  },
  {
    title: 'menu.senegal.items.2',
    subtitle: 'menu.senegal.items.3',
    image: 'https://images.unsplash.com/photo-1602503875133-9d90d30f4c9d'
  },
  {
    title: 'countries.senegal',
    subtitle: 'countries.rwanda',
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
