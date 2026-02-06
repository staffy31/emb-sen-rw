<template>
  <section class="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
          Services Consulaires
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ $t('service.title') }}</h2>
      </div>
      
      <!-- Intro Section -->
      <div class="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <p class="mb-6 text-gray-700 text-lg leading-relaxed">
          {{ $t('service.intro') }}
        </p>
        
        <p class="mb-4 text-gray-900 font-semibold text-lg">{{ $t('service.services_title') }}</p>
        <ul class="grid md:grid-cols-2 gap-3 mb-8">
          <li v-for="(service, index) in $tm('service.services_list')" :key="index" class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700">{{ service }}</span>
          </li>
        </ul>
        
        <div class="border-t pt-6">
          <p class="mb-4 text-gray-700">
            {{ $t('service.contact_text') }}
          </p>
          <p class="font-semibold text-gray-900 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            {{ $t('service.invitation_text') }}
          </p>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 max-w-[1920px] mx-auto">
        <div 
          v-for="(card, index) in $tm('service.cards')" 
          :key="index"
          class="group"
        >
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-500 flex flex-col h-[600px]">
            <!-- Card Header -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 p-4">
              <h3 class="text-xl font-bold text-white text-center">{{ card }}</h3>
            </div>
            
            <!-- Card Content -->
            <div class="p-4 flex-1 overflow-hidden flex flex-col">
              <div v-if="index === 0" class="text-sm text-gray-700 space-y-3 flex-1 flex flex-col">
                <div class="flex-1 overflow-hidden">
                  <div class="bg-blue-50 p-3 rounded-lg mb-3">
                    <p class="font-semibold text-blue-900 text-xs">{{ $t('service.visa.conditions') }}</p>
                  </div>
                  <p class="font-semibold text-gray-900 text-xs mb-2">{{ $t('service.visa.how_to') }}</p>
                  <p class="text-gray-700 text-xs mb-2">{{ $t('service.visa.present_with') }}</p>
                  <ol class="list-decimal pl-4 space-y-1 text-[10px] text-gray-600">
                    <li v-for="(doc, i) in $tm('service.visa.documents').slice(0, 8)" :key="i" class="leading-relaxed">{{ doc }}</li>
                  </ol>
                </div>
                <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md hover:shadow-lg text-sm mt-auto">
                  {{ $t('service.visa.more_btn') }}
                </button>
              </div>
              
              <div v-else-if="index === 1" class="text-sm text-gray-700 space-y-3 flex-1 flex flex-col">
                <div class="flex-1 overflow-hidden">
                  <p class="text-gray-700 leading-relaxed text-xs mb-3">{{ $t('service.consular_card.intro') }}</p>
                  <p class="font-semibold text-gray-900 text-xs mb-2">{{ $t('service.consular_card.documents_title') }}</p>
                  <ol class="list-decimal pl-4 space-y-1 text-[10px] text-gray-600 mb-3">
                    <li v-for="(doc, i) in $tm('service.consular_card.documents')" :key="i" class="leading-relaxed">{{ doc }}</li>
                  </ol>
                  <div class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
                    <p class="font-semibold text-amber-900 mb-1 text-xs">{{ $t('service.consular_card.note_title') }}</p>
                    <ul class="space-y-1 text-[10px] text-amber-800">
                      <li v-for="(note, i) in $tm('service.consular_card.notes')" :key="i" class="flex items-start gap-1">
                        <span class="text-amber-600">►</span>
                        <span>{{ note }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div v-else-if="index === 2" class="text-sm text-gray-700 space-y-3 flex-1 flex flex-col">
                <div class="flex-1 overflow-hidden">
                  <p class="text-gray-700 leading-relaxed text-xs mb-3">{{ $t('service.civil_status.intro') }}</p>
                  <div class="bg-purple-50 p-3 rounded-lg">
                    <p class="font-semibold text-purple-900 mb-2 text-xs">{{ $t('service.civil_status.birth.title') }}</p>
                    <ol class="list-decimal pl-3 space-y-1 text-[10px] text-purple-800">
                      <li v-for="(doc, i) in $tm('service.civil_status.birth.documents')" :key="i" class="leading-relaxed">{{ doc }}</li>
                    </ol>
                  </div>
                </div>
                <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md hover:shadow-lg text-sm mt-auto">
                  {{ $t('service.civil_status.more_btn') }}
                </button>
              </div>
              
              <div v-else-if="index === 3" class="text-sm text-gray-700 space-y-3 flex-1 flex flex-col">
                <div class="flex-1 overflow-hidden">
                  <div class="bg-indigo-50 p-3 rounded-lg">
                    <p class="font-semibold text-indigo-900 mb-2 text-xs">{{ $t('service.other_services.safe_conduct.title') }}</p>
                    <p class="text-[10px] text-indigo-800 mb-2">{{ $t('service.other_services.safe_conduct.intro') }}</p>
                    <p class="font-semibold text-indigo-900 text-[10px] mb-1">{{ $t('service.other_services.safe_conduct.documents_title') }}</p>
                    <ol class="list-decimal pl-3 space-y-1 text-[10px] text-indigo-800">
                      <li v-for="(doc, i) in $tm('service.other_services.safe_conduct.documents')" :key="i" class="leading-relaxed">{{ doc }}</li>
                    </ol>
                  </div>
                </div>
                <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md hover:shadow-lg text-sm mt-auto">
                  {{ $t('service.other_services.more_btn') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download Section -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-bold text-white text-center mb-8">Documents Officiels</h3>
          <div class="flex flex-col md:flex-row justify-center gap-4">
            <button class="px-8 py-4 bg-white text-green-700 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{{ $t('service.download_btn1') }}</span>
            </button>
            <button class="px-8 py-4 bg-white text-green-700 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{{ $t('service.download_btn2') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
