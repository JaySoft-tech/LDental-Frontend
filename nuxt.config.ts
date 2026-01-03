// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@nuxtjs/robots',
        'nuxt-schema-org',
        '@nuxtjs/sitemap',
    ],
    css: ['~/assets/css/main.css'],

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
                { rel: 'canonical', href: 'https://ldental.vercel.app' },
                { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
            ],

            titleTemplate: '%siteName - %title',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'keywords',
                    content:
                        'стоматологія Київ, професійна стоматологія, видалення зубів Київ, імплантація зубів, ортопедія зубів, L-Dental',
                },
                { name: 'author', content: 'L-Dental' },
                { name: 'robots', content: 'index, follow' },
                {
                    name: 'google-site-verification',
                    content: '1t_JI2mrmG2lrCSvbdx8eNE1_OSu-FuOTKwVnrU_un0',
                },
                { name: 'geo.region', content: 'UA-KY' },
                { name: 'geo.placename', content: 'Київ' },
                { name: 'geo.position', content: '50.503;30.487' },
            ],
            htmlAttrs: { lang: 'uk' },
        },
    },

    site: {
        url: 'https://ldental.vercel.app',
        name: 'L-Dental - Професійна стоматологія в Києві',
        description:
            'Професійні стоматологічні послуги в Києві: консультації, лікування, імплантація, ортопедія. Комфорт, чесність та індивідуальний підхід для вашої посмішки.',
        defaultLocale: 'uk',
        indexable: true,
    },

    robots: {
        allow: ['/'],
        sitemap: '/sitemap.xml',
    },

    sitemap: {
        sources: ['/', '/#about', '/#services', '/#prices', '/#contacts'],
        defaults: {
            lastmod: new Date().toISOString(),
            priority: 0.9,
            changefreq: 'weekly',
        },
        cacheMaxAgeSeconds: 3600,
        autoI18n: false,
    },

    schemaOrg: {
        identity: {
            type: 'LocalBusiness',
            name: 'L-Dental',
            description:
                'Стоматологічна клініка в Києві, що пропонує професійні послуги з лікування зубів.',
            address: {
                streetAddress: 'вулиця Коноплянська 22а',
                addressLocality: 'Київ',
                addressCountry: 'UA',
                postalCode: '04201',
            },
            telephone: '+380503878354',
            email: 'dr.lohvinova@gmail.com',
            url: 'https://ldental.vercel.app',
            openingHoursSpecification: [
                {
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                    ],
                    opens: '09:00',
                    closes: '19:00',
                },
            ],
            image: '/logo.svg',
        },
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth',
        },
    },
});
