<script setup lang="ts">import { HugeiconsIcon } from '@hugeicons/vue'; import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'; import type { Service } from '~/types/content'; defineProps<{service:Service; index:number}>()</script>
<template>
  <article class="group border-t border-forest/20 pt-5">
    <div class="mb-5 flex justify-between"><span class="eyebrow">0{{ index+1 }}</span><HugeiconsIcon :icon="ArrowUpRight01Icon" :size="24" :stroke-width="1.5" class="text-clay transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
    <NuxtImg :src="service.image" :alt="service.title" width="740" height="880" loading="lazy" class="aspect-[4/4.7] w-full object-cover grayscale-[10%]" />
    <h3 class="mt-6">{{ service.title }}</h3><p class="mt-3 text-muted">{{ service.summary }}</p>
    <NuxtLink :to="`/aanbod/${service.slug}`" class="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-forest">Ontdek de begeleiding <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="17" :stroke-width="1.8" aria-hidden="true" /></NuxtLink>
  </article>
</template>
