<template>
  <footer class="mt-20 border-t border-white/40 bg-linen/70">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">

      <!-- Logo / présentation -->
      <div class="space-y-3">
        <p class="font-display text-2xl text-lagoon">CDR EVENT</p>
        <p class="text-sm text-slate-600">
          Décoratrice évènementielle pour la France, la Belgique et le Luxembourg.
        </p>
      </div>

      <!-- Localisation -->
      <div class="space-y-2 text-sm text-slate-600">
        <p class="font-semibold uppercase tracking-[0.2em] text-slate-500">
          Localisation
        </p>
        <p>Lorraine • Grand Est</p>
        <p>Disponible en France, Belgique, Luxembourg</p>
      </div>

      <!-- Contact -->
      <div class="space-y-2 text-sm text-slate-600">
        <p class="font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <p>contact@cdr-event.fr</p>
        <p>+33 6 41 76 60 59</p>
      </div>

      <!-- Réseaux -->
      <div class="space-y-3">
        <p class="font-semibold uppercase tracking-[0.2em] text-slate-500">
          Réseaux sociaux
        </p>

        <div class="flex items-center gap-4">

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/cdr.event/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 transition-all duration-300 hover:scale-110 hover:bg-lagoon hover:text-white"
            aria-label="Instagram"
          >
            <q-icon
              name="fab fa-instagram"
              size="22px"
              class="text-lagoon group-hover:text-white"
            />
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/profile.php/?id=61586420823281"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 transition-all duration-300 hover:scale-110 hover:bg-lagoon hover:text-white"
            aria-label="Facebook"
          >
            <q-icon
              name="fab fa-facebook-f"
              size="20px"
              class="text-lagoon group-hover:text-white"
            />
          </a>

        </div>
      </div>

    </div>

    <div
      class="border-t border-white/40 py-4 text-center text-xs uppercase tracking-[0.3em] text-slate-500"
    >
      © {{ currentYear }} CDR EVENT. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>