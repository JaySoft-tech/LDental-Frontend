<template>
    <button
        :class="[
            'appointment-button flex items-center bg-primary-brown rounded-[45px] hover:bg-primary-brown-dark active:bg-primary-brown-dark transition-colors group',
            sizeClasses,
        ]"
        @click="handleClick"
    >
        <span
            :class="[
                'text-white font-manrope font-medium leading-[100%] tracking-[-0.03em] whitespace-nowrap',
                textSizeClasses,
            ]"
        >
            Записатися на прийом
        </span>
        <img
            :src="arrowSrc"
            alt="Arrow"
            class="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1"
        />
    </button>
</template>

<script setup lang="ts">
interface Props {
    size?: 'small' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
    size: 'large',
});

const emit = defineEmits<{
    click: [];
}>();

const arrowSrc = '/arrow.svg';

const sizeClasses = computed(() => {
    if (props.size === 'small') {
        return 'pl-[57.5px] pr-[57.5px] py-20 gap-[25px]';
    }
    return 'pl-[45px] pr-[45px] py-20 gap-15';
});

const textSizeClasses = computed(() => {
    if (props.size === 'small') {
        return 'text-[18px]';
    }
    return 'text-[22px]';
});

const handleClick = () => {
    emit('click');
};
</script>

<style scoped>
.appointment-button {
    cursor: pointer;
    user-select: none;
}

.appointment-button:active {
    transform: scale(0.98);
}
</style>
