<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/40 bg-sand/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-lagoon text-white">
          <span class="text-sm font-semibold tracking-[0.2em]">CDR</span>
        </div>
        <div>
          <p class="font-display text-lg text-lagoon">CDR EVENT</p>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500">Décoratrice évènementielle</p>
        </div>
      </RouterLink>
      <nav class="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] md:flex">
        <RouterLink class="transition hover:text-lagoon" to="/">Accueil</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/services">Services</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/realisations">Réalisations</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/a-propos">À propos</RouterLink>
      </nav>
      <RouterLink
        class="hidden rounded-full border border-lagoon px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lagoon transition hover:bg-lagoon hover:text-white md:inline-flex"
        to="/services"
      >
        Découvrir
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
