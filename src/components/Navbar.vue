<template>
  <header
    class="grid grid-cols-[auto_1fr_auto] items-center
           px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-7 mx-1
           border-b-[3px] border-green-400 bg-sky-50/60
           rounded-b-lg shadow-sm
           max-lg:grid-cols-1 max-lg:gap-4 max-lg:text-center">

    <!-- ================= MOBILE MENU BUTTON ================= -->
    <div class="lg:hidden flex justify-start z-30">
      <button
        type="button"
        class="p-2 rounded-lg bg-blue-800/60 hover:bg-blue-700/60 transition"
        @click="isMenuOpen = !isMenuOpen">

        <div class="relative w-6 h-6">
          <span
            :class="[
              'absolute left-0 h-0.5 w-6 bg-blue-100 transition-all',
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            ]" />
          <span
            :class="[
              'absolute left-0 h-0.5 w-6 bg-blue-100 transition-all',
              isMenuOpen ? 'opacity-0' : 'top-3'
            ]" />
          <span
            :class="[
              'absolute left-0 h-0.5 w-6 bg-blue-100 transition-all',
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            ]" />
        </div>
      </button>
    </div>

    <!-- ================= RWANDA ================= -->
    <div class="text-center p-2">
      <img src="/rwanda.png"
           class="h-[120px] sm:h-[140px] md:h-[170px] mx-auto mb-1 object-contain" />
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.rwanda') }}
      </span>
    </div>

    <!-- ================= CENTER ================= -->
    <div class="text-center px-2 sm:px-4">

      <!-- ================= DESKTOP MENU ================= -->
      <nav class="hidden lg:flex justify-center shadow-md
                  mb-4 p-4 border-b border-gray-200 rounded-2xl">
        <ul class="flex space-x-6 font-semibold text-gray-700">

          <li>
            <a href="#" class="hover:text-embassy">
              {{ t('menu.home') }}
            </a>
          </li>

          <!-- AMBASSADE -->
          <li class="relative group">
            <button class="flex items-center gap-1 hover:text-embassy">
              {{ t('menu.embassy') }} ▾
            </button>
            <ul class="absolute left-0 top-full mt-2 w-64
                       bg-white shadow-lg rounded-lg py-2
                       opacity-0 invisible group-hover:opacity-100
                       group-hover:visible transition-all">
              <li v-for="item in embassyMenu" :key="item.key">
                <a :href="item.href"
                   class="block px-4 py-2 hover:bg-gray-100">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <!-- CONSULAR -->
          <li class="relative group">
            <button class="flex items-center gap-1 hover:text-embassy">
              {{ t('menu.consular') }} ▾
            </button>
            <ul class="absolute left-0 top-full mt-2 w-56
                       bg-white shadow-lg rounded-lg py-2
                       opacity-0 invisible group-hover:opacity-100
                       group-hover:visible transition-all">
              <li v-for="item in consularMenu" :key="item.key">
                <a :href="item.href"
                   class="block px-4 py-2 hover:bg-gray-100">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <!-- SENEGAL -->
          <li class="relative group">
            <button class="flex items-center gap-1 hover:text-embassy">
              {{ t('menu.senegal') }} ▾
            </button>
            <ul class="absolute left-0 top-full mt-2 w-64
                       bg-white shadow-lg rounded-lg py-2
                       opacity-0 invisible group-hover:opacity-100
                       group-hover:visible transition-all">
              <li v-for="item in senegalMenu" :key="item.key">
                <a :href="item.href"
                   class="block px-4 py-2 hover:bg-gray-100">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" class="hover:text-embassy">
              {{ t('menu.contact') }}
            </a>
          </li>

        </ul>
      </nav>

      <!-- TITLES -->
      <h1 class="text-lg sm:text-xl md:text-[22px] font-bold">
        {{ t('republic') }}
      </h1>

      <div class="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8
                  mb-4 text-xs sm:text-[13px] font-semibold text-gray-600">
        <span>{{ t('motto.people') }}</span>•
        <span>{{ t('motto.goal') }}</span>•
        <span>{{ t('motto.faith') }}</span>
      </div>

      <h1 class="text-lg sm:text-xl md:text-[22px] font-bold">
        {{ t('hero_title') }}
      </h1>

      <p class="text-sm sm:text-[15px] text-gray-600 mt-1 mb-3 px-2">
        {{ t('hero_subtitle') }}
      </p>

      <!-- LANGUAGE -->
      <div class="flex justify-center gap-2">
        <button @click="switchLang('fr')" :class="langBtn('fr')">FR</button>
        <button @click="switchLang('en')" :class="langBtn('en')">EN</button>
      </div>
    </div>

    <!-- ================= SENEGAL ================= -->
    <div class="text-center p-2">
      <img src="/senegal.png"
           class="h-[120px] sm:h-[140px] md:h-[170px] mx-auto mb-1 object-contain" />
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-700">
        {{ t('countries.senegal') }}
      </span>
    </div>

    <!-- ================= MOBILE MENU OVERLAY ================= -->
    <transition name="fade">
      <div v-if="isMenuOpen"
           class="fixed inset-0 bg-black/70 z-20 flex items-center justify-center lg:hidden">
        <ul class="bg-white rounded-xl shadow-xl p-6 space-y-4 w-[90%] max-w-md text-left">

          <li>
            <a href="#" @click="closeMenu" class="font-semibold">
              {{ t('menu.home') }}
            </a>
          </li>

          <!-- MOBILE ACCORDIONS -->
          <li>
            <button @click="toggle('embassy')" class="font-semibold w-full text-left">
              {{ t('menu.embassy') }}
            </button>
            <ul v-if="open.embassy" class="ml-4 mt-2 space-y-2 text-sm">
              <li v-for="item in embassyMenu" :key="item.key">
                <a :href="item.href" @click="closeMenu">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <button @click="toggle('consular')" class="font-semibold w-full text-left">
              {{ t('menu.consular') }}
            </button>
            <ul v-if="open.consular" class="ml-4 mt-2 space-y-2 text-sm">
              <li v-for="item in consularMenu" :key="item.key">
                <a :href="item.href" @click="closeMenu">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <button @click="toggle('senegal')" class="font-semibold w-full text-left">
              {{ t('menu.senegal') }}
            </button>
            <ul v-if="open.senegal" class="ml-4 mt-2 space-y-2 text-sm">
              <li v-for="item in senegalMenu" :key="item.key">
                <a :href="item.href" @click="closeMenu">
                  {{ t(item.label) }}
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" @click="closeMenu" class="font-semibold">
              {{ t('menu.contact') }}
            </a>
          </li>

        </ul>
      </div>
    </transition>

  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)

const open = ref({
  embassy: false,
  consular: false,
  senegal: false,
})

function toggle(section: keyof typeof open.value) {
  open.value[section] = !open.value[section]
}

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
  { key: 'presentation', label: 'senegal.presentation', href: '#presentation' },
  { key: 'visit', label: 'senegal.visit', href: '#visit' },
  { key: 'invest', label: 'senegal.invest', href: '#invest' },
  { key: 'tourism', label: 'senegal.tourism', href: '#tourism' },
]

function switchLang(lang: string) {
  locale.value = lang
}

function langBtn(lang: string) {
  return locale.value === lang
    ? 'bg-embassy text-white px-2 py-1 rounded text-xs font-semibold'
    : 'border px-2 py-1 rounded text-xs font-semibold hover:bg-gray-50'
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
