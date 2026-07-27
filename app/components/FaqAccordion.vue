<script setup lang="ts">import { HugeiconsIcon } from '@hugeicons/vue'; import { Add01Icon } from '@hugeicons/core-free-icons'; import type { Faq } from '~/types/content'; defineProps<{items:Faq[]}>(); const active=ref<number|null>(0)</script>
<template>
  <div class="divide-y divide-forest/20 border-y border-forest/20">
    <div v-for="(item,i) in items" :key="item.question">
      <h3 class="font-sans text-base"><button class="flex min-h-16 w-full items-center justify-between py-4 text-left font-semibold" :aria-expanded="active===i" @click="active=active===i?null:i">{{ item.question }}<HugeiconsIcon :icon="Add01Icon" :size="20" :stroke-width="1.8" class="shrink-0 transition" :class="active===i && 'rotate-45'" aria-hidden="true" /></button></h3>
      <div v-show="active===i" class="prose-copy pb-6 pr-10">{{ item.answer }}</div>
    </div>
  </div>
</template>
