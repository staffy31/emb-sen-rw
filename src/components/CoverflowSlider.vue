<template>
  <div class="w-full py-12 bg-slate-50">
    <h2 class="text-2xl font-bold text-center mb-8">
      3D Coverflow Slider
    </h2>

    <Swiper
      :modules="modules"
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      :coverflowEffect="{
        rotate: 30,
        stretch: 0,
        depth: 150,
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
                 hover:scale-105 transition duration-300"
        >
          <img
            :src="slide.image"
            class="w-full h-60 object-cover"
            alt=""
          />
          <div class="p-4 text-center">
            <h3 class="font-semibold text-lg">
              {{ slide.title }}
            </h3>
            <p class="text-sm text-gray-600">
              {{ slide.subtitle }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const modules = [EffectCoverflow, Pagination]

const slides = [
  {
    title: 'Dakar',
    subtitle: 'Capital of Senegal',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364'
  },
  {
    title: 'Gorée Island',
    subtitle: 'Historical place',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7'
  },
  {
    title: 'Lac Rose',
    subtitle: 'Pink Lake',
    image: 'https://images.unsplash.com/photo-1602503875133-9d90d30f4c9d'
  },
  {
    title: 'Casamance',
    subtitle: 'Nature & culture',
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
