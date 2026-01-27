<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const headerRef = ref(null);
const mobileMenuOpen = ref(false);

onMounted(() => {
  // Animation d'entrée GSAP
  gsap.from(headerRef.value, {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
});

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
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
          <span
            class="font-display text-lg font-bold tracking-tight text-lagoon leading-tight"
            >CDR EVENT</span
          >
          <span class="text-[9px] uppercase tracking-[0.3em] text-slate-500"
            >Décoratrice d'évènements</span
          >
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

      <!-- BURGER (mobile only) -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden inline-flex items-center justify-center rounded-full p-2 text-lagoon hover:bg-black/5"
        aria-label="Menu"
      >
        <q-icon name="menu" size="26px" />
      </button>
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
  <!-- MENU MOBILE -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed top-[64px] left-0 w-full bg-sand/95 backdrop-blur-md border-b border-white/40 z-40"
    >
      <nav class="flex flex-col divide-y divide-white/20">
        <RouterLink @click="mobileMenuOpen = false" to="/" class="mobile-link"
          >Accueil</RouterLink
        >
        <RouterLink
          @click="mobileMenuOpen = false"
          to="/services"
          class="mobile-link"
          >Services</RouterLink
        >
        <RouterLink
          @click="mobileMenuOpen = false"
          to="/realisations"
          class="mobile-link"
          >Réalisations</RouterLink
        >
        <RouterLink
          @click="mobileMenuOpen = false"
          to="/a-propos"
          class="mobile-link"
          >À propos</RouterLink
        >
      </nav>
    </div>
  </transition>
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

.mobile-link {
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #475569;
  text-decoration: none;
}

.mobile-link:hover {
  background: rgba(0, 0, 0, 0.04);
  color: #2c5f5f;
}
</style>
