<template>
  <section class="relative overflow-hidden">
    <QImg
      :src="heroImage"
      class="absolute inset-0 h-full w-full"
      img-class="h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-sand/20 via-lagoon/40 to-sand/90"></div>
    <div class="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center text-white">
      <div ref="logoWrapper" class="space-y-6">
        <div class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-2xl">
          <img src="/images/logo.png" alt="Logo CDR Event" class="h-20 w-20 object-contain" />
        </div>
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">Décoration évènementielle</p>
        <h1 class="font-display text-4xl md:text-6xl">CDR EVENT</h1>
        <p class="mx-auto max-w-2xl text-base text-white/85 md:text-lg">
          Scénographies élégantes et sur-mesure pour mariages, lancements de marque et célébrations privées.
        </p>
      </div>
      <div ref="ctaWrapper" class="mt-10 flex flex-wrap items-center justify-center gap-4">
      <RouterLink
  to="/services"
  class="inline-flex items-center justify-center rounded-full bg-lagoon px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg active:scale-95"
>
  Nos services
</RouterLink>

<RouterLink
  to="/realisations"
  class="inline-flex items-center justify-center rounded-full border-2 border-lagoon px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-lagoon transition-all hover:bg-lagoon hover:text-white active:scale-95"
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
          Une direction artistique complète, inspirée par des matières nobles et des tonalités douces.
        </p>
      </div>
      <div class="glass-card p-6 text-sm text-slate-600">
        <p class="font-semibold uppercase tracking-[0.2em] text-slate-500">Territoires</p>
        <p class="mt-3">Lorraine • France • Belgique • Luxembourg</p>
      </div>
    </div>

    <div class="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
      <QCarousel
        v-model="activeSlide"
        animated
        infinite
        autoplay
        arrows
        navigation
        height="380px"
        control-color="white"
        navigation-icon="radio_button_unchecked"
        class="rounded-3xl shadow-xl"
      >
        <QCarouselSlide
          v-for="slide in slides"
          :key="slide.name"
          :name="slide.name"
          :img-src="slide.src"
          class="bg-sand"
        >
          <div class="flex h-full items-end justify-start bg-black/20 p-6">
            <p class="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              {{ slide.label }}
            </p>
          </div>
        </QCarouselSlide>
      </QCarousel>

      <div class="grid gap-4">
        <div
          v-for="feature in features"
          :key="feature.title"
          ref="featureCards"
          class="glass-card flex flex-col justify-between gap-4 p-6"
        >
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{{ feature.tag }}</p>
            <h3 class="mt-3 font-display text-2xl text-lagoon">{{ feature.title }}</h3>
            <p class="mt-3 text-sm text-slate-600">{{ feature.text }}</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="h-2 w-2 rounded-full bg-lagoon"></span>
            <span class="text-xs uppercase tracking-[0.3em] text-slate-500">{{ feature.note }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-linen/80 py-16">
    <div class="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
      <div v-for="highlight in highlights" :key="highlight.title" ref="highlightCards" class="glass-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{{ highlight.title }}</p>
        <p class="mt-3 text-base text-slate-700">{{ highlight.text }}</p>
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
const featureCards = ref([]);
const highlightCards = ref([]);
const activeSlide = ref('slide-1');

const heroImage = '/images/carousel/mariage-1.jpg';

const slides = [
  { name: 'slide-1', label: 'Mariages signature', src: '/images/carousel/mariage-1.jpg' },
  { name: 'slide-2', label: 'Expériences corporate', src: '/images/carousel/marque-1.jpg' },
  { name: 'slide-3', label: 'Célébrations privées', src: '/images/carousel/celebration-1.jpg' },
];

const features = [
  {
    tag: 'Direction artistique',
    title: 'Narration visuelle',
    text: 'Un fil conducteur clair pour chaque détail de votre évènement.',
    note: 'Moodboard',
  },
  {
    tag: 'Expérience invités',
    title: 'Ambiances immersives',
    text: 'Lumières, textiles et volumes pour créer un effet waouh.',
    note: 'Scénographie',
  },
];

const highlights = [
  {
    title: 'Conception',
    text: 'Moodboards raffinés, références matières et palettes personnalisées.',
  },
  {
    title: 'Production',
    text: 'Sélection de mobilier, fleurs, luminaires et pièces signature.',
  },
  {
    title: 'Installation',
    text: 'Coordination sur site et finitions délicates jusqu’au dernier détail.',
  },
];

onMounted(() => {
  gsap.fromTo(
    logoWrapper.value,
    { opacity: 0, y: -40, scale: 0.92 },
    { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out' }
  );
  gsap.fromTo(
    ctaWrapper.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
  );
  if (featureCards.value.length) {
    gsap.from(featureCards.value, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.2,
    });
  }
  if (highlightCards.value.length) {
    gsap.from(highlightCards.value, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3,
    });
  }
});
</script>
