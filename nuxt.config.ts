// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  vite: {
    resolve: {
      alias: {
        cookie: 'cookie-es',
      },
    },
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'cookie'],
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxt/content',
  ],
  css: ['~/assets/css/markdown.css'],
  supabase: {
    redirectOptions: {
      exclude: ['/about', '/signup', '/'],
      callback: '/confirm',
      login: '/login',
      saveRedirectToCookie: true,
    },
    redirect: false,
    types: '~/types/supabase/database.types.ts',
  },
  veeValidate: {
    autoImports: true,
    typedSchemaPackage: 'zod',
  },
  pwa: {
    devOptions: {
      enabled: false,
      type: 'module',
      navigateFallback: '/',
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
    registerType: 'autoUpdate',
    manifest: {
      name: 'Four The Road',
      short_name: 'Four The Road',
      description: 'Quatro Pessoas, Uma Rota, Uma Aventura',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: '/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/', // fallback offline
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
        },
      ],
      additionalManifestEntries: [{ url: '/offline.html', revision: null }],
    },
  },
})
