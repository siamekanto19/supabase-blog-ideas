// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image', 'nuxt-lucide-icons', '@nuxtjs/supabase', '@vee-validate/nuxt', '@formkit/auto-animate/nuxt', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
  shadcn: {
    prefix: 'Ui',
  },
  supabase: {
    url: 'https://kpkkcstzggumlwfzemzb.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwa2tjc3R6Z2d1bWx3ZnplbXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMDI2NTksImV4cCI6MjA1MzY3ODY1OX0.XWPnVSUy72FGo7ri71qJGVZqd4Lt-6fZ_zhR6DCTjO4',
    redirect: false,
    types: '~/types/supabase-database.d.ts',
  },
  googleFonts: {
    display: 'swap',
    subsets: 'latin',
  },
  imports: {
    presets: [
      {
        from: 'zod',
        imports: ['z'],
      },
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },
  routeRules: {
    '/': { swr: 3600 }, // 1 Hour
    '/post/**': { ssr: true }, // Server Side
    '/category/**': { swr: 3600 }, // 1 Hour
  },
})
