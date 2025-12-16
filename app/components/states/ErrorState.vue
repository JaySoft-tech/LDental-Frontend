<template>
    <div class="flex justify-center py-20">
        <div
            class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full"
        >
            <div class="flex items-start gap-3">
                <span class="text-2xl">⚠️</span>
                <div class="flex-1">
                    <p
                        class="text-red-600 text-[16px] font-manrope font-semibold mb-2"
                    >
                        {{ title }}
                    </p>
                    <p
                        class="text-red-500 text-[14px] font-manrope leading-[140%]"
                    >
                        {{ errorMessage }}
                    </p>
                    <button
                        v-if="showRetry"
                        @click="handleRetry"
                        class="mt-4 px-4 py-2 bg-red-600 text-white text-[14px] font-manrope font-medium rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Спробувати ще раз
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    error?: any;
    title?: string;
    showRetry?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    error: null,
    title: 'Помилка завантаження',
    showRetry: false,
});

const emit = defineEmits<{
    retry: [];
}>();

const errorMessage = computed(() => {
    if (props.error?.message) {
        return props.error.message;
    }
    if (props.error?.statusMessage) {
        return props.error.statusMessage;
    }
    return 'Не вдалося завантажити дані. Спробуйте пізніше.';
});

const handleRetry = () => {
    emit('retry');
};
</script>

<style scoped></style>