<template>
    <!-- Modal Overlay -->
    <Transition name="modal">
        <div
            v-if="isOpen"
            class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 font-manrope"
            @click.self="closeModal"
        >
            <div
                class="relative w-full max-w-[330px] md:max-w-[432px] h-[390px] md:h-[332px]"
            >
                <!-- Modal Content Box -->
                <div
                    class="absolute inset-0 bg-white rounded-[10px] px-[20px] pb-10 shadow-lg pt-24 md:py-10 md:w-[351px] md:h-[322px] md:top-[20px] md:left-[20px]"
                >
                    <button
                        @click="closeModal"
                        class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity z-10 md:hidden"
                        aria-label="Close"
                    >
                        <img
                            :src="closeModalDarkSrc"
                            alt="Close"
                            class="w-8 h-8"
                        />
                    </button>

                    <h2
                        class="text-[20px] font-extrabold text-center leading-[100%] tracking-[-0.03em] mb-[60px] md:mt-0"
                    >
                        Записатися на прийом
                    </h2>

                    <!-- PHONE -->
                    <div class="flex items-center gap-5 mb-[35px]">
                        <div
                            class="w-[54px] h-[54px] rounded-full bg-[#F0F0F0] flex items-center justify-center flex-shrink-0"
                        >
                            <img :src="telSrc" alt="Phone" class="w-12 h-12" />
                        </div>

                        <div>
                            <h3
                                class="text-[18px] font-extrabold leading-[100%] tracking-[-0.03em] mb-[10px]"
                            >
                                Телефон:
                            </h3>
                            <a
                                href="tel:+380503878354"
                                class="text-[16px] hover:text-primary-brown transition-colors"
                            >
                                (050) 387-83-54
                            </a>
                        </div>
                    </div>

                    <!-- EMAIL -->
                    <div class="flex items-center gap-5">
                        <div
                            class="w-[54px] h-[54px] rounded-full bg-[#F0F0F0] flex items-center justify-center flex-shrink-0"
                        >
                            <img :src="mailSrc" alt="Email" class="w-12 h-12" />
                        </div>

                        <div>
                            <h3
                                class="text-[18px] font-extrabold leading-[100%] tracking-[-0.03em] mb-[10px]"
                            >
                                Електронна пошта:
                            </h3>
                            <a
                                href="mailto:dr.lohvinova@gmail.com"
                                class="text-[16px] hover:text-primary-brown transition-colors break-all"
                            >
                                dr.lohvinova@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <button
                    @click="closeModal"
                    class="hidden md:flex absolute top-0 right-0 w-10 h-10 items-center justify-center hover:opacity-80 transition-opacity z-10"
                    aria-label="Close"
                >
                    <img :src="closeModalSrc" alt="Close" class="w-10 h-10" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';

interface Props {
    isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    close: [];
}>();

const closeModalDarkSrc = '/close-modal-dark.svg';
const closeModalSrc = '/close-modal.svg';
const telSrc = '/tel.svg';
const mailSrc = '/mail.svg';

const closeModal = () => {
    emit('close');
};

const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
        closeModal();
    }
};

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        }
    },
);

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative {
    transform: scale(0.95);
    opacity: 0;
}

.modal-leave-to .relative {
    transform: scale(0.95);
    opacity: 0;
}
</style>
