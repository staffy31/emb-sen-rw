<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Contact Info -->
        <div>
          <div class="mb-10">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {{ t('contact.title') }}
            </h2>
            <div class="h-1 w-20 bg-gradient-to-r from-embassy-green to-embassy-yellow rounded-full mb-6"></div>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ t('contact.description') }}
            </p>
          </div>
          
          <div class="space-y-6">
            <div class="group flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-embassy-green to-green-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ t('contact.address_title') }}</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ t('contact.address') }}<br>
                  <span class="text-sm">{{ t('contact.hours') }}</span>
                </p>
              </div>
            </div>

            <div class="group flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-embassy-green to-green-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                   <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </div>
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ t('contact.phone_title') }}</h3>
                <p class="text-gray-600">
                  {{ t('contact.phone') }}
                </p>
              </div>
            </div>

            <div class="group flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-embassy-green to-green-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ t('contact.email_title') }}</h3>
                <p class="text-gray-600">
                  {{ t('contact.email1') }}<br>
                  {{ t('contact.email2') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
           <iframe 
             width="100%" 
             height="100%" 
             frameborder="0" 
             scrolling="no" 
             marginheight="0" 
             marginwidth="0" 
             src="https://maps.google.com/maps?q=-1.9584951,30.0838374&t=&z=15&ie=UTF8&iwloc=&output=embed">
           </iframe>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>