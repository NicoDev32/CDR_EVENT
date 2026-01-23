import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { fileURLToPath } from 'node:url'; // Ajoute cet import
import path from 'node:path';            // Ajoute cet import

// On récupère le chemin du dossier actuel
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      // Utilise path.resolve pour garantir un chemin absolu
      sassVariables: path.resolve(__dirname, 'src/styles/quasar-variables.sass'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Plus propre avec path.resolve
    },
  },
  server: {
    allowedHosts: true // Pour éviter l'erreur de host bloqué
  }
});