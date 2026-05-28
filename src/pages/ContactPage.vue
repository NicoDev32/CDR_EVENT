<template>
<section class="mx-auto max-w-6xl px-6 pb-16 pt-32">
    <!-- Header -->
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="section-title">Contact</h1>
        <p class="section-subtitle">
          Parlons de votre évènement et imaginons ensemble une scénographie unique.
        </p>
      </div>

      <span
        class="rounded-full border border-lagoon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lagoon"
      >
        Disponible sur rendez-vous
      </span>
    </div>

    <!-- Contenu -->
    <div class="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

      <!-- Infos -->
      <div class="grid gap-6">

        <!-- Présentation -->
        <div class="glass-card p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            CDR EVENT
          </p>

          <p class="mt-4 text-base leading-relaxed text-slate-700">
            Décoratrice évènementielle spécialisée dans la création d’ambiances
            élégantes et sur-mesure pour vos mariages, anniversaires,
            baby showers et évènements privés.
          </p>
        </div>

        <!-- Coordonnées -->
        <div class="glass-card p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Coordonnées
          </p>

          <div class="mt-5 space-y-4 text-slate-700">

            <div class="flex items-center gap-3">
              <q-icon name="place" size="22px" class="text-lagoon" />
              <span>Hayange • Moselle • Grand Est</span>
            </div>

            <div class="flex items-center gap-3">
              <q-icon name="mail" size="22px" class="text-lagoon" />
              <a
                href="mailto:contact@cdr-event.fr"
                class="transition hover:text-lagoon"
              >
                contact@cdr-event.fr
              </a>
            </div>

            <div class="flex items-center gap-3">
              <q-icon name="call" size="22px" class="text-lagoon" />
              <a
                href="tel:+33641766059"
                class="transition hover:text-lagoon"
              >
                +33 6 41 76 60 59
              </a>
            </div>

          </div>
        </div>

        <!-- Réseaux -->
        <div class="glass-card p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Réseaux sociaux
          </p>

          <div class="mt-5 flex items-center gap-4">

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/cdr.event/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/60 transition-all duration-300 hover:scale-110 hover:bg-lagoon"
            >
              <q-icon
                name="fab fa-instagram"
                size="24px"
                class="text-lagoon group-hover:text-white"
              />
            </a>

            <!-- Facebook -->
            <a
              href="https://www.facebook.com/profile.php/?id=61586420823281"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/60 transition-all duration-300 hover:scale-110 hover:bg-lagoon"
            >
              <q-icon
                name="fab fa-facebook"
                size="24px"
                class="text-lagoon group-hover:text-white"
              />
            </a>

          </div>
        </div>

      </div>

      <!-- Carte -->
      <div class="glass-card overflow-hidden p-3">

        <div class="overflow-hidden rounded-3xl">
          <iframe
            src="https://www.google.com/maps?q=Hayange,+Moselle&output=embed"
            width="100%"
            height="100%"
            class="min-h-[500px] w-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>