<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { CheckmarkCircle02Icon, Sent02Icon } from '@hugeicons/core-free-icons'
const form=reactive({name:'',email:'',phone:'',subject:'Kennismakingsgesprek',message:'',consent:false,website:''})
const pending=ref(false), success=ref(false), error=ref('')
async function submit(){pending.value=true;error.value='';try{await $fetch('/api/contact',{method:'POST',body:form});success.value=true}catch(e:any){error.value=e?.data?.message||'Verzenden is niet gelukt. Mail ons rechtstreeks.'}finally{pending.value=false}}
</script>
<template>
  <form v-if="!success" class="grid gap-5" novalidate @submit.prevent="submit">
    <label>Naam *<input v-model="form.name" required minlength="2" autocomplete="name" class="mt-2 min-h-12 w-full rounded-xl border border-forest/25 bg-white px-4"></label>
    <div class="grid gap-5 md:grid-cols-2"><label>E-mail *<input v-model="form.email" required type="email" autocomplete="email" class="mt-2 min-h-12 w-full rounded-xl border border-forest/25 bg-white px-4"></label><label>Telefoon<input v-model="form.phone" type="tel" autocomplete="tel" class="mt-2 min-h-12 w-full rounded-xl border border-forest/25 bg-white px-4"></label></div>
    <label>Onderwerp<select v-model="form.subject" class="mt-2 min-h-12 w-full rounded-xl border border-forest/25 bg-white px-4"><option>Kennismakingsgesprek</option><option>Vraag over hypnotherapie</option><option>Andere vraag</option></select></label>
    <label>Bericht *<textarea v-model="form.message" required minlength="10" rows="6" class="mt-2 w-full rounded-xl border border-forest/25 bg-white p-4"></textarea></label>
    <label class="sr-only">Website<input v-model="form.website" tabindex="-1" autocomplete="off"></label>
    <label class="flex items-start gap-3 text-sm"><input v-model="form.consent" required type="checkbox" class="mt-1 size-5 shrink-0">Ik ga akkoord met de verwerking van mijn gegevens zoals beschreven in het <NuxtLink to="/privacybeleid" class="underline">privacybeleid</NuxtLink>.</label>
    <p v-if="error" role="alert" class="rounded-xl bg-red-50 p-4 text-red-800">{{ error }}</p>
    <button class="btn btn-primary gap-2 justify-self-start" :disabled="pending">{{ pending?'Even geduld…':'Verstuur bericht' }}<HugeiconsIcon v-if="!pending" :icon="Sent02Icon" :size="18" :stroke-width="1.7" aria-hidden="true" /></button>
  </form>
  <div v-else role="status" class="rounded-3xl bg-white p-8"><HugeiconsIcon :icon="CheckmarkCircle02Icon" :size="32" :stroke-width="1.6" class="mb-4 text-forest" aria-hidden="true" /><h2 class="font-sans text-2xl font-semibold">Bedankt voor je bericht</h2><p class="mt-3">Je bericht is ontvangen. Tom neemt persoonlijk contact met je op.</p></div>
</template>
