<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="section-title">Services</h1>
        <p class="section-subtitle">
          Que vous souhaitiez une prestation clé en main ou simplement louer du matériel, CDR Event vous accompagne dans tous vos projets.
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
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Installation clé en main</p>
          <p class="mt-3 text-base text-slate-700">
            On imagine ensemble, je réalise pour vous. Une décoration installée avec soin pour un résultat sans stress.
          </p>
        </div>
        <!-- <div class="glass-card p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Coordination</p>
          <p class="mt-3 text-base text-slate-700">
            Une équipe dédiée pour orchestrer les prestataires et la mise en scène finale.
          </p>
        </div> -->
        <div class="glass-card p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Location de matériel</p>
          <p class="mt-3 text-base text-slate-700">
            Pour les créatifs qui aiment mettre la main à la pâte; louez les éléments qu'il vous faut pour réaliser votre décoration à votre façon.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2">
      <article v-for="service in services" :key="service.title" ref="serviceCards" class="glass-card p-8">
        <div class="mb-6 overflow-hidden rounded-2xl border border-white/70 bg-white/50 aspect-[4/5]">
  <QImg
    :src="service.image"
    class="h-full w-full"
    img-class="h-full w-full object-contain p-3"
  />
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
    text: "De l'inspiration à la mise en scène, chaque détail est imaginé pour raconter votre histoire.",
    image: '/images/carousel/design_scenographie.jpg',
  },
  {
    title: 'Créations florales fraîches ou artificielles',
    text: 'Bouquets de mariées, boutonnières, bracelets floraux, compositions florales, arches et décorations de cérémonies, pensé dans les moindres détails.',
    image: '/images/carousel/Styling_floral.jpg',
  },
  {
    title: 'Animations et locations',
    text: 'Livre d\'or audio, cabine téléphonique, bar à bonbons, roue de la fortune et autres éléments décoratifs à louer pour enrichir l\'expérience de vos invités.',
    image: '/images/carousel/marque-1.jpg'
  },
  {
    title: 'Personnalisation',
    text: 'Panneaux de bienvenue, menus, marque-places, cadeaux invités et créations personnalisées pour apporter une touche unique à votre événement.',
    image: '/images/carousel/personnalisation.jpg',
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
