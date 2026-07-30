<script setup lang="ts">import { HugeiconsIcon } from '@hugeicons/vue'; import { Call02Icon, Location01Icon, Mail01Icon } from '@hugeicons/core-free-icons'; import { contact } from '~/data/fallback'; const openCookies=()=>window.dispatchEvent(new Event('open-cookie-settings'))</script>
<template>
  <footer class="bg-forest-dark text-white">
    <div class="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div class="lg:col-span-2">
        <AppLogo class="!text-white" />
        <p class="mt-5 max-w-md text-white/70">Persoonlijke hypnotherapie om vanuit zachtheid en vertrouwen opnieuw in je innerlijke kracht te stappen.</p>
      </div>
      <div><h2 class="font-sans text-sm uppercase tracking-widest">Contact</h2><address class="mt-4 space-y-3 text-sm not-italic text-white/70"><a :href="`mailto:${contact.email}`" class="flex items-center gap-2"><HugeiconsIcon :icon="Mail01Icon" :size="17" :stroke-width="1.6" aria-hidden="true" />{{ contact.email }}</a><a href="tel:+32477253711" class="flex items-center gap-2"><HugeiconsIcon :icon="Call02Icon" :size="17" :stroke-width="1.6" aria-hidden="true" />{{ contact.phone }}</a><span class="flex items-start gap-2"><HugeiconsIcon :icon="Location01Icon" :size="17" :stroke-width="1.6" class="mt-0.5 shrink-0" aria-hidden="true" />{{ contact.address }}</span></address></div>
      <div><h2 class="font-sans text-sm uppercase tracking-widest">Verder</h2><nav class="mt-4 flex flex-col text-sm text-white/70"><NuxtLink to="/privacybeleid">Privacybeleid</NuxtLink><NuxtLink to="/cookiebeleid">Cookiebeleid</NuxtLink><button class="mt-2 text-left" @click="openCookies">Cookievoorkeuren</button></nav></div>
    </div>
    <div class="container-page border-t border-white/15 py-5 text-sm text-white/60">© {{ new Date().getFullYear() }} Innerkracht · Tom Bracke</div>
  </footer>
</template>
