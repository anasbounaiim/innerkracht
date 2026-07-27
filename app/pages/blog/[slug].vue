<script setup lang="ts">
import { stripHtml, decodeHtml } from '~/utils/text'
const route=useRoute(); const config=useRuntimeConfig()
const {data}=await useFetch<any[]>(`${config.public.wordpressUrl}/wp-json/wp/v2/posts`,{query:{slug:route.params.slug,_embed:1}})
const post=computed(()=>data.value?.[0]); if(!post.value) throw createError({statusCode:404,statusMessage:'Artikel niet gevonden'})
const title=decodeHtml(post.value.title.rendered); useSeoPage(title,stripHtml(post.value.excerpt.rendered))
useSchemaOrg([{ '@type':'BlogPosting',headline:title,datePublished:post.value.date,dateModified:post.value.modified }])
</script>
<template><article class="section"><div class="container-page max-w-3xl"><p class="eyebrow">{{new Date(post.date).toLocaleDateString('nl-BE')}}</p><h1 class="mt-5">{{decodeHtml(post.title.rendered)}}</h1><div class="mt-10 space-y-5 text-lg [&_h2]:mt-10 [&_h2]:text-4xl [&_a]:underline" v-html="post.content.rendered"></div><NuxtLink to="/blog" class="btn btn-secondary mt-12">← Alle inzichten</NuxtLink></div></article></template>
