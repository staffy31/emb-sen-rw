<template>
  <section class="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
          {{ t('info.title') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ t('info.subtitle') }}</h2>
      </div>

      <!-- Carousel -->
      <div class="relative max-w-[1920px] mx-auto">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div 
              v-for="(chunk, chunkIndex) in chunkedNews" 
              :key="chunkIndex"
              class="min-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <article
                v-for="(item, index) in chunk"
                :key="index"
                class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-500 overflow-hidden">
                <div v-if="item.image" class="h-48 bg-gradient-to-br from-green-50 to-gray-50 overflow-hidden">
                  <img
                    :src="item.image"
                    class="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    @click="openModal(item)" />
                </div>
                <div v-else class="h-48 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                  <svg class="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </div>
                <div class="p-6 space-y-3">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(cat, i) in item.category" :key="i" class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {{ cat }}
                    </span>
                  </div>
                  <h3 class="font-bold text-lg leading-snug text-gray-900 group-hover:text-green-600 transition-colors">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-gray-600 line-clamp-2">
                    {{ item.description }}
                  </p>
                  <div class="flex items-center justify-between pt-2 border-t">
                    <p class="text-xs text-gray-500 flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                      </svg>
                      {{ item.date }}
                    </p>
                    <button
                      class="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 group/btn"
                      @click="openModal(item)">
                      {{ t('info.viewMore') }}
                      <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <button
          v-if="currentIndex > 0"
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-green-50 hover:shadow-2xl transition-all duration-300 border-2 border-green-600 text-green-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="currentIndex < chunkedNews.length - 1"
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-green-50 hover:shadow-2xl transition-all duration-300 border-2 border-green-600 text-green-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div class="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          class="sticky top-4 float-right mr-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors"
          @click="showModal = false">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div v-if="selectedNews.image" class="bg-gradient-to-br from-green-50 to-gray-50 p-8">
          <img :src="selectedNews.image" class="max-h-[60vh] mx-auto object-contain rounded-lg shadow-lg" />
        </div>
        <div class="p-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="(cat, i) in selectedNews.category" :key="i" class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              {{ cat }}
            </span>
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            {{ selectedNews.title }}
          </h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            {{ selectedNews.description }}
          </p>
          <a
            v-if="selectedNews.file"
            :href="selectedNews.file"
            download
            class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            {{ t('info.download') }}
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
const currentIndex = ref(0)

const newsItems = computed(() => {
  const items = tm('info.items')
  if (!Array.isArray(items)) return []
  return items.sort((a: any, b: any) => {
    const dateA = new Date(a.dateISO || a.date)
    const dateB = new Date(b.dateISO || b.date)
    return dateB.getTime() - dateA.getTime()
  })
})

const chunkedNews = computed(() => {
  const chunks = []
  for (let i = 0; i < newsItems.value.length; i += 4) {
    chunks.push(newsItems.value.slice(i, i + 4))
  }
  return chunks
})

function openModal(item: any) {
  selectedNews.value = item
  showModal.value = true
}

function next() {
  if (currentIndex.value < chunkedNews.value.length - 1) {
    currentIndex.value++
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
