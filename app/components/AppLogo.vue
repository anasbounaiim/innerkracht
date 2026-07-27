<script setup lang="ts">
import { FlowerIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'
</script>

<template>
  <NuxtLink to="/" aria-label="Innerkracht — home" class="inline-flex items-center gap-2 text-forest">
    <span class="grid size-10 place-items-center rounded-full border border-forest/30">
      <HugeiconsIcon :icon="FlowerIcon" :size="23" :stroke-width="1.6" aria-hidden="true" />
    </span>
    <span class="font-display text-2xl">innerkracht</span>
  </NuxtLink>
</template>
