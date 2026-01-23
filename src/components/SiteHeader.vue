<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const headerRef = ref(null);

onMounted(() => {
  // Animation d'entrée GSAP
  gsap.from(headerRef.value, {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
});
</script>

<template>
  <header 
    ref="headerRef" 
    class="fixed top-0 z-50 w-full border-b border-white/40 bg-sand/80 backdrop-blur-md"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
      
      <RouterLink to="/" class="flex items-center gap-3 no-underline group">
        <img 
          src="/images/logo.png" 
          alt="Logo CDR Event" 
          class="h-11 w-11 rounded-full border border-white/50 shadow-sm transition-transform group-hover:scale-105" 
        />
        <div class="flex flex-col">
          <span class="font-display text-lg font-bold tracking-tight text-lagoon leading-tight">CDR EVENT</span>
          <span class="text-[9px] uppercase tracking-[0.3em] text-slate-500">Décoratrice d'évènements</span>
        </div>
      </RouterLink>

      <nav class="main-nav">
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
          class="text-slate-600"
        >
          <q-route-tab to="/" label="Accueil" exact />
          <q-route-tab to="/services" label="Services" exact />
          <q-route-tab to="/realisations" label="Réalisations" exact />
          <q-route-tab to="/a-propos" label="À propos" exact />
        </q-tabs>
      </nav>

      <div class="flex items-center">
        <a 
          href="tel:+33612345678" 
          class="inline-flex items-center gap-2 rounded-full bg-lagoon px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-opacity-90 hover:shadow-lagoon/20 active:scale-95"
        >
          <q-icon name="phone" size="14px" />
          <span class="hidden lg:inline">06 12 34 56 78</span>
        </a>
      </div>

    </div>
  </header>
</template>

<style scoped>
/* --- SÉCURITÉ VISIBILITÉ --- */
.main-nav {
  display: none; /* Masqué sur mobile */
}

@media (min-width: 768px) {
  .main-nav {
    /* On force l'affichage pour contrer ton bug de classe .hidden */
    display: block !important; 
    visibility: visible !important;
  }
}

/* --- STYLES QUASAR --- */
:deep(.q-tab) {
  min-height: 48px;
  padding: 0 16px;
}

:deep(.q-tab__label) {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Couleur de l'onglet actif (Lagoon #2c5f5f) */
:deep(.q-tab--active) {
  color: #2c5f5f !important;
}

:deep(.q-tabs__indicator) {
  background: #2c5f5f !important;
  height: 2px;
}

/* Hover discret */
:deep(.q-tab:hover .q-tab__label) {
  color: #2c5f5f;
}
</style>