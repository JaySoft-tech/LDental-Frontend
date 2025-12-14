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
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/ui/HeroSection.vue';
import WhyLDental from '~/features/ui/WhyLDental.vue';
import Services from '~/features/ui/Services.vue';
import Prices from '~/features/ui/Prices.vue';
</script>

<style scoped></style>
