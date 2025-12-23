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
    class="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]"
  >

    <!-- LEFT: TEXT (CSS-equivalent) -->
    <div
      class="flex flex-col justify-center
             p-[60px]
             max-md:p-[40px]"
    >
      <h2
        class="text-[28px] font-semibold mb-[18px]"
      >
        {{ t('hero_section.title') }}
      </h2>

      <p
        class="text-[18px] leading-[1.6] max-w-[520px] mb-[30px] text-gray-700"
      >
        {{ t('hero_section.description') }}
      </p>

      <div class="flex gap-[14px]">
        <button
          class="bg-embassy text-white px-[18px] py-[12px]
                 font-semibold cursor-pointer
                 hover:opacity-90 transition"
        >
          {{ t('hero_section.services') }}
        </button>

        <button
          class="border border-embassy text-embassy
                 px-[18px] py-[12px]
                 font-semibold cursor-pointer
                 hover:bg-embassy hover:text-white transition"
        >
          {{ t('hero_section.contact') }}
        </button>
      </div>
    </div>

    <!-- RIGHT: IMAGE SLIDER (CSS-equivalent) -->
    <div class="w-full h-full">
      <img
        :src="images[current]"
        alt="Senegal and Rwanda cooperation"
        class="w-full h-full object-cover"
      />
    </div>

  </section>
</template>
