<template>
  <!-- Embassy.vue -->
  <section class="w-full bg-slate-50/90">

    <!-- ================= 3D COVERFLOW SLIDER ================= -->
    <div class="py-14 overflow-hidden">
            <h3 class="text-2xl font-bold text-center mb-6">
        {{ t('bilateral.title') }}
      </h3>

      <Swiper
        :modules="modules"
        effect="coverflow"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :speed="800"
        :coverflowEffect="{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true
        }"
        :pagination="{ clickable: true }"
        class="coverflow-swiper"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="coverflow-slide"
        >
          <div class="coverflow-card">
            <img :src="slide.image" class="coverflow-img" :alt="t(slide.title)" />
            <div class="coverflow-info">
              <h3 class="coverflow-title">
                {{ t(slide.title) }}
              </h3>
              <p v-if="slide.subtitle" class="coverflow-subtitle">
                {{ t(slide.subtitle) }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


      <p
        v-for="(p, i) in t('bilateral.paragraphs', {}, { returnObjects: true })"
        :key="i"
        class="text-gray-700 leading-relaxed mb-4 text-justify"
      >
        {{ p }}
      </p>
    </div>

    <!-- ================= BILATERAL RELATIONS ================= -->
    <div class="max-w-5xl mx-auto px-6 py-14 bg-white rounded-xl shadow-sm">

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

const slides = [
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/bilateral.jpg'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/both_president1.jpg'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/both_president2.jpg'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/both_president3.jpeg'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/both_president4.jpg'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/both_president5.webp'
  },
  {
    title: 'bilateral.title',
    subtitle: '',
    image: '/pages/SIGNING_BASA.jpeg'
  }
]
</script>

<style>
/* ─── Swiper Container ─── */
.coverflow-swiper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 60px; /* extra bottom padding for pagination dots + shadows */
}

/* ─── Each Slide Wrapper ─── */
.coverflow-slide {
  width: 320px !important;
  max-width: 320px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ─── Card Shell ─── */
.coverflow-card {
  width: 100%;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.coverflow-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 14px 36px rgba(0, 0, 0, 0.18),
    0 4px 10px rgba(0, 0, 0, 0.1);
}

/* ─── Image ─── */
.coverflow-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.coverflow-card:hover .coverflow-img {
  transform: scale(1.05);
}

/* ─── Text Block ─── */
.coverflow-info {
  padding: 18px 16px;
  text-align: center;
}

.coverflow-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.coverflow-subtitle {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 4px;
}

/* ─── Pagination Dots ─── */
.coverflow-swiper .swiper-pagination {
  bottom: 12px;
}

.coverflow-swiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  opacity: 1;
  transition: background 0.3s, transform 0.3s;
}

.coverflow-swiper .swiper-pagination-bullet-active {
  background: #16a34a; /* green-600 – matches your timeline accent */
  transform: scale(1.3);
}

/* ─── Responsive ─── */
@media (max-width: 640px) {
  .coverflow-slide {
    width: 280px !important;
    max-width: 280px !important;
  }

  .coverflow-img {
    height: 160px;
  }

  .coverflow-swiper {
    padding: 30px 0 50px;
  }
}
</style>
