<template>
    <div class="flex justify-center py-20">
        <div
            class="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md w-full text-center"
        >
            <div class="flex flex-col items-center gap-3">
                <span class="text-5xl">{{ icon }}</span>
                <p class="text-black text-[18px] font-manrope font-semibold">
                    {{ title }}
                </p>
                <p
                    class="text-gray-600 text-[14px] font-manrope leading-[140%]"
                >
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    icon?: string;
    title?: string;
    description?: string;
}

withDefaults(defineProps<Props>(), {
    icon: '📋',
    title: 'Прайс-лист порожній',
    description: 'На даний момент немає доступних послуг',
});
</script>

<style scoped></style>
