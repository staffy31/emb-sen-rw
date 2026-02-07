<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">{{ $t('general_presentation.title') }}</h2>
      
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h3 class="text-3xl font-bold mb-6 text-green-700">{{ $t('general_presentation.about_title') }}</h3>
        <p class="text-lg mb-8 text-gray-700">
          {{ $t('general_presentation.intro') }}
        </p>

        <h4 class="text-2xl font-semibold mb-4 text-gray-800">{{ $t('general_presentation.general_info') }}</h4>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="space-y-3">
            <p><strong class="text-gray-800">{{ $t('general_presentation.official_name') }}</strong> {{ $t('general_presentation.official_name_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.regime') }}</strong> {{ $t('general_presentation.regime_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.head_of_state') }}</strong> {{ $t('general_presentation.head_of_state_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.capital') }}</strong> {{ $t('general_presentation.capital_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.national_holiday') }}</strong> {{ $t('general_presentation.national_holiday_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.area') }}</strong> {{ $t('general_presentation.area_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.bordering_countries') }}</strong> {{ $t('general_presentation.bordering_countries_value') }}</p>
          </div>
          
          <div class="space-y-3">
            <p><strong class="text-gray-800">{{ $t('general_presentation.climate') }}</strong> {{ $t('general_presentation.climate_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.vegetation') }}</strong> {{ $t('general_presentation.vegetation_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.official_language') }}</strong> {{ $t('general_presentation.official_language_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.common_language') }}</strong> {{ $t('general_presentation.common_language_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.currency') }}</strong> {{ $t('general_presentation.currency_value') }}</p>
            <p><strong class="text-gray-800">{{ $t('general_presentation.population') }}</strong> {{ $t('general_presentation.population_value') }}</p>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h5 class="text-xl font-semibold mb-2 text-gray-800">{{ $t('general_presentation.flag_title') }}</h5>
            <p class="text-gray-700">{{ $t('general_presentation.flag_description') }}</p>
          </div>

          <div>
            <h5 class="text-xl font-semibold mb-2 text-gray-800">{{ $t('general_presentation.seals_title') }}</h5>
            <p class="text-gray-700">{{ $t('general_presentation.seals_description') }}</p>
          </div>

          <div>
            <h5 class="text-xl font-semibold mb-2 text-gray-800">{{ $t('general_presentation.coat_of_arms_title') }}</h5>
            <p class="text-gray-700">{{ $t('general_presentation.coat_of_arms_description') }}</p>
          </div>
        </div>
      </div>

      <!-- Visual Elements -->
      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <h5 class="text-xl font-semibold mb-4 text-gray-800">{{ $t('general_presentation.map_title') }}</h5>
          <div class="bg-gray-100 h-64 flex items-center justify-center rounded">
            <img src="/pages/Senegal-map.png" :alt="$t('general_presentation.map_title')" class="max-h-full max-w-full object-contain" />
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <h5 class="text-xl font-semibold mb-4 text-gray-800">{{ $t('general_presentation.flag_image_title') }}</h5>
          <div class="bg-gray-100 h-64 flex items-center justify-center rounded">
            <img src="/pages/senegal-flag.png" :alt="$t('general_presentation.flag_image_title')" class="max-h-full max-w-full object-contain" />
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <h5 class="text-xl font-semibold mb-4 text-gray-800">{{ $t('general_presentation.emblem_title') }}</h5>
          <div class="bg-gray-100 h-64 flex items-center justify-center rounded">
            <img src="/pages/senegal-emblem.png" :alt="$t('general_presentation.emblem_title')" class="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
