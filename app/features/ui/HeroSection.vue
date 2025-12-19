<template>
    <section
        class="relative w-full h-[747px] lg:h-[800px] 2xl:h-[1100px] 3xl:h-[1400px] overflow-hidden rounded-b-[25px]"
    >
        <!-- Desktop Background -->
        <div class="hidden lg:block absolute inset-0">
            <img
                :src="heroBgSrc"
                alt="Dental"
                class="w-full h-full object-cover object-[40%_center] 3xl:object-top 2xl:object-[30%_center] transition-all duration-500 ease-in-out"
            />
        </div>

        <!-- Mobile Background -->
        <div class="lg:hidden absolute inset-0">
            <img
                :src="heroBgSrc"
                alt="Dental"
                class="w-full h-full object-cover object-[45%_center]"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-[#171516] to-transparent via-[#171516]/20"
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

    <CallModal :is-open="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppointmentButton from '~/components/AppointmentButton.vue';
import CallModal from '~/components/CallModal.vue';

const heroBgSrc = '/hero-bg.png';

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
