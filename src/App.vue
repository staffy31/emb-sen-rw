<template>
  <div class="min-h-screen bg-linear-to-r from-green-300 via-yellow-200 to-red-300">
    <Navbar />
    <Hero />
  </div>
</template>

<script lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import {ref, nextTick, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
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
