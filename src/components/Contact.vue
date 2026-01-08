<template>
  <section class="py-16 bg-gray-50 border-t border-gray-200" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8">
            {{ t('menu.contact') }}
          </h2>
          <p class="text-lg text-gray-500 mb-8">
            Pour toute demande d'information ou assistance consulaire, n'hésitez pas à nous contacter. Nos équipes sont à votre disposition.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-embassy-green text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Adresse</h3>
                <p class="mt-1 text-gray-500">
                  KG 7 Ave, Kigali, Rwanda<br>
                  (Immeuble à proximité de...)
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-embassy-green text-white">
                   <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Téléphone</h3>
                <p class="mt-1 text-gray-500">
                  +250 788 123 456
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-embassy-green text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Email</h3>
                <p class="mt-1 text-gray-500">
                  contact@ambasen-kigali.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Placeholder -->
        <div class="h-96 w-full bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
           <iframe 
             width="100%" 
             height="100%" 
             frameborder="0" 
             scrolling="no" 
             marginheight="0" 
             marginwidth="0" 
             src="https://maps.google.com/maps?q=Kigali%2C%20Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
             style="filter: grayscale(1) contrast(1.2) opacity(0.8);">
           </iframe>
           <div class="absolute inset-0 pointer-events-none border-2 border-white/20 rounded-xl"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>