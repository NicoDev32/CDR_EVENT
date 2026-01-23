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
      <div v-for="card in cards" :key="card.title" class="glass-card p-6">
        <div class="mb-4 flex h-40 items-center justify-center rounded-2xl border border-dune bg-white/60 text-xs uppercase tracking-[0.2em] text-slate-500">
          {{ card.placeholder }}
        </div>
        <h2 class="font-display text-xl text-lagoon">{{ card.title }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ card.text }}</p>
      </div>
    </div>

    <p class="mt-8 text-xs uppercase tracking-[0.3em] text-slate-500">
      Images à déposer dans <span class="font-semibold">/public/images/realisations</span>.
    </p>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Mariage en Lorraine',
    text: 'Ambiance romantique et matières naturelles.',
    placeholder: 'Visuel 01',
  },
  {
    title: 'Lancement de marque',
    text: 'Installation contemporaine et éclairage doux.',
    placeholder: 'Visuel 02',
  },
  {
    title: 'Anniversaire privé',
    text: 'Palette nude et détails artisanaux.',
    placeholder: 'Visuel 03',
  },
];
</script>
