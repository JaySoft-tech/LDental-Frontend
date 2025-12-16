<template>
    <footer class="w-full bg-primary-brown">
        <div
            class="w-full max-w-[1440px] mx-auto h-[134px] md:h-[137px] flex flex-col md:flex-row items-center justify-center md:justify-start px-20 md:px-0 py-40 md:py-60"
        >
            <div
                class="text-white text-[10px] md:text-[12px] font-unbounded font-light leading-[100%] text-center md:text-left md:ml-[100px]"
            >
                © {{ currentYear }} L-Dental. Всі права захищені
            </div>

            <a
                href="#"
                @click.prevent="openModal"
                class="text-white text-[10px] md:text-[12px] font-unbounded font-light leading-[100%] underline mt-30 md:mt-0 md:ml-[265px] hover:opacity-80 transition-opacity"
            >
                Політика конфіденційності
            </a>
        </div>

        <PrivacyPolicyModal :is-open="isModalOpen" @close="closeModal" />
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrivacyPolicyModal from '@/components/PrivacyModal.vue';

const currentYear = new Date().getFullYear();

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<style scoped></style>
