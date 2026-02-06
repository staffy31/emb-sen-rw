<template>
  <section class="w-full py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
          {{ $t('faq.badge') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ $t('faq.title') }}</h2>
      </div>

      <div class="max-w-4xl mx-auto space-y-4">
        <div 
          v-for="(item, index) in $tm('faq.items')" 
          :key="index"
          class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
        >
          <button
            @click="toggle(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 rounded-xl transition-colors"
          >
            <span class="font-semibold text-gray-900 pr-4">{{ item.question }}</span>
            <svg 
              :class="['w-6 h-6 text-green-600 transition-transform duration-300 flex-shrink-0', { 'rotate-180': activeIndex === index }]"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-5 text-gray-700 leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>

      <div class="mt-12 text-center bg-green-600 text-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
        <h3 class="text-2xl font-bold mb-3">{{ $t('faq.contact_title') }}</h3>
        <p class="mb-6">{{ $t('faq.contact_text') }}</p>
        <a 
          href="#contact" 
          class="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
        >
          {{ $t('faq.contact_btn') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
