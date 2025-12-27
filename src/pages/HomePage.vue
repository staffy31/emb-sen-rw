<template>
  <div class="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 items-start">

    <!-- ================= TEXT (70%) ================= -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-embassy">
        {{ t('home.title') }}
      </h2>

      <p class="font-semibold">
        {{ t('home.greeting') }}
      </p>

      <p>{{ t('home.paragraph1') }}</p>
      <p>{{ t('home.paragraph2') }}</p>
      <p>{{ t('home.paragraph3') }}</p>
      <p>{{ t('home.paragraph4') }}</p>

      <p class="font-semibold">
        {{ t('home.closing') }}
      </p>

      <p class="italic font-bold text-embassy">
        {{ t('home.signature') }}
      </p>
    </div>

    <!-- ================= NEWS / INFO (30%) ================= -->
    <aside
      class="bg-white rounded-xl shadow-md p-4 border-l-4 border-embassy">

      <h3 class="text-lg font-bold text-embassy mb-3">
        {{ t('home.newsTitle') }}
      </h3>

      <ul class="space-y-3 text-sm">
        <li class="border-b pb-2">
          <p class="font-semibold">
            {{ t('home.news1.title') }}
          </p>
          <p class="text-gray-600">
            {{ t('home.news1.date') }}
          </p>
        </li>

        <li class="border-b pb-2">
          <p class="font-semibold">
            {{ t('home.news2.title') }}
          </p>
          <p class="text-gray-600">
            {{ t('home.news2.date') }}
          </p>
        </li>

        <li>
          <p class="font-semibold">
            {{ t('home.news3.title') }}
          </p>
          <p class="text-gray-600">
            {{ t('home.news3.date') }}
          </p>
        </li>
      </ul>

      <button
        class="mt-4 w-full text-sm font-semibold text-embassy hover:underline">
        {{ t('home.viewAllNews') }}
      </button>

    </aside>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
