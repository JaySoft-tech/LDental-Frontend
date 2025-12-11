<template>
    <section
        class="relative w-full h-[747px] lg:h-[800px] 3xl:h-[1400px] overflow-hidden rounded-b-[25px]"
    >
        <!-- Desktop Background -->
        <div class="hidden lg:block absolute inset-0">
            <img
                src="/hero-bg.png"
                alt="Dental"
                class="w-full h-full object-cover object-center 3xl:object-top transition-all duration-500 ease-in-out"
            />
        </div>

        <!-- Mobile Background -->
        <div class="lg:hidden absolute inset-0">
            <img
                src="/hero-bg.png"
                alt="Dental"
                class="w-full h-full object-cover object-center"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-[#171516] to-transparent via-[#171516]/60"
            ></div>
        </div>

        <!-- Desktop Content Block -->
        <div class="hidden lg:flex relative h-full items-end z-10">
            <div class="w-full mx-auto">
                <div class="w-full max-w-[540px] px-60 py-60 rounded-lg">
                    <h1
                        class="text-white text-[64px] font-manrope font-medium leading-[100%] tracking-[-0.03em] mb-40"
                    >
                        Професійна<br />стоматологія<br />в Києві
                    </h1>

                    <AppointmentButton
                        size="large"
                        @click="handleAppointmentClick"
                    />
                </div>
            </div>
        </div>

        <!-- Mobile Content Block -->
        <div
            class="lg:hidden absolute inset-0 h-full flex flex-col justify-end z-10"
        >
            <div class="w-full rounded-b-[25px] pb-40 px-20">
                <h1
                    class="text-white text-[36px] font-manrope font-medium leading-[100%] tracking-[-0.03em] mb-40"
                >
                    Професійна<br />стоматологія<br />в Києві
                </h1>

                <AppointmentButton
                    size="small"
                    @click="handleAppointmentClick"
                />
            </div>
        </div>
    </section>

    <AppointmentModal :is-open="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppointmentButton from '~/components/AppointmentButton.vue';
import AppointmentModal from '~/components/AppointmentModal.vue';

const isModalOpen = ref(false);

const emit = defineEmits<{
    appointmentClick: [];
}>();

const handleAppointmentClick = () => {
    isModalOpen.value = true;
    emit('appointmentClick');
    console.log('Відкрити форму запису на прийом');
};
</script>

<style scoped></style>
