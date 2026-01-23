<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="section-title">Services</h1>
        <p class="section-subtitle">
          Une direction artistique complète pour imaginer, produire et orchestrer vos évènements.
        </p>
      </div>
      <span class="rounded-full border border-lagoon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lagoon">
        Sur devis
      </span>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <QImg
        :src="heroImage"
        class="h-full w-full overflow-hidden rounded-3xl shadow-xl"
        img-class="h-full w-full object-cover"
      />
      <div class="grid gap-6">
        <div class="glass-card p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Signature</p>
          <p class="mt-3 text-base text-slate-700">
            Des décors sur-mesure, pensés pour magnifier chaque temps fort de votre évènement.
          </p>
        </div>
        <div class="glass-card p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Coordination</p>
          <p class="mt-3 text-base text-slate-700">
            Une équipe dédiée pour orchestrer les prestataires et la mise en scène finale.
          </p>
        </div>
        <div class="glass-card p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Palette</p>
          <p class="mt-3 text-base text-slate-700">
            Textiles, fleurs, mobilier et lumières choisis selon le thème et le lieu.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2">
      <article v-for="service in services" :key="service.title" ref="serviceCards" class="glass-card p-8">
        <div class="mb-6 overflow-hidden rounded-2xl border border-white/70">
          <QImg :src="service.image" class="h-40 w-full" img-class="h-40 w-full object-cover" />
        </div>
        <h2 class="font-display text-2xl text-lagoon">{{ service.title }}</h2>
        <p class="mt-4 text-sm text-slate-600">
          {{ service.text }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const heroImage = '/images/carousel/marque-1.jpg';

const services = [
  {
    title: 'Design & scénographie',
    text: "Concept créatif, inspirations et planches matières autour de votre histoire.",
    image: '/images/carousel/mariage-1.jpg',
  },
  {
    title: 'Styling floral',
    text: 'Compositions florales, installations suspendues et arrangements sur-mesure.',
    image: '/images/carousel/celebration-1.jpg',
  },
  {
    title: 'Location & sourcing',
    text: 'Mobilier, vaisselle, textiles et accessoires soigneusement sélectionnés.',
    image: '/images/carousel/marque-1.jpg',
  },
  {
    title: 'Coordination jour J',
    text: 'Installation, gestion des prestataires et mise en scène finale.',
    image: '/images/carousel/mariage-1.jpg',
  },
];

const serviceCards = ref([]);

onMounted(() => {
  if (serviceCards.value.length) {
    gsap.from(serviceCards.value, {
      opacity: 0,
      y: 26,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });
  }
});
</script>
