<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="section-title">Réalisations</h1>
        <p class="section-subtitle">
          Une sélection d'ambiances sur-mesure pour vos moments inoubliables.
        </p>
      </div>
      <span class="rounded-full bg-lagoon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        Portfolio
      </span>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <div v-for="card in cards" :key="card.title" ref="projectCards" class="glass-card p-6">
        <div class="mb-4 overflow-hidden rounded-2xl border border-white/60">
          <QImg :src="card.image" class="h-44 w-full" img-class="h-44 w-full object-cover" />
        </div>
        <h2 class="font-display text-xl text-lagoon">{{ card.title }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ card.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const cards = [
  {
    title: 'Mariage en Lorraine',
    text: 'Ambiance romantique et matières naturelles.',
    image: '/images/carousel/mariage-1.jpg',
  },
  {
    title: 'Lancement de marque',
    text: 'Installation contemporaine et éclairage doux.',
    image: '/images/carousel/marque-1.jpg',
  },
  {
    title: 'Anniversaire privé',
    text: 'Palette nude et détails artisanaux.',
    image: '/images/carousel/celebration-1.jpg',
  },
];

const projectCards = ref([]);

onMounted(() => {
  if (projectCards.value.length) {
    gsap.from(projectCards.value, {
      opacity: 0,
      y: 26,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power2.out',
    });
  }
});
</script>
