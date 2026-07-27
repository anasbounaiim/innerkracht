import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'nl-BE' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    wordpressApiUrl: process.env.WORDPRESS_API_URL || 'https://innerkracht.be/wp-json/wp/v2',
    contactRecipientEmail: process.env.CONTACT_RECIPIENT_EMAIL || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      wordpressUrl: process.env.NUXT_PUBLIC_WORDPRESS_URL || 'https://innerkracht.be'
    }
  },
  site: { url: process.env.NUXT_PUBLIC_SITE_URL || 'https://innerkracht.be', name: 'Innerkracht' },
  sitemap: { sources: ['/api/__sitemap__/urls'] },
  robots: { disallow: ['/api/contact'] },
  image: { domains: ['innerkracht.be', 'images.unsplash.com'], format: ['avif', 'webp'], quality: 82 },
  typescript: { strict: true },
  routeRules: {
    '/': { swr: 900 },
    '/blog/**': { swr: 900 },
    '/aanbod/**': { swr: 900 }
  }
})
