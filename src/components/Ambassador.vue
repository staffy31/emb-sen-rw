<template>
  <section class="w-full bg-white py-14">
    <div class="max-w-6xl mx-auto px-6">
      <h3 class="text-2xl font-bold text-center mb-10">
        {{ t('ambassador_profile.title') }}
      </h3>

      <div class="bg-slate-50/90 rounded-2xl p-8 shadow-lg border border-slate-200/50">
        <div class="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <!-- Ambassador Image -->
          <div class="flex justify-center">
            <div class="rounded-xl overflow-hidden shadow-md border-4 border-green-600">
              <img 
                src="/hero/sem_doudou_sow.png" 
                :alt="t('ambassador_profile.name')"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- Biography Text -->
          <div class="text-slate-700 leading-relaxed space-y-4">
            <h4 class="text-xl font-semibold text-green-700 mb-4">
              {{ t('ambassador_profile.name') }}
            </h4>
            <p v-for="(paragraph, index) in tm('ambassador_profile.biography')" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
