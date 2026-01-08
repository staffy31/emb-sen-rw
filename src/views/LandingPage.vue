<template>
  <div>
    <Hero />
    
    <div class="relative bg-white z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
        <Embassy id="embassy" />
        <Consular id="consular" />
        <Senegal id="senegal" />
        <Gallery id="gallery" />
        <InfoPage id="news" />
        <Contact id="contact" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Embassy from '@/components/Embassy.vue'
import Consular from '@/components/Consular.vue'
import Senegal from '@/components/Senegal.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'
import InfoPage from '@/pages/InfoPage.vue'
</script>
