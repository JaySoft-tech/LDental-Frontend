<template>
    <div class="flex justify-center py-20">
        <div class="flex flex-col items-center gap-4">
            <div
                class="w-12 h-12 border-4 border-primary-brown border-t-transparent rounded-full animate-spin"
            ></div>
            <p class="text-black text-[16px] font-manrope">
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    message?: string;
}

withDefaults(defineProps<Props>(), {
    message: 'Завантаження...',
});
</script>

<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
