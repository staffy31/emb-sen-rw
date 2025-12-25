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
  <!-- ================= HERO SECTION ================= -->
  <section
    class="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] mx-2 my-4 rounded-lg overflow-hidden shadow-lg bg-white"
  >

    <!-- LEFT: TEXT (CSS-equivalent) -->
    <div
      class="flex flex-col justify-center
             p-6 sm:p-10 md:p-12 lg:p-[60px]
             order-2 lg:order-1"
    >
      <h2
        class="text-xl sm:text-2xl md:text-[28px] font-semibold mb-4 sm:mb-[18px] leading-tight"
      >
        {{ t('hero_section.title') }}
      </h2>

      <p
        class="text-base sm:text-lg md:text-[18px] leading-[1.6] max-w-[520px] mb-6 sm:mb-[30px] text-gray-700"
      >
        {{ t('hero_section.description') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-[14px]">
        <button
          class="bg-embassy text-white px-4 sm:px-[18px] py-3 sm:py-[12px]
                 font-semibold cursor-pointer rounded
                 hover:opacity-90 transition-all duration-300
                 text-sm sm:text-base"
        >
          {{ t('hero_section.services') }}
        </button>

        <button
          class="border border-embassy text-embassy
                 px-4 sm:px-[18px] py-3 sm:py-[12px]
                 font-semibold cursor-pointer rounded
                 hover:bg-embassy hover:text-white transition-all duration-300
                 text-sm sm:text-base"
        >
          {{ t('hero_section.contact') }}
        </button>
      </div>
    </div>

    <!-- RIGHT: IMAGE SLIDER (CSS-equivalent) -->
    <div class="w-full h-[300px] sm:h-[400px] lg:h-full order-1 lg:order-2">
      <img
        :src="images[current]"
        alt="Senegal and Rwanda cooperation"
        class="w-full h-full object-cover"
      />
    </div>

  </section>
</template>
