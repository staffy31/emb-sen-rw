<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
    <Navbar />
    
    <main class="flex-grow">
      <router-view />
    </main>

    <footer class="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div class="container mx-auto px-4 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
           <div>
              <h4 class="font-bold text-lg mb-4 text-embassy-yellow">Ambassade du Sénégal</h4>
              <p class="text-sm text-gray-400">Kigali, Rwanda</p>
           </div>
           <div>
              <h4 class="font-bold text-lg mb-4 text-embassy-yellow">Contact</h4>
              <p class="text-sm text-gray-400">Email: contact@ambasen-kigali.com</p>
           </div>
           <div>
              <h4 class="font-bold text-lg mb-4 text-embassy-yellow">Liens Utiles</h4>
              <p class="text-sm text-gray-400">Gouvernement du Sénégal</p>
           </div>
        </div>
        <div class="border-t border-slate-800 pt-8">
          <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Embassy of Senegal in Rwanda. All rights reserved.</p>
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
import Consular from './components/Consular.vue';
import Senegal from './components/Senegal.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Embassy,
    Consular,
    Senegal,
    Gallery,
    Contact
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
