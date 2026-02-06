<template>
  <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">{{ $t('juridiction.jurisdiction_title') }}</span>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">{{ $t('juridiction.title') }}</h2>
          <div class="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-right">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('juridiction.jurisdiction_title') }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ $t('juridiction.jurisdiction_text') }}</p>
              </div>
            </div>
          </div>

          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100" data-aos="fade-left">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t('juridiction.consuls_title') }}</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span class="text-green-600 font-bold text-lg">►</span>
                    <div class="flex-1">
                      <p class="text-gray-700 text-sm leading-relaxed">
                        <span class="font-semibold">{{ $t('juridiction.tanzania') }}</span><br>
                        <a href="mailto:consulatsen.tz@gmail.com" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 mt-1">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                          consulatsen.tz@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <span class="text-blue-600 font-bold text-lg">►</span>
                    <p class="text-gray-700 text-sm leading-relaxed flex-1">
                      <span class="font-semibold">{{ $t('juridiction.other_countries') }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100" data-aos="fade-up">
          <div class="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h3 class="text-2xl font-bold text-white">{{ $t('juridiction.associations_title') }}</h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(row, index) in $tm('juridiction.table.rows')" :key="index" 
                   class="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    {{ row.jurisdiction.charAt(0) }}
                  </div>
                  <h4 class="text-xl font-bold text-gray-900">{{ row.jurisdiction }}</h4>
                </div>
                <div class="space-y-3">
                  <div>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('juridiction.table.headers.office') }}</p>
                    <p class="text-sm text-gray-700 leading-relaxed">{{ row.office }}</p>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('juridiction.table.headers.representative') }}</p>
                    <p class="text-sm font-semibold text-gray-900">{{ row.representative }}</p>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{{ $t('juridiction.table.headers.contacts') }}</p>
                    <div class="space-y-2">
                      <a :href="'tel:' + row.tel.replace('Tel: ', '')" class="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                        {{ row.tel }}
                      </a>
                      <a :href="'https://wa.me/' + row.whatsapp.replace('WhatsApp: ', '').replace(/\s/g, '')" target="_blank" class="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        {{ row.whatsapp }}
                      </a>
                    </div>
                  </div>
                </div>
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


