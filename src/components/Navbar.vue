<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 dark:border-gray-800"
    :class="[isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4']">
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- ================= LOGO ================= -->
        <div class="flex items-center gap-3">
            <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-embassy-green to-embassy-yellow rounded-full opacity-75 group-hover:opacity-100 transition duration-200 blur-sm"></div>
                <img src="/rwanda.png" class="relative h-12 w-auto object-contain bg-white rounded-full p-0.5" alt="Coat of Arms Rwanda" />
            </div>
            <div class="hidden md:block w-px h-10 bg-gray-200 mx-2"></div>
            <div class="relative group hidden md:block">
                <img src="/senegal.png" class="h-12 w-auto object-contain" alt="Coat of Arms Senegal" />
            </div>
            <div class="hidden lg:block ml-3">
                <h1 class="text-lg font-bold text-gray-900 leading-tight">
                    {{ t('republic') }}
                </h1>
                <p class="text-xs text-embassy-green font-medium tracking-wide">
                     {{ t('hero_subtitle') }}
                </p>
            </div>
        </div>

        <!-- ================= DESKTOP MENU ================= -->
        <nav class="hidden lg:flex items-center space-x-1">
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
            {{ t('menu.home') }}
          </a>

          <!-- AMBASSADE -->
          <div class="relative group">
            <button class="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
              {{ t('menu.ambassade.title') }}
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
               <div class="rounded-lg shadow-lg ring-1 ring-black/5 bg-white overflow-hidden">
                  <div class="py-1" role="menu" aria-orientation="vertical">
                      <a v-for="item in embassyMenu" :key="item.key" :href="item.href"
                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-embassy-green transition-colors">
                        {{ t(item.label) }}
                      </a>
                  </div>
               </div>
            </div>
          </div>

          <!-- CONSULAR -->
          <div class="relative group">
            <button class="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
              {{ t('menu.consular.title') }}
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
               <div class="rounded-lg shadow-lg ring-1 ring-black/5 bg-white overflow-hidden">
                  <div class="py-1">
                    <a v-for="item in consularMenu" :key="item.key" :href="item.href"
                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-embassy-green transition-colors">
                      {{ t(item.label) }}
                    </a>
                  </div>
               </div>
            </div>
          </div>

          <!-- SENEGAL -->
          <div class="relative group">
             <button class="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
              {{ t('menu.senegal.title') }}
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
               <div class="rounded-lg shadow-lg ring-1 ring-black/5 bg-white overflow-hidden">
                  <div class="py-1">
                    <a v-for="item in senegalMenu" :key="item.key" :href="item.href"
                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-embassy-green transition-colors">
                      {{ t(item.label) }}
                    </a>
                  </div>
               </div>
            </div>
          </div>
          
           <a href="#gallery" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
              {{ t('menu.gallery') }}
            </a>
            
             <a href="#contact" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50 transition-colors">
              {{ t('menu.contact') }}
            </a>

        </nav>

        <!-- ================= RIGHT ACTIONS ================= -->
        <div class="flex items-center gap-3">
             <!-- LANGUAGE -->
            <div class="flex items-center bg-gray-100 rounded-full p-1">
                <button @click="switchLang('fr')" 
                    class="px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200"
                    :class="locale === 'fr' ? 'bg-white text-embassy-green shadow-sm' : 'text-gray-500 hover:text-gray-900'">
                    FR
                </button>
                <button @click="switchLang('en')" 
                    class="px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200"
                    :class="locale === 'en' ? 'bg-white text-embassy-green shadow-sm' : 'text-gray-500 hover:text-gray-900'">
                    EN
                </button>
            </div>

             <!-- MOBILE MENU BUTTON -->
             <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 rounded-md text-gray-600 hover:text-embassy-green hover:bg-gray-100 focus:outline-none">
                <svg class="h-6 w-6" v-if="!isMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="h-6 w-6" v-else fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
        </div>


      </div>
    </div>

    <!-- ================= MOBILE MENU OVERLAY ================= -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-b border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
        <div class="px-4 pt-2 pb-6 space-y-1">
             <a href="#" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50">
               {{ t('menu.home') }}
             </a>

             <div class="border-t border-gray-100 my-2 pt-2">
                 <div class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{{ t('menu.ambassade.title') }}</div>
                 <a v-for="item in embassyMenu" :key="item.key" :href="item.href" @click="closeMenu" class="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-embassy-green">
                     {{ t(item.label) }}
                 </a>
             </div>

             <div class="border-t border-gray-100 my-2 pt-2">
                 <div class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{{ t('menu.consular.title') }}</div>
                 <a v-for="item in consularMenu" :key="item.key" :href="item.href" @click="closeMenu" class="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-embassy-green">
                     {{ t(item.label) }}
                 </a>
             </div>
             
             <a href="#gallery" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50">
               {{ t('menu.gallery') }}
             </a>
             <a href="#contact" @click="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-embassy-green hover:bg-green-50">
               {{ t('menu.contact') }}
             </a>
        </div>
      </div>
    </transition>

  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const open = ref({
  embassy: false,
  consular: false,
  senegal: false,
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

function closeMenu() {
  isMenuOpen.value = false
  open.value.embassy = false
  open.value.consular = false
  open.value.senegal = false
}

const embassyMenu = [
  { key: 'coop', label: 'embassy.cooperation', href: '#cooperation' },
  { key: 'ambassador', label: 'embassy.ambassador', href: '#ambassador' },
  { key: 'jurisdiction', label: 'embassy.jurisdiction', href: '#jurisdiction' },
  { key: 'consuls', label: 'embassy.consuls', href: '#consuls' },
]

const consularMenu = [
  { key: 'services', label: 'consular.services', href: '#services' },
  { key: 'faq', label: 'consular.faq', href: '#faq' },
]

const senegalMenu = [
  { key: 'presentation', label: 'menu.senegal.presentation', href: '#presentation' },
  { key: 'visit', label: 'senegal.visit', href: '#visit' },
  { key: 'invest', label: 'senegal.invest', href: '#invest' },
  { key: 'tourism', label: 'senegal.tourism', href: '#tourism' },
]

function switchLang(lang: string) {
  locale.value = lang
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
