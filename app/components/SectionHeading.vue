<script setup lang="ts">defineProps<{ eyebrow?:string; title:string; intro?:string }>()</script>
<template>
  <div class="max-w-3xl"><p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p><h2 class="mt-4">{{ title }}</h2><p v-if="intro" class="prose-copy mt-6 text-lg">{{ intro }}</p></div>
</template>
