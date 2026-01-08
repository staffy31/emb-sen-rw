<template>
  <!-- ================= INFO / NEWS PAGE ================= -->
  <section class="bg-white rounded-xl shadow-md p-6">

    <!-- PAGE TITLE -->
    <h2 class="text-2xl font-bold text-embassy mb-6">
      {{ t('home.news.title') }}
    </h2>

    <!-- NEWS GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- NEWS CARD -->
      <article
        v-for="(item, index) in newsItems"
        :key="index"
        class="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white">

        <!-- IMAGE -->
        <img
          :src="item.image"
          class="w-full h-48 object-contain bg-gray-50 cursor-pointer"
          @click="openModal(item)"
        />

        <!-- CONTENT -->
        <div class="p-4 space-y-2">

          <p class="text-xs uppercase font-semibold text-gray-500">
            {{ item.category.join(', ') }}
          </p>

          <h3 class="font-bold text-sm leading-snug">
            {{ item.title }}
          </h3>

          <p class="text-xs text-gray-600">
            {{ item.date }}
          </p>

          <button
            class="mt-2 text-sm font-semibold text-embassy hover:underline"
            @click="openModal(item)">
            {{ t('home.news.viewMore') }}
          </button>

        </div>
      </article>

    </div>

    <!-- ================= MODAL ================= -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div class="bg-white w-full max-w-3xl rounded-xl shadow-lg relative">

        <!-- CLOSE -->
        <button
          class="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
          @click="showModal = false">
          ✕
        </button>

        <!-- IMAGE -->
        <div class="bg-gray-50 p-4">
          <img
            :src="selectedNews.image"
            class="max-h-[70vh] mx-auto object-contain"
          />
        </div>

        <!-- TEXT -->
        <div class="p-6">
          <p class="text-xs uppercase font-semibold text-gray-500">
            {{ selectedNews.category?.join(' · ') }}
          </p>

          <h3 class="text-xl font-bold text-embassy mt-2">
            {{ selectedNews.title }}
          </h3>

          <p class="text-sm text-gray-700 mt-3">
            {{ selectedNews.description }}
          </p>

          <!-- DOWNLOAD -->
          <a
            v-if="selectedNews.file"
            :href="selectedNews.file"
            download
            class="inline-flex mt-4 bg-embassy text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90">
            ⬇ {{ t('home.news.download') }}
          </a>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const showModal = ref(false)
const selectedNews = ref<any>({})

const newsItems = computed(() => {
  const items = tm('home.news.items');
  return Array.isArray(items) ? items : []; 
})

function openModal(item: any) {
  selectedNews.value = item
  showModal.value = true
}
</script>
