<template>
  <section
    class="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white">

    <!-- ================= IMAGE (ONLY IF EXISTS) ================= -->
    <img
      v-if="item.image"
      :src="item.image"
      class="w-full h-48 object-contain bg-gray-50 cursor-pointer"
      @click="emitView"
    />

    <!-- ================= TEXT PREVIEW (NO IMAGE – 450 WORDS) ================= -->
    <div
      v-else
      class="p-4 bg-gray-50 text-sm text-gray-700 leading-relaxed">

      <p>
        {{ previewText }}
        <span v-if="hasMoreText" class="font-semibold">…</span>
      </p>
    </div>

    <!-- ================= CONTENT ================= -->
    <div class="p-4 space-y-2">

      <div class="flex items-center gap-2 flex-wrap">
        <!-- Categories -->
        <p class="text-xs uppercase font-semibold text-gray-500">
          {{ item.category?.join(', ') }}
        </p>

        <!-- PINNED BADGE (i18n) -->
        <span
          v-if="item.pinned"
          class="text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full font-bold">
          {{ t('home.news.badges.pinned') }}
        </span>

        <!-- NEW BADGE (i18n) -->
        <span
          v-if="isNew"
          class="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">
          {{ t('home.news.badges.new') }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-bold text-sm leading-snug">
        {{ item.title }}
      </h3>

      <!-- Date -->
      <p class="text-xs text-gray-600">
        {{ item.date }}
      </p>

      <!-- View more -->
      <button
        class="text-sm font-semibold text-embassy hover:underline"
        @click="emitView">
        {{ viewMore }}
      </button>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/* ================= i18n ================= */
const { t } = useI18n()

/* ================= PROPS ================= */
const props = defineProps<{
  item: {
    title: string
    description: string
    date: string
    category: string[]
    image?: string
    file?: string
    pinned?: boolean
  }
  viewMore: string
}>()

/* ================= EMITS ================= */
const emit = defineEmits<{
  (e: 'view', item: any): void
}>()

const emitView = () => {
  emit('view', props.item)
}

/* ================= 450-WORD PREVIEW (NO IMAGE) ================= */
const WORD_LIMIT = 450

const previewText = computed(() => {
  if (!props.item.description) return ''
  const words = props.item.description.split(/\s+/)
  return words.slice(0, WORD_LIMIT).join(' ')
})

const hasMoreText = computed(() => {
  if (!props.item.description) return false
  return props.item.description.split(/\s+/).length > WORD_LIMIT
})

/* ================= NEW BADGE LOGIC ================= */
const isNew = computed(() => {
  const parsed = Date.parse(props.item.date)
  if (isNaN(parsed)) return false

  const diffDays =
    (Date.now() - parsed) / (1000 * 60 * 60 * 24)

  return diffDays <= 14
})
</script>
