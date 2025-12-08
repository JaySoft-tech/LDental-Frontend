<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-grow">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '~/features/layout/Header.vue';
import Footer from '~/features/layout/Footer.vue';
</script>

<style scoped></style>
