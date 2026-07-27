<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowUpRight01Icon, Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => open.value = false)
watch(open, value => { if (import.meta.client) document.body.classList.toggle('menu-open', value) })
const links = [
  ['Aanbod','/aanbod'], ['Over mij','/over-mij'], ['Werkwijze','/werkwijze'],
  ['Ervaringen','/ervaringen'], ['Inzichten','/blog'], ['FAQ','/veelgestelde-vragen']
]
</script>
<template>
  <header class="sticky top-0 z-[100] isolate border-b border-forest/10 bg-white/95 text-forest shadow-[0_1px_0_rgb(105_118_104/.08)] backdrop-blur">
    <div class="container-page relative z-10 flex h-20 items-center justify-between">
      <AppLogo />
      <nav aria-label="Hoofdnavigatie" class="desktop-nav relative z-10 items-center gap-6 text-forest">
        <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="text-sm !text-forest hover:!text-forest-dark">{{ label }}</NuxtLink>
        <NuxtLink to="/contact" class="btn btn-primary">Maak een afspraak <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="16" :stroke-width="1.8" aria-hidden="true" /></NuxtLink>
      </nav>
      <button class="mobile-nav-toggle relative z-10 size-12 place-items-center text-forest" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'Menu sluiten' : 'Menu openen'" @click="open=!open">
        <HugeiconsIcon :icon="open ? Cancel01Icon : Menu01Icon" :size="24" :stroke-width="1.8" aria-hidden="true" />
      </button>
    </div>
    <Transition name="menu">
      <nav v-if="open" id="mobile-menu" aria-label="Mobiele navigatie" class="mobile-nav-panel fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-white px-6 py-8">
        <div class="flex flex-col">
          <NuxtLink v-for="[label,to] in links" :key="to" :to="to" class="border-b border-forest/15 py-4 font-display text-3xl">{{ label }}</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-primary mt-8">Maak een afspraak <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="17" :stroke-width="1.8" aria-hidden="true" /></NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>
