<template>
  <div class="min-h-screen bg-gray-50/0">

    <!-- MAIN WRAPPER -->
    <div class="max-w-full mx-auto px-4 py-6">

      <!-- GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-[20%_79%] gap-6">

        <!-- ================= LEFT SIDEBAR (20%) ================= -->
        <aside class="bg-gray-50/70 rounded-xl shadow-md p-4
                 lg:sticky lg:top-6 h-fit space-y-6">

          <!-- PRESIDENT -->
          <div class="text-center">
            <div class="mx-auto w-[180px] h-[240px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
              <img src="/president.jpg" :alt="t('officials.president.name')" class="w-full h-full object-cover" />
            </div>
            <p class="mt-3 font-semibold text-sm">
              {{ t('officials.president.name') }}
            </p>
            <p class="text-xs text-gray-600">
              {{ t('officials.president.title') }}
            </p>
          </div>

          <!-- MINISTER -->
          <div class="text-center">
            <div class="mx-auto w-[180px] h-[240px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
              <img src="/minister.png" :alt="t('officials.minister.name')" class="w-full h-full object-cover" />
            </div>
            <p class="mt-3 font-semibold text-sm">
              {{ t('officials.minister.name') }}
            </p>
            <p class="text-xs text-gray-600">
              {{ t('officials.minister.title') }}
            </p>
          </div>

          <!-- AMBASSADOR -->
          <div class="text-center">
            <div class="mx-auto w-[180px] h-[210px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
              <img src="/ambassador.jpeg" :alt="t('officials.ambassador.name')" class="w-full h-full object-cover
                       object-[50%_20%]
                       scale-x-[-1]
                       rotate-[0.5deg]" />
            </div>
            <p class="mt-3 font-semibold text-sm">
              {{ t('officials.ambassador.name') }}
            </p>
            <p class="text-xs text-gray-600">
              {{ t('officials.ambassador.title') }}
            </p>
          </div>

        </aside>

        <!-- ================= RIGHT CONTENT (80%) ================= -->
        <main class="bg-white rounded-xl shadow-md p-6">

          <div class="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 items-start">

            <!-- ================= HOME CONTENT ================= -->
            <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

              <!-- ================= TEXT ================= -->
              <section class="bg-white border border-gray-100 rounded-xl p-6">

                <!-- Title -->
                <h2 class="text-2xl font-bold text-embassy border-b pb-2 mb-6">
                  {{ t('home.title') }}
                </h2>

                <!-- Greeting -->
                <p class="font-semibold text-gray-800">
                  {{ t('home.greeting') }}
                </p>

                <!-- Content -->
                <div class="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <p>{{ t('home.paragraph1') }}</p>
                  <p>{{ t('home.paragraph2') }}</p>
                  <p>{{ t('home.paragraph3') }}</p>
                  <p>{{ t('home.paragraph4') }}</p>
                </div>

                <!-- Closing -->
                <p class="font-semibold text-gray-800 pt-2">
                  {{ t('home.closing') }}
                </p>

                <!-- Signature -->
                <p class="italic font-bold text-embassy text-right">
                  {{ t('home.signature') }}
                </p>

              </section>

              <!-- ================= IMAGE ================= -->
            <div class="mx-auto w-[280px] h-[650px] overflow-hidden rounded-lg bg-gray-50 "><br><br><br><br><br>
                <img src="/hero/sem_doudou_sow.png" alt="Ambassadeur du Sénégal au Rwanda" class="w-full max-w-[300px] rounded-xl shadow-md object-contain bg-gray-50 p-2" />
              </div>

            </div>


            <!-- ================= NEWS / INFO (30%) ================= -->
            <aside class="space-y-4 m-1.5">

              <!-- IMAGE -->
              <div class="flex justify-center lg:justify-end">
                <img src="/pages/amb.png" alt="Ambassade du Sénégal à Kigali"
                  class="w-full max-w-[300px] rounded-lg shadow-md object-contain" />
              </div>

            </aside>

          </div>
        </main>
      </div>
    </div>

    <!-- ================= MODAL ================= -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div class="bg-white w-full max-w-3xl rounded-xl shadow-lg relative">

        <button class="absolute top-3 right-4 text-xl text-gray-500 hover:text-black" @click="showModal = false">
          ✕
        </button>

        <div class="bg-gray-50 p-4">
          <img :src="selectedNews.image" class="max-h-[70vh] mx-auto object-contain" />
        </div>

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

          <a v-if="selectedNews.file" :href="selectedNews.file" download
            class="inline-flex mt-4 bg-embassy text-white px-4 py-2 rounded-lg text-sm font-semibold">
            ⬇ {{ t('home.news.download') }}
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const showModal = ref(false)
const selectedNews = ref<any>({})

const newsItems = computed(() => {
  const items = (tm('home.news.items') as any[]) || []

  return [...items].sort((a, b) => {
    // 1️⃣ pinned first
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1

    // 2️⃣ newest → oldest (NEW → OLD)
    const da = a.dateISO ? new Date(a.dateISO).getTime() : 0
    const db = b.dateISO ? new Date(b.dateISO).getTime() : 0

    return db - da
  })
})

function openModal(item: any) {
  selectedNews.value = item
  showModal.value = true
}
</script>
