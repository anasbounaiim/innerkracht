<script setup lang="ts">
import { stripHtml, decodeHtml } from '~/utils/text'
useSeoPage('Inzichten', 'Artikels en inzichten over hypnose, innerlijke rust en persoonlijke groei.')
const {data}=await useFetch('/api/content/posts')
const posts=computed(()=>data.value?.items?.filter((p:any)=>p.slug!=='hello-world').map((p:any)=>({ ...p,title:decodeHtml(p.title.rendered),excerpt:stripHtml(p.excerpt.rendered) }))||[])
</script>
<template><section class="section"><div class="container-page"><SectionHeading eyebrow="Inzichten" title="Om rustig verder te lezen." intro="Verdiepende artikels vanuit de praktijk van Innerkracht."/><div v-if="posts.length" class="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"><article v-for="post in posts" :key="post.id" class="border-t border-forest/20 pt-5"><p class="eyebrow">{{new Date(post.date).toLocaleDateString('nl-BE')}}</p><h2 class="mt-5 font-display text-3xl"><NuxtLink :to="`/blog/${post.slug}`">{{post.title}}</NuxtLink></h2><p class="mt-4 text-muted">{{post.excerpt}}</p></article></div><div v-else class="mt-14 rounded-3xl bg-sand/60 p-8"><h2 class="font-sans text-xl font-semibold">Nog geen artikels gepubliceerd</h2><p class="prose-copy mt-3">Nieuwe berichten verschijnen hier automatisch zodra ze in WordPress worden gepubliceerd.</p></div></div></section></template>
