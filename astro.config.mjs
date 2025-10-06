import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react()], // Esta línea activa la integración con React
  output: 'server',
  adapter: node({
    mode: 'standalone',
    middleware: true,
  }),
  // Estas últimas líneas se puedn comentar si se quiere el menú - depuración de Astro
  devToolbar: {
    enabled: false
  }
});
