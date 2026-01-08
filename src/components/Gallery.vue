<template>
  <section class="py-12 bg-gray-50 mb-10" id="gallery">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">{{ t('menu.gallery') }}</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" class="w-full h-full object-cover" />
        </div>
        <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
            <img src="https://images.unsplash.com/photo-1599423300746-b62533397364?w=600" class="w-full h-full object-cover" />
        </div>
        <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
            <img src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600" class="w-full h-full object-cover" />
        </div>
        <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
             <div class="w-full h-full bg-embassy-green/10 flex items-center justify-center text-embassy-green font-medium">
                 + Voir plus
             </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>