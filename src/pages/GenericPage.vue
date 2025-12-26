<template>
  <div class="space-y-8">

    <!-- ================= PAGE TITLE ================= -->
    <h1 class="text-2xl md:text-3xl font-bold text-embassy">
      {{ pageTitle }}
    </h1>

    <!-- ================= CONTENT GRID ================= -->
    <div
      class="grid gap-6"
      :class="images.length ? 'grid-cols-1 lg:grid-cols-[1fr_320px]' : 'grid-cols-1'">

      <!-- ================= TEXT CONTENT ================= -->
      <div class="space-y-4 text-gray-700 leading-relaxed">

        <!-- PARAGRAPHS -->
        <p v-for="(p, i) in content" :key="i">
          {{ p }}
        </p>

        <!-- BULLET LIST -->
        <ul v-if="lists.length" class="list-disc pl-6 space-y-2">
          <li v-for="(item, i) in lists" :key="i">
            {{ item }}
          </li>
        </ul>

        <!-- TABLE -->
        <div v-if="table" class="overflow-x-auto mt-6">
          <table class="min-w-full border border-gray-200 text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th
                  v-for="(head, i) in table.headers"
                  :key="i"
                  class="border px-3 py-2 text-left font-semibold text-gray-700">
                  {{ head }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, r) in table.rows"
                :key="r"
                class="border-t">
                <td
                  v-for="(cell, c) in row"
                  :key="c"
                  class="border px-3 py-2">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <!-- ================= IMAGES (OPTIONAL) ================= -->
      <div v-if="images.length" class="space-y-4">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="bg-gray-50 rounded-lg shadow-sm p-2">

          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full rounded-md object-contain" />

          <p
            v-if="img.caption"
            class="text-xs text-gray-600 mt-2 text-center">
            {{ img.caption }}
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

/**
 * Props provided by Vue Router
 * section = ambassade | consular | senegal
 * index   = page index (0,1,2...)
 */
const props = defineProps<{
  section: 'ambassade' | 'consular' | 'senegal'
  index: number
}>()

const { t } = useI18n()

/* Base translation path */
const base = `${props.section}.pages.${props.index}`

/* Page title from menu */
const pageTitle = t(`menu.${props.section}.items[${props.index}]`)

/* Page content (safe defaults) */
const content =
  (t(`${base}.content`, {}, { returnObjects: true }) as string[]) || []

const lists =
  (t(`${base}.lists`, {}, { returnObjects: true }) as string[]) || []

const table =
  (t(`${base}.table`, {}, { returnObjects: true }) as
    | { headers: string[]; rows: string[][] }
    | null) || null

const images =
  (t(`${base}.images`, {}, { returnObjects: true }) as
    | { src: string; alt: string; caption?: string }[]
    | []) || []
</script>
