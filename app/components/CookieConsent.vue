<script setup lang="ts">
const visible=ref(false); const details=ref(false); const analytics=ref(false)
onMounted(()=>{ visible.value=!localStorage.getItem('innerkracht-consent'); window.addEventListener('open-cookie-settings',()=>{visible.value=true;details.value=true}) })
function save(){ localStorage.setItem('innerkracht-consent',JSON.stringify({necessary:true,analytics:analytics.value,date:new Date().toISOString()})); visible.value=false }
</script>
<template>
  <div v-if="visible" role="dialog" aria-modal="true" aria-labelledby="cookie-title" class="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-3xl border border-forest/20 bg-white p-6 shadow-xl">
    <h2 id="cookie-title" class="font-sans text-xl font-semibold">Jouw privacy, jouw keuze</h2><p class="mt-2 text-sm text-muted">Noodzakelijke opslag houdt je voorkeur bij. Analytische cookies worden alleen na jouw toestemming geladen; momenteel gebruiken we geen analytics.</p>
    <div v-if="details" class="mt-4 rounded-xl bg-ivory p-4"><label class="flex items-center justify-between"><span>Analytische cookies</span><input v-model="analytics" type="checkbox" class="size-5"></label></div>
    <div class="mt-5 flex flex-wrap gap-3"><button class="btn btn-primary" @click="save">Voorkeur bewaren</button><button class="btn btn-secondary" @click="details=!details">Instellingen</button><button class="min-h-11 px-3 text-sm underline" @click="analytics=false;save()">Alleen noodzakelijk</button></div>
  </div>
</template>
