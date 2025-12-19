<template>
    <button
        class="call-button flex items-center gap-15 bg-primary-brown rounded-25 px-5 py-[10px] h-[40px] hover:bg-primary-brown-dark active:bg-primary-brown-dark transition-colors"
        @click="handleClick"
    >
        <img src="/devices.svg" alt="Phone" class="w-5 h-5 flex-shrink-0" />
        <span
            class="text-white text-[14px] font-manrope font-semibold leading-none whitespace-nowrap"
        >
            {{ text }}
        </span>
    </button>
</template>

<script setup lang="ts">
interface Props {
    text?: string;
}

const props = withDefaults(defineProps<Props>(), {
    text: 'Зворотний дзвінок',
});

const emit = defineEmits<{
    click: [];
}>();

const handleClick = () => {
    emit('click');
};
</script>

<style scoped>
.call-button {
    cursor: pointer;
    user-select: none;
}

.call-button:active {
    transform: scale(0.98);
}
</style>
