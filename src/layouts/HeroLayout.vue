<template>
  <div class="min-h-screen bg-gray-50/0">

    <div class="max-w-full mx-auto px-4 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-[20%_79%] gap-6">

        <!-- ================= LEFT SIDEBAR ================= -->
        <aside
          class="bg-gray-50/70 rounded-xl shadow-md p-4
                 lg:sticky lg:top-6 h-fit space-y-6">

          <!-- PRESIDENT -->
          <div class="text-center">
            <div class="mx-auto w-[180px] h-[240px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
              <img src="/president.jpg"
                   :alt="t('officials.president.name')"
                   class="w-full h-full object-cover" />
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
              <img src="/minister.png"
                   :alt="t('officials.minister.name')"
                   class="w-full h-full object-cover" />
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
              <img src="/ambassador.jpeg"
                   :alt="t('officials.ambassador.name')"
                   class="w-full h-full object-cover
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

        <!-- ================= RIGHT CONTENT ================= -->
        <main class="bg-white rounded-xl shadow-md p-6">
          <!-- 🔑 THIS IS WHERE PAGES SWITCH -->
          <router-view />
        </main>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
