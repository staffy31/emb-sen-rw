<template>
  <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">{{ $t('missions.badge') }}</span>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">{{ $t('missions.title') }}</h2>
          <div class="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div class="mb-12" data-aos="fade-up">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            <p class="text-lg text-gray-700 leading-relaxed text-center">
              {{ $t('missions.intro') }} <span class="font-semibold text-green-700">{{ $t('missions.pillars.representation') }}</span>, de <span class="font-semibold text-green-700">{{ $t('missions.pillars.protection') }}</span>, de <span class="font-semibold text-green-700">{{ $t('missions.pillars.negotiation') }}</span> et d'<span class="font-semibold text-green-700">{{ $t('missions.pillars.information') }}</span>.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-right">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('missions.cards.representation.title') }}</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ $t('missions.cards.representation.description') }}
                </p>
              </div>
            </div>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-left">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('missions.cards.protection.title') }}</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ $t('missions.cards.protection.description') }}
                </p>
              </div>
            </div>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-right">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('missions.cards.consular.title') }}</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ $t('missions.cards.consular.description') }}
                </p>
              </div>
            </div>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-left">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('missions.cards.commercial.title') }}</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ $t('missions.cards.commercial.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
