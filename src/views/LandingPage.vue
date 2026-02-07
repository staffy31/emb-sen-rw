<template>
  <div>
    <Hero />
    
    <div class="relative bg-white z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
        <GeneralPresentation id="presentation" />
        <Embassy id="embassy" />
        <Ambassador id="ambassador" />
        <Juridiction id="juridiction" />
        <Mission id="mission" />
        <Service id="service" />
        <Consular id="consular" />
        <Senegal id="senegal" />
        <Gallery id="gallery" />
        <Info id="news" />
        <FAQ id="faq" />
        <Contact id="contact" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import GeneralPresentation from '@/components/GeneralPresentation.vue'
import Embassy from '@/components/Embassy.vue'
import Ambassador from '@/components/Ambassador.vue'
import Juridiction from '@/components/Juridiction.vue'
import Mission from '@/components/Mission.vue'
import Service from '@/components/Service.vue'
// import Consular from '@/components/Consular.vue'
// import Senegal from '@/components/Senegal.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'
import Info from '@/components/Info.vue'
import FAQ from '@/components/FAQ.vue'
</script>
