<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-sand via-linen to-sand"></div>
    <div class="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <div ref="logoWrapper" class="space-y-4">
        <div class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/60 bg-white/70 text-lagoon shadow-xl">
          <span class="text-2xl font-semibold tracking-[0.3em]">CDR</span>
        </div>
        <h1 class="font-display text-4xl text-lagoon md:text-5xl">CDR EVENT</h1>
        <p class="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
          Décoratrice évènementielle en Lorraine, pour des célébrations raffinées en France, Belgique et Luxembourg.
        </p>
      </div>
      <div ref="ctaWrapper" class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/services"
          class="rounded-full bg-lagoon px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition hover:bg-mist"
        >
          Nos services
        </RouterLink>
        <RouterLink
          to="/realisations"
          class="rounded-full border border-lagoon px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-lagoon transition hover:bg-lagoon hover:text-white"
        >
          Nos réalisations
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 class="section-title">Univers sur-mesure</h2>
        <p class="section-subtitle">
          Des scénographies élégantes pour mariages, lancements de marque et moments d'exception.
        </p>
      </div>
      <div class="glass-card p-6 text-sm text-slate-600">
        <p class="font-semibold uppercase tracking-[0.2em] text-slate-500">Territoires</p>
        <p class="mt-3">
          Lorraine • France • Belgique • Luxembourg
        </p>
      </div>
    </div>

    <div class="mt-10">
      <QCarousel
        animated
        infinite
        autoplay
        arrows
        navigation
        height="360px"
        class="rounded-3xl shadow-xl"
      >
        <QCarouselSlide
          v-for="slide in slides"
          :key="slide.name"
          :name="slide.name"
          :img-src="slide.src"
          class="bg-sand"
        >
          <div class="flex h-full items-end justify-start bg-black/30 p-6">
            <p class="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              {{ slide.label }}
            </p>
          </div>
        </QCarouselSlide>
      </QCarousel>
      <p class="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
        Images à intégrer dans <span class="font-semibold">/public/images/carousel</span>.
      </p>
    </div>
  </section>

  <section class="bg-linen/80 py-16">
    <div class="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
      <div class="glass-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Conception</p>
        <p class="mt-3 text-base text-slate-700">Moodboards raffinés et storytelling de marque.</p>
      </div>
      <div class="glass-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Production</p>
        <p class="mt-3 text-base text-slate-700">Sélection de mobilier, fleurs et luminaires.</p>
      </div>
      <div class="glass-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Installation</p>
        <p class="mt-3 text-base text-slate-700">Coordination sur site et finitions délicates.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';

const logoWrapper = ref(null);
const ctaWrapper = ref(null);

const slides = [
  { name: 'slide-1', label: 'Mariages signature', src: '/images/carousel/slide-1.jpg' },
  { name: 'slide-2', label: 'Expériences corporate', src: '/images/carousel/slide-2.jpg' },
  { name: 'slide-3', label: 'Célébrations privées', src: '/images/carousel/slide-3.jpg' },
];

onMounted(() => {
  gsap.fromTo(
    logoWrapper.value,
    { opacity: 0, y: -40, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out' }
  );
  gsap.fromTo(
    ctaWrapper.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
  );
});
</script>
