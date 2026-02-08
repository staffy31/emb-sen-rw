<template>
  <section class="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent animate-fade-in">
        {{ $t('general_presentation.title') }}
      </h2>
      
      <div class="backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl p-10 mb-12 border border-emerald-100 hover:shadow-emerald-100/50 transition-all duration-500 animate-slide-up">
        <h3 class="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {{ $t('general_presentation.about_title') }}
        </h3>
        <p class="text-xl mb-10 text-gray-700 leading-relaxed">
          {{ $t('general_presentation.intro') }}
        </p>

        <h4 class="text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-emerald-500 pl-4">
          {{ $t('general_presentation.general_info') }}
        </h4>
        
        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="space-y-4">
            <div v-for="(item, i) in leftInfo" :key="i" class="info-item group">
              <strong class="text-emerald-700 font-semibold">{{ $t(`general_presentation.${item}`) }}</strong>
              <span class="text-gray-700">{{ $t(`general_presentation.${item}_value`) }}</span>
            </div>
          </div>
          
          <div class="space-y-4">
            <div v-for="(item, i) in rightInfo" :key="i" class="info-item group">
              <strong class="text-emerald-700 font-semibold">{{ $t(`general_presentation.${item}`) }}</strong>
              <span class="text-gray-700">{{ $t(`general_presentation.${item}_value`) }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div v-for="(section, i) in sections" :key="i" 
               class="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 hover:shadow-lg transition-all duration-300">
            <h5 class="text-2xl font-semibold mb-3 text-gray-800">{{ $t(`general_presentation.${section}_title`) }}</h5>
            <p class="text-gray-700 leading-relaxed">{{ $t(`general_presentation.${section}_description`) }}</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(visual, i) in visuals" :key="i" 
             class="group bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in"
             :style="{ animationDelay: `${i * 150}ms` }">
          <h5 class="text-2xl font-semibold mb-6 text-gray-800 group-hover:text-emerald-600 transition-colors">
            {{ $t(`general_presentation.${visual.key}`) }}
          </h5>
          <div class="bg-gradient-to-br from-gray-50 to-emerald-50 h-72 flex items-center justify-center rounded-2xl overflow-hidden shadow-inner">
            <img :src="visual.src" :alt="$t(`general_presentation.${visual.key}`)" 
                 class="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const leftInfo = ['official_name', 'regime', 'head_of_state', 'capital', 'national_holiday', 'area', 'bordering_countries'];
const rightInfo = ['climate', 'vegetation', 'official_language', 'common_language', 'currency', 'population'];
const sections = ['flag', 'seals', 'coat_of_arms'];
const visuals = [
  { key: 'map_title', src: '/pages/Senegal-map.png' },
  { key: 'flag_image_title', src: '/pages/senegal-flag.png' },
  { key: 'emblem_title', src: '/pages/senegal-emblem.png' }
];
</script>

<style scoped>
.info-item {
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: all 0.3s;
}

.info-item:hover {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}
</style>
