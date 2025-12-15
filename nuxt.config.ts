// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
    ],

    runtimeConfig: {
        public: {
            api:
                process.env.NUXT_PUBLIC_STRAPI_URL ||
                'http://localhost:1337/api',
            token: process.env.NUXT_PUBLIC_STRAPI_TOKEN || '',
        },
    },

    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Unbounded:wght@300;400;500;600;700&display=swap',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
});
