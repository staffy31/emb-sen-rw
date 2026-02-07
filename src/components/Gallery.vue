<template>
  <section class="py-16 bg-gradient-to-b from-white to-gray-50 mb-10" id="gallery">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-embassy-green to-embassy-yellow bg-clip-text text-transparent">{{ t('menu.gallery') }}</h2>
      
      <!-- Gallery Title -->
      <h3 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ t(`gallery.editions.${activeTab - 1}`) }}</h3>
      
      <!-- Main Image -->
      <div class="mb-6 rounded-2xl overflow-hidden shadow-2xl relative group">
        <img
          :src="selectedImage"
          :alt="'Edition ' + activeTab"
          class="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <!-- Thumbnail Row -->
      <div class="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
        <div
          v-for="(img, index) in currentEdition.images"
          :key="index"
          @click="selectedImage = img"
          :class="[
            'aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105',
            selectedImage === img ? 'ring-4 ring-embassy-green shadow-xl scale-105' : 'hover:shadow-lg opacity-80 hover:opacity-100'
          ]"
        >
          <img :src="img" :alt="'Image ' + (index + 1)" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-3 justify-center overflow-x-auto pb-2 scrollbar-hide">
        <button
          v-for="edition in editions"
          :key="edition.id"
          @click="activeTab = edition.id"
          :class="[
            'px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-xl transform hover:-translate-y-1',
            activeTab === edition.id
              ? 'bg-gradient-to-r from-embassy-green to-green-600 text-white scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          ]"
        >
          {{ edition.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeTab = ref(1)
const selectedImage = ref('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800')

const editions = [
  { id: 1, name: '2021', images: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?w=800',
    'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800',
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800'
  ]},
  { id: 2, name: '2022', images: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800'
  ]},
  { id: 3, name: '2023', images: [
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800'
  ]},
  { id: 4, name: '2024', images: [
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800',
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800'
  ]},
  { id: 5, name: '2025', images: [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800',
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800',
    'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800',
    'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=800',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800'
  ]}
]

const currentEdition = computed(() => editions.find(e => e.id === activeTab.value) || editions[0])

// Update selected image when tab changes
const updateTab = () => {
  selectedImage.value = currentEdition.value.images[0]
}

// Watch for tab changes
import { watch } from 'vue'
watch(activeTab, updateTab)
</script>