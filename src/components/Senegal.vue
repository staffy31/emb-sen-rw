<template>
  <section class="py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center mb-16">
        <h2 class="text-base text-embassy-green font-semibold tracking-wide uppercase">{{ t('countries.senegal') }}</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Terre de la Teranga
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Découvrez les opportunités d'investissement, le tourisme et la richesse culturelle du Sénégal.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        
        <!-- Invest -->
        <div class="w-full md:w-80 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div class="h-48 overflow-hidden">
                <img src="/rwanda.png" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Invest in Senegal" />
                <!-- Replacing with generic image as placeholder since I don't have dedicated assets yet -->
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('senegal.invest') }}</h3>
                <p class="text-gray-600 text-sm mb-4">Un environnement des affaires stable et attractif pour vos projets.</p>
                <a href="#" class="text-embassy-green font-semibold hover:text-embassy-yellow transition-colors flex items-center">
                    En savoir plus <span class="ml-2">→</span>
                </a>
            </div>
        </div>

        <!-- Visit -->
         <div class="w-full md:w-80 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div class="h-48 overflow-hidden">
                <img src="/senegal.png" class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" alt="Visit Senegal" />
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('senegal.visit') }}</h3>
                <p class="text-gray-600 text-sm mb-4">Des paysages époustouflants, de Goree à la Casamance.</p>
                <a href="#" class="text-embassy-green font-semibold hover:text-embassy-yellow transition-colors flex items-center">
                    En savoir plus <span class="ml-2">→</span>
                </a>
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