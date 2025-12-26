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
            <div class="mx-auto w-[180px] h-[240px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
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

          <!-- HOME CONTENT GRID -->
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

            <!-- ================= TEXT ================= -->
            <div class="space-y-4">

              <h2 class="text-2xl font-bold text-embassy">
                {{ t('home.title') }}
              </h2>

              <p class="font-semibold">
                {{ t('home.greeting') }}
              </p>

              <p>
                {{ t('home.paragraph1') }}
              </p>

              <p>
                {{ t('home.paragraph2') }}
              </p>

              <p>
                {{ t('home.paragraph3') }}
              </p>

              <p>
                {{ t('home.paragraph4') }}
              </p>

              <p class="font-semibold">
                {{ t('home.closing') }}
              </p>

              <p class="italic font-bold text-embassy">
                {{ t('home.signature') }}
              </p>

            </div>

            <!-- ================= IMAGE ================= -->
            <div class="flex justify-center lg:justify-end">

              <img src="/pages/amb.png" alt="Ambassade du Sénégal à Kigali"
                class="w-full max-w-[300px] rounded-lg shadow-md object-contain" />

            </div>

          </div>

        </main>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
