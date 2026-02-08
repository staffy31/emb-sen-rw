<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
    <Navbar />
    
    <main class="flex-grow">
      <router-view />
    </main>

    <footer class="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
           <div>
              <h4 class="font-bold text-xl mb-4 text-embassy-yellow">Notre adresse</h4>
              <p class="text-sm text-gray-300 leading-relaxed">KG 676 Street 44<br>Kimihurura-Kigali/Rwanda</p>
              <p class="text-xs text-gray-400 mt-2">Lundi - Vendredi: 09h00 - 17h00</p>
           </div>
           <div>
              <h4 class="font-bold text-xl mb-4 text-embassy-yellow">Contact</h4>
              <p class="text-sm text-gray-300 mb-2">+250 252 507 900</p>
              <p class="text-sm text-gray-300 mb-1">ambasenkigali@diplomatie.gouv.sn</p>
              <p class="text-sm text-gray-300">info@ambasen-kigali.com</p>
           </div>
           <div>
              <h4 class="font-bold text-xl mb-4 text-embassy-yellow">Liens Utiles</h4>
              <a href="#" class="block text-sm text-gray-300 hover:text-embassy-yellow transition-colors mb-2">Gouvernement du Sénégal</a>
              <a href="#" class="block text-sm text-gray-300 hover:text-embassy-yellow transition-colors">Services Consulaires</a>
           </div>
           <div>
              <h4 class="font-bold text-xl mb-4 text-embassy-yellow">Suivez-nous</h4>
              <div class="flex space-x-4">
                <a href="https://x.com/ambasenkigali?s=11" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-embassy-green flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100069971797160" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-embassy-green flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
           </div>
        </div>
        <div class="border-t border-gray-700 pt-8 text-center">
          <p class="text-sm text-gray-400">&copy; {{ new Date().getFullYear() }} Ambassade du Sénégal au Rwanda. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import {ref, nextTick, onMounted } from 'vue';
import Embassy from './components/Embassy.vue';
import Service from './components/Service.vue';
import Consular from './components/Consular.vue';
import Senegal from './components/Senegal.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
import Ambassador from './components/Ambassador.vue';
import Juridiction from './components/Juridiction.vue';
import Mission from './components/Mission.vue';
import FAQ from './components/FAQ.vue';
import GeneralPresentation from './components/GeneralPresentation.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Embassy,
    Ambassador,
    Juridiction,
    Mission,
    Consular,
    Service,
    Senegal,
    Gallery,
    Contact,
    FAQ,
    GeneralPresentation
  },
  setup() {
    const loading = ref(true);
    onMounted(async () => {
      await nextTick();
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
      });

      return (loading);
    });
  }
}
</script>
