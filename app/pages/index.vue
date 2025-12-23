<template>
    <div class="w-full">
        <!-- Hero Section -->
        <HeroSection />
        <!-- Why L-Dental Section -->
        <WhyLDental />
        <!-- Services Section -->
        <Services />
        <!-- Prices Section -->
        <Prices />
        <!-- Contacts Section -->
        <Contacts />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/ui/HeroSection.vue';
import WhyLDental from '~/features/ui/WhyLDental.vue';
import Services from '~/features/ui/Services.vue';
import Prices from '~/features/ui/Prices.vue';
import Contacts from '~/features/ui/Contacts.vue';

useHead({
    title: 'Професійна стоматологія в Києві | L-Dental',
    meta: [
        {
            name: 'description',
            content:
                'L-Dental - клініка в Києві з послугами консультації, лікування, видалення зубів, імплантації та ортопедії. Комфорт та чесність для вашої посмішки.',
        },
        {
            property: 'og:title',
            content: 'L-Dental: Професійна стоматологія в Києві',
        },
        {
            property: 'og:description',
            content:
                'Індивідуальні плани лікування, сучасні технології та безболісні процедури в центрі Києва.',
        },
        { property: 'og:image', content: '/foto-c.png' },
        { property: 'og:url', content: 'https://l-dental.com.ua/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:title',
            content: 'L-Dental: Професійна стоматологія в Києві',
        },
        {
            name: 'twitter:description',
            content:
                'Індивідуальні плани лікування, сучасні технології та безболісні процедури в центрі Києва.',
        },
        { name: 'twitter:image', content: '/foto-c.png' },
    ],
});
</script>

<style scoped></style>
