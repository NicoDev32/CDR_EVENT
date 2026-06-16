<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
      <div>
        <h1 class="section-title">About me</h1>
        <p class="section-subtitle">
          CDR EVENT imagine des univers élégants et chaleureux pour sublimer vos évènements en Lorraine, Belgique, Allemagne et Luxembourg.
        </p>
        <div class="mt-8 space-y-4 text-sm text-slate-600">
          <p>
            Je m'appelle Cynthia Daniele, j'ai 26 ans. Dans la vie, j'aime voyager, découvrir de nouvelles cultures et surtout partager. Je suis aussi une grande passionnée de musique : je chante depuis mes 15 ans, et la musique fait pleinement partie de qui je suis.

L'un de mes passe-temps favoris (après rendre fou mon mari), c'est passer du temps en famille, faire la fête et créer des moments qui marquent. Et pour ça, rien de tel qu'une décoration d'exception.


          </p>
        
        </div>
      </div>
      <div ref="portraitCard" class="glass-card overflow-hidden p-6">
        <QImg
          :src="aboutImage"
          class="h-60 w-full rounded-2xl"
          img-class="h-60 w-full object-cover"
        />
        <p class="mt-4 text-sm text-slate-600">
          Atelier de création et repérages sur mesure pour concevoir votre décor.
        </p>
      </div>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-3">
      <div v-for="value in values" :key="value.title" ref="valueCards" class="glass-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{{ value.title }}</p>
        <p class="mt-3 text-sm text-slate-600">{{ value.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const aboutImage = '/images/carousel/celebration-1.jpg';

const values = [
  {
    title: 'Approche',
    text: "Accompagnement créatif et logistique, toujours centré sur l'émotion.",
  },
  {
    title: 'Territoires',
    text: 'France • Belgique • Luxembourg • Allemagne',
  },
  {
    title: 'Engagement',
    text: 'Transparence, honnêteté et bienveillance guident chacun de mes accompagnements, pour une relation de confiance à chaque étape.',
  },
];

const valueCards = ref([]);
const portraitCard = ref(null);

onMounted(() => {
  gsap.from(portraitCard.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
  });
  if (valueCards.value.length) {
    gsap.from(valueCards.value, {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.2,
    });
  }
});
</script>
