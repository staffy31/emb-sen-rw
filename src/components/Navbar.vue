<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20 py-3' : 'bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg py-5']">

    <div class="container mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- ================= LOGO ================= -->
        <div class="flex items-center gap-4">
          <div class="relative group cursor-pointer">
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500 blur-sm animate-pulse"></div>
            <div class="relative bg-white rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img src="/senegal.png" class="h-10 w-10 object-contain" alt="Coat of Arms Senegal" />
            </div>
          </div>
          <div class="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <div class="hidden lg:block">
            <h1 class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {{ t('republic') }}
            </h1>
            <p class="text-xs text-emerald-600 font-semibold tracking-wider uppercase">
              {{ t('hero_subtitle') }}
            </p>
          </div>
        </div>

        <!-- ================= DESKTOP MENU ================= -->
        <nav class="hidden lg:flex items-center space-x-2">
          <a href="#"
            class="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
            <span class="relative z-10">{{ t('menu.home') }}</span>
            <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
          </a>

          <!-- AMBASSADE -->
          <div class="relative group">
            <button
              class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
              <span class="relative z-10">{{ t('menu.ambassade.title') }}</span>
              <svg class="w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
            </button>
            <div class="absolute left-0 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div class="p-2">
                  <a v-for="item in embassyMenu" :key="item.key" :href="item.href"
                    class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 group/item">
                    <span class="group-hover/item:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- CONSULAR -->
          <div class="relative group">
            <button
              class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
              <span class="relative z-10">{{ t('menu.consular.title') }}</span>
              <svg class="w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
            </button>
            <div class="absolute left-0 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div class="p-2">
                  <a v-for="item in consularMenu" :key="item.key" :href="item.href"
                    class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 group/item">
                    <span class="group-hover/item:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- INFOS -->
          <a href="#news"
            class="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
            <span class="relative z-10">{{ t('menu.infos') }}</span>
            <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
          </a>

          <!-- SENEGAL -->
          <div class="relative group">
            <button
              class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
              <span class="relative z-10">{{ t('menu.senegal.title') }}</span>
              <svg class="w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
            </button>
            <div class="absolute left-0 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div class="p-2">
                  <a v-for="item in senegalMenu" :key="item.key" :href="item.href"
                    class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 group/item">
                    <span class="group-hover/item:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#gallery"
            class="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
            <span class="relative z-10">{{ t('menu.gallery') }}</span>
            <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
          </a>

          <a href="#contact"
            class="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
            <span class="relative z-10">{{ t('menu.contact') }}</span>
            <div class="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
          </a>
        </nav>

        <!-- ================= RIGHT ACTIONS ================= -->
        <div class="flex items-center gap-4">
          <!-- LANGUAGE -->
          <div class="relative bg-white/20 backdrop-blur-sm rounded-2xl p-1 border border-white/30">
            <button @click="switchLang('fr')"
              class="relative px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 overflow-hidden"
              :class="locale === 'fr' ? 'text-white' : 'text-gray-600 hover:text-gray-900'">
              <div v-if="locale === 'fr'" class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl"></div>
              <span class="relative z-10">FR</span>
            </button>
            <button @click="switchLang('en')"
              class="relative px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 overflow-hidden"
              :class="locale === 'en' ? 'text-white' : 'text-gray-600 hover:text-gray-900'">
              <div v-if="locale === 'en'" class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl"></div>
              <span class="relative z-10">EN</span>
            </button>
          </div>

          <!-- SOCIAL MEDIA -->
          <div class="hidden lg:flex items-center gap-2">
            <a href="https://x.com/ambasenkigali?s=11" target="_blank" rel="noopener noreferrer"
               class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-emerald-500 hover:border-emerald-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <svg class="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100069971797160" target="_blank" rel="noopener noreferrer"
               class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-emerald-500 hover:border-emerald-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <svg class="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          <!-- MOBILE MENU BUTTON -->
          <button @click="isMenuOpen = !isMenuOpen"
            class="lg:hidden relative p-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 hover:text-emerald-600 transition-all duration-300 group">
            <div class="absolute inset-0 bg-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <svg class="relative z-10 h-5 w-5 transition-all duration-300" v-if="!isMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="relative z-10 h-5 w-5 transition-all duration-300" v-else fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


      </div>
    </div>

    <!-- ================= MOBILE MENU OVERLAY ================= -->
    <transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0 scale-95" enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform -translate-y-4 opacity-0 scale-95">
      <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
        <div class="px-6 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
          <a href="#" @click="closeMenu"
            class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 group">
            <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t('menu.home') }}</span>
          </a>

          <div class="border-t border-gray-100/50 my-4 pt-4">
            <div class="px-4 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{{ t('menu.ambassade.title') }}</div>
            <div class="space-y-1">
              <a v-for="item in embassyMenu" :key="item.key" :href="item.href" @click="closeMenu"
                class="flex items-center pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 group">
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
              </a>
            </div>
          </div>

          <div class="border-t border-gray-100/50 my-4 pt-4">
            <div class="px-4 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{{ t('menu.consular.title') }}</div>
            <div class="space-y-1">
              <a v-for="item in consularMenu" :key="item.key" :href="item.href" @click="closeMenu"
                class="flex items-center pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 group">
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
              </a>
            </div>
          </div>

          <a href="#news" @click="closeMenu"
            class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 group">
            <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t('menu.infos') }}</span>
          </a>

          <div class="border-t border-gray-100/50 my-4 pt-4">
            <div class="px-4 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{{ t('menu.senegal.title') }}</div>
            <div class="space-y-1">
              <a v-for="item in senegalMenu" :key="item.key" :href="item.href" @click="closeMenu"
                class="flex items-center pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 group">
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t(item.label) }}</span>
              </a>
            </div>
          </div>

          <a href="#gallery" @click="closeMenu"
            class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 group">
            <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t('menu.gallery') }}</span>
          </a>
          <a href="#contact" @click="closeMenu"
            class="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 group">
            <span class="group-hover:translate-x-1 transition-transform duration-200">{{ t('menu.contact') }}</span>
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
  { key: 'coop', label: 'bilateral.title', href: '#embassy' },
  { key: 'ambassador', label: 'officials.ambassador.title', href: '#ambassador' },
  { key: 'jurisdiction', label: 'menu.ambassade.items.2', href: '#juridiction' },
  { key: 'missions', label: 'menu.ambassade.items.3', href: '#mission' },
]

const consularMenu = [
  { key: 'services', label: 'menu.consular.items.0', href: '#service' },
  { key: 'faq', label: 'menu.consular.items.1', href: '#faq' },
]

const senegalMenu = [
  { key: 'presentation', label: 'menu.senegal.items.0', href: '#presentation' },
  { key: 'visit', label: 'menu.senegal.items.1', href: '#senegal' },
  { key: 'invest', label: 'menu.senegal.items.2', href: '#senegal' },
  { key: 'tourism', label: 'menu.senegal.items.3', href: '#senegal' },
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
