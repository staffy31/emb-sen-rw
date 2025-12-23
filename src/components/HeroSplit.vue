<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const images = [
  // '/hero/Ngor-island-in-Dakar-Senegal-1600x900.webp',
  // '/hero/senegal-tech.jpg',
  // '/hero/senegal-football.jpg',
  // '/hero/Fort-dEstrees-Goree-Island-Senegal-coast.webp',
  '/hero/senegal-rwanda.jpg'
];

const current = ref(0);

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % images.length;
  }, 4500);
});
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]"
  >

    <!-- LEFT: TEXT -->
    <div
      class="flex flex-col justify-center px-10 md:px-16 py-12"
    >
      <h2 class="text-2xl md:text-3xl font-semibold mb-5">
        {{ t('hero_section.title') }}
      </h2>

      <p
        class="text-lg leading-relaxed max-w-xl mb-8 text-gray-700"
      >
        {{ t('hero_section.description') }}
      </p>

      <div class="flex gap-4">
        <button
          class="bg-embassy text-white px-5 py-3 font-semibold hover:opacity-90 transition"
        >
          {{ t('hero_section.services') }}
        </button>

        <button
          class="border border-embassy text-embassy px-5 py-3 font-semibold hover:bg-embassy hover:text-white transition"
        >
          {{ t('hero_section.contact') }}
        </button>
      </div>
    </div>

    <!-- RIGHT: IMAGE SLIDER -->
    <div class="w-full h-full">
      <img
        :src="images[current]"
        alt="Senegal and Rwanda cooperation"
        class="w-full h-full object-cover"
      />
    </div>

  </section>

  <!-- TAILWIND TEST (REMOVE LATER) -->
  <div class="bg-embassy text-white p-4 text-center">
    Tailwind is ACTIVE
  </div>
</template>
