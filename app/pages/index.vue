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
</script>

<style scoped></style>
