<template>
    <section
        id="prices"
        class="w-full bg-white py-40 lg:py-[100px] px-[10px] lg:px-[100px]"
    >
        <div class="w-full max-w-[370px] lg:max-w-[1240px] mx-auto">
            <!-- Title with decorative lines -->
            <div
                class="flex items-center justify-center gap-20 lg:gap-40 mb-30 lg:mb-[80px]"
            >
                <div
                    class="w-[25px] lg:w-[35px] h-[4px] lg:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
                <h2
                    class="text-black text-[32px] lg:text-[64px] font-manrope font-semibold leading-[100%] tracking-[-0.03em] text-center transition-all"
                >
                    Ціни
                </h2>
                <div
                    class="w-[25px] lg:w-[35px] h-[4px] lg:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
            </div>

            <!-- Loading State -->
            <LoadingState v-if="pending" />

            <!-- Error State -->
            <ErrorState v-else-if="error" :error="error" />

            <!-- Accordion Items -->
            <div
                v-else-if="categories?.data?.length"
                class="flex flex-col gap-[5px]"
            >
                <div
                    v-for="(category, index) in sortedCategories"
                    :key="category.id"
                    class="flex flex-col"
                >
                    <!-- Accordion Header -->
                    <div
                        @click="toggleAccordion(index)"
                        class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors rounded-sm"
                    >
                        <h3
                            class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                        >
                            {{ category.name }}
                        </h3>
                        <img
                            src="/Arrow-down.svg"
                            alt="Arrow"
                            :class="[
                                'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                                openIndex === index ? '-rotate-90' : '',
                            ]"
                            :style="{
                                filter:
                                    openIndex === index
                                        ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                        : 'brightness(0)',
                            }"
                        />
                    </div>

                    <!-- Accordion Content -->
                    <Transition name="accordion">
                        <div
                            v-if="
                                openIndex === index &&
                                category.service_items?.length
                            "
                            class="bg-white border-x border-b border-[#DCDCDC] overflow-hidden"
                        >
                            <div class="px-20 lg:px-30 py-20">
                                <div
                                    v-for="item in sortedItems(
                                        category.service_items,
                                    )"
                                    :key="item.id"
                                    class="flex justify-between items-start gap-4 py-[12px] border-b border-gray-200 last:border-0"
                                >
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-black text-[14px] lg:text-[16px] font-manrope font-normal leading-[120%]"
                                        >
                                            {{ item.name }}
                                        </p>
                                        <p
                                            v-if="
                                                extractDescription(
                                                    item.description,
                                                )
                                            "
                                            class="text-gray-500 text-[12px] lg:text-[14px] font-manrope font-light mt-1 leading-[120%]"
                                        >
                                            {{
                                                extractDescription(
                                                    item.description,
                                                )
                                            }}
                                        </p>
                                    </div>
                                    <p
                                        v-if="item.Price"
                                        class="text-primary-brown text-[14px] lg:text-[16px] font-manrope font-semibold whitespace-nowrap flex-shrink-0"
                                    >
                                        {{ item.Price }}
                                    </p>
                                    <p
                                        v-else
                                        class="text-gray-400 text-[14px] lg:text-[16px] font-manrope font-normal whitespace-nowrap flex-shrink-0"
                                    >
                                        —
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <!-- Empty State -->
            <EmptyState v-else />
        </div>
    </section>
</template>

<script setup lang="ts">
import EmptyState from '@/components/states/EmptyState.vue';
import ErrorState from '@/components/states/ErrorState.vue';
import LoadingState from '@/components/states/LoadingState.vue';

const openIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
    if (openIndex.value === index) {
        openIndex.value = null;
    } else {
        openIndex.value = index;
    }
};

const { data: categories, pending, error } = await useFetch('/api/services');

const sortedCategories = computed(() => {
    if (!categories.value?.data) return [];

    return [...categories.value.data].sort((a: any, b: any) => {
        const orderA = a?.order ?? 0;
        const orderB = b?.order ?? 0;
        return orderA - orderB;
    });
});

const sortedItems = (items: any[]) => {
    return [...items].sort((a, b) => {
        const orderA = a?.order ?? 0;
        const orderB = b?.order ?? 0;
        return orderA - orderB;
    });
};

const extractDescription = (description: any): string => {
    if (!description) return '';

    if (typeof description === 'string') return description;

    if (Array.isArray(description)) {
        return description
            .map((block: any) => {
                if (block.type === 'paragraph' && block.children) {
                    return block.children
                        .map((child: any) => child.text || '')
                        .join('');
                }
                return '';
            })
            .filter(Boolean)
            .join(' ');
    }

    return '';
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    opacity: 1;
    max-height: 1000px;
}
</style>
