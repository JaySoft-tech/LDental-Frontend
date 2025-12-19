<template>
    <!-- Modal Overlay -->
    <Transition name="modal">
        <div
            v-if="isOpen"
            class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center px-20"
            @click.self="closeModal"
        >
            <!-- Modal Container -->
            <div class="relative w-[412px] h-[262px]">
                <!-- Close Button -->
                <button
                    @click="closeModal"
                    class="absolute top-0 right-0 w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity z-10"
                    aria-label="Close"
                >
                    <img src="/close-modal.svg" alt="Close" class="w-10 h-10" />
                </button>

                <!-- Modal Content Box -->
                <div
                    class="absolute top-20 left-0 w-[351px] h-[252px] bg-white rounded-[10px] flex items-center justify-center"
                >
                    <div
                        class="flex flex-col items-center justify-center gap-30 px-[99px] py-40"
                    >
                        <!-- Phone Icon -->
                        <div class="flex items-center justify-center">
                            <img src="/tel.svg" alt="Phone" class="w-12 h-12" />
                        </div>

                        <!-- Title -->
                        <h3
                            class="text-black text-[18px] font-extrabold leading-[100%] tracking-[-0.03em]"
                        >
                            Телефон:
                        </h3>

                        <!-- Phone Number -->
                        <a
                            href="tel:+380503878354"
                            class="text-black text-[20px] font-normal leading-[100%] hover:text-primary-brown transition-colors"
                        >
                            (050) 387-83-54
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
interface Props {
    isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    close: [];
}>();

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
    transform: scale(0.9);
    opacity: 0;
}

.modal-leave-to .relative {
    transform: scale(0.9);
    opacity: 0;
}
</style>
