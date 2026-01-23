<template>
  <header ref="headerRef" class="fixed top-0 z-50 w-full border-b border-white/40 bg-sand/85 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="Logo CDR Event"
          class="h-11 w-11 rounded-full border border-white/60 object-cover shadow-md"
        />
        <div>
          <p class="font-display text-lg text-lagoon">CDR EVENT</p>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500">Décoratrice évènementielle</p>
        </div>
      </RouterLink>
      <nav class="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] md:flex">
        <RouterLink ref="navLinks" class="transition hover:text-lagoon" to="/">Accueil</RouterLink>
        <RouterLink ref="navLinks" class="transition hover:text-lagoon" to="/services">Services</RouterLink>
        <RouterLink ref="navLinks" class="transition hover:text-lagoon" to="/realisations">Réalisations</RouterLink>
        <RouterLink ref="navLinks" class="transition hover:text-lagoon" to="/a-propos">À propos</RouterLink>
      </nav>
      <div class="flex items-center gap-3">
        <RouterLink
          class="hidden rounded-full border border-lagoon px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lagoon transition hover:bg-lagoon hover:text-white md:inline-flex"
          to="/services"
        >
          Découvrir
        </RouterLink>
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-lagoon shadow-sm transition hover:bg-white/70 md:hidden"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Ouvrir le menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="material-icons text-[22px]">
            {{ isMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="border-t border-white/40 bg-sand/95 px-6 py-6 md:hidden">
      <nav class="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-700">
        <RouterLink class="transition hover:text-lagoon" to="/">Accueil</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/services">Services</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/realisations">Réalisations</RouterLink>
        <RouterLink class="transition hover:text-lagoon" to="/a-propos">À propos</RouterLink>
        <RouterLink
          class="mt-2 inline-flex w-fit rounded-full bg-lagoon px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md"
          to="/services"
        >
          Découvrir
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { gsap } from 'gsap';

const isMenuOpen = ref(false);
const navLinks = ref([]);
const headerRef = ref(null);
const route = useRoute();

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);

onMounted(() => {
  gsap.from(headerRef.value, {
    y: -20,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
  });

  if (navLinks.value.length) {
    gsap.from(navLinks.value, {
      opacity: 0,
      y: -10,
      stagger: 0.08,
      delay: 0.2,
      duration: 0.6,
      ease: 'power2.out',
    });
  }
});
</script>
