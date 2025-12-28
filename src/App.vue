<template>
  <div class="min-h-screen bg-linear-to-r from-green-300 via-yellow-200 to-red-300">
    <Navbar />
    <Hero />
    <Embassy />
    <Consular />
    <Senegal />
    <Gallery />
    <Contact />
    <footer class="bg-gray-800 text-white py-4 h-[400px]">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Embassy of Senegal in Rwanda. All rights reserved.</p>
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
