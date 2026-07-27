<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight02Icon, BrainIcon, BubbleChatIcon, Compass01Icon, HeartCheckIcon, Idea01Icon, Route01Icon, SparklesIcon, Target01Icon } from '@hugeicons/core-free-icons'
import { faqs, services } from '~/data/fallback'
useSeoPage('Hypnotherapie voor innerlijke rust', 'Persoonlijke hypnotherapie in Gavere voor wie wil werken aan angst, stress, gewoontes of oude patronen.', 'https://innerkracht.be/wp-content/uploads/2021/11/leaf.jpg')
useSchemaOrg([{ '@type':'ProfessionalService', name:'Innerkracht', url:useRuntimeConfig().public.siteUrl, email:'Tom@innerkracht.be', telephone:'+32477253711', address:{'@type':'PostalAddress',streetAddress:'Grotenbroekstraat 21',postalCode:'9800',addressLocality:'Gavere',addressCountry:'BE'} }])
const recognition=[
  { icon: Route01Icon, text:'Je blijft vastzitten in een patroon waar je moeilijk los van komt.' },
  { icon: BrainIcon, text:'Angst, stress of onzekerheid neemt te veel ruimte in.' },
  { icon: Idea01Icon, text:'Je begrijpt wat er speelt, maar merkt dat inzicht alleen niet genoeg is.' },
  { icon: HeartCheckIcon, text:'Je verlangt naar meer rust, zelfvertrouwen en beweging van binnenuit.' }
]
const processSteps=[
  { icon: BubbleChatIcon, text:'Vrijblijvend telefonisch kennismaken' },
  { icon: Compass01Icon, text:'Persoonlijk en diepgaand intakegesprek' },
  { icon: Target01Icon, text:'Hypnose afgestemd op jouw vraag' },
  { icon: SparklesIcon, text:'Praktische tools voor thuis' }
]
</script>
<template>
  <section class="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-forest text-white">
    <img src="/images/hero-image.png?v=2" alt="Besneeuwde bergtop boven een goudkleurig landschap" width="1170" height="780" fetchpriority="high" class="absolute inset-0 size-full object-cover object-center">
    <video autoplay muted loop playsinline preload="metadata" poster="/images/hero-image.png?v=2" aria-hidden="true" class="absolute inset-0 size-full object-cover object-center motion-reduce:hidden">
      <source src="/videos/hero-wildflower-meadow.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/15 to-forest/45"></div>
    <div class="container-page relative z-10 flex min-h-[calc(100svh-5rem)] flex-col items-center px-4 pb-5 pt-10 text-center text-white [&_a]:!text-white [&_h1]:!text-white [&_p]:!text-white md:pt-14">
      <p class="eyebrow !text-white">Hypnotherapie · Gavere</p>
      <p class="mt-7 max-w-2xl font-display text-[clamp(1.65rem,3vw,2.6rem)] leading-[1.05] text-white">Vind opnieuw rust, richting en beweging met persoonlijke begeleiding die naar de kern gaat.</p>
      <NuxtLink to="/contact" class="btn group mt-7 min-h-[3.75rem] min-w-[17.5rem] gap-4 border border-white/70 bg-forest/40 px-7 text-sm text-white hover:bg-forest/55">Maak een afspraak <HugeiconsIcon :icon="ArrowRight02Icon" :size="19" :stroke-width="1.7" class="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" /></NuxtLink>
      <div class="mt-auto w-full">
        <h1 class="whitespace-nowrap text-[clamp(4.1rem,14.4vw,13rem)] leading-[.72] tracking-[-.065em] text-white">Innerkracht</h1>
      </div>
    </div>
  </section>
  <section class="section bg-white"><div class="container-page grid items-start gap-14 lg:grid-cols-[.82fr_1.18fr]">
    <div class="lg:sticky lg:top-32"><p class="eyebrow">Welkom bij Innerkracht</p><h2 class="mt-5 max-w-xl">Jouw verhaal wijst de weg naar binnen.</h2><div class="mt-10 hidden h-px w-24 bg-clay lg:block"></div></div>
    <div><NuxtImg src="https://innerkracht.be/wp-content/uploads/2021/11/service-1.jpg" alt="Persoon in rust aan een bergmeer" width="1000" height="1200" loading="lazy" class="aspect-[5/4.2] w-full object-cover object-center" /><div class="grid gap-8 pt-9 md:grid-cols-2"><p class="text-xl leading-relaxed">Bij Innerkracht ben je welkom zoals je bent. In een sfeer van vertrouwen en oprechte aandacht begeleidt Tom Bracke je naar verandering — helder, doelgericht en zonder omwegen.</p><div><p class="prose-copy">Iedereen is anders. Daarom nemen we de tijd om jou te begrijpen en werken we met een helder doel voor ogen, in jouw tempo.</p><NuxtLink to="/over-mij" class="btn btn-primary mt-7">Leer Tom kennen</NuxtLink></div></div></div>
  </div></section>
  <section class="pattern-surface section bg-forest text-white"><div class="container-page"><SectionHeading eyebrow="Herken je dit?" title="Je weet dat er iets mag veranderen." intro="Soms weet je precies waar het vandaan komt. Soms voel je alleen dat iets niet meer stroomt." class="[&_p]:!text-white/65 [&_.eyebrow]:!text-sand" /><ol class="mt-14 grid gap-px bg-white/20 md:grid-cols-2"><li v-for="(item,i) in recognition" :key="item.text" class="bg-forest/90 p-7 md:p-10"><div class="flex items-center justify-between text-sand"><span class="text-sm">0{{ i+1 }}</span><HugeiconsIcon :icon="item.icon" :size="28" :stroke-width="1.4" aria-hidden="true" /></div><p class="mt-9 max-w-md text-xl">{{ item.text }}</p></li></ol></div></section>
  <section class="section"><div class="container-page"><SectionHeading eyebrow="Waarmee kan ik je helpen?" title="Begeleiding op maat van jouw vraag." /><div class="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="(service,i) in services" :key="service.slug" :service="service" :index="i" /></div></div></section>
  <section class="pattern-surface section bg-sand"><div class="container-page grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Werkwijze" title="Persoonlijk, rustig en to-the-point." /><ol class="space-y-7"><li v-for="(step,i) in processSteps" :key="step.text" class="grid grid-cols-[42px_44px_1fr] items-center gap-4 border-b border-forest/30 pb-7"><span class="font-display text-3xl text-forest/60">0{{i+1}}</span><HugeiconsIcon :icon="step.icon" :size="25" :stroke-width="1.5" class="text-clay" aria-hidden="true" /><strong class="text-lg">{{step.text}}</strong></li></ol></div></section>
  <section class="section"><div class="container-page grid gap-10 lg:grid-cols-2"><div><p class="eyebrow">Veelgestelde vragen</p><h2 class="mt-4">Goed om te weten.</h2><p class="prose-copy mt-6">Een helder antwoord kan helpen om rustig je eerste stap te zetten.</p><NuxtLink to="/veelgestelde-vragen" class="btn btn-secondary mt-7">Bekijk alle vragen</NuxtLink></div><FaqAccordion :items="faqs" /></div></section>
  <FinalCta />
</template>
