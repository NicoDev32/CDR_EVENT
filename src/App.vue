<template>
  <div class="min-h-screen bg-sand text-slate-800">
    <SiteHeader />
    <main class="pt-24">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>
