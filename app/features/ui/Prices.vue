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

            <!-- Accordion Items -->
            <div class="flex flex-col gap-[5px]">
                <!-- Service 1: Консультування -->
                <div
                    @click="toggleAccordion(0)"
                    class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors"
                >
                    <h3
                        class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                    >
                        Консультування
                    </h3>
                    <img
                        src="/Arrow-down.svg"
                        alt="Arrow"
                        :class="[
                            'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                            openIndex === 0 ? '-rotate-90' : '',
                        ]"
                        :style="{
                            filter:
                                openIndex === 0
                                    ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                    : 'brightness(0)',
                        }"
                    />
                </div>

                <!-- Service 2: Лікування -->
                <div
                    @click="toggleAccordion(1)"
                    class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors"
                >
                    <h3
                        class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                    >
                        Лікування
                    </h3>
                    <img
                        src="/Arrow-down.svg"
                        alt="Arrow"
                        :class="[
                            'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                            openIndex === 1 ? '-rotate-90' : '',
                        ]"
                        :style="{
                            filter:
                                openIndex === 1
                                    ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                    : 'brightness(0)',
                        }"
                    />
                </div>

                <!-- Service 3: Імплантація -->
                <div
                    @click="toggleAccordion(2)"
                    class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors"
                >
                    <h3
                        class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                    >
                        Імплантація
                    </h3>
                    <img
                        src="/Arrow-down.svg"
                        alt="Arrow"
                        :class="[
                            'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                            openIndex === 2 ? '-rotate-90' : '',
                        ]"
                        :style="{
                            filter:
                                openIndex === 2
                                    ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                    : 'brightness(0)',
                        }"
                    />
                </div>

                <!-- Service 4: Ортопедія -->
                <div
                    @click="toggleAccordion(3)"
                    class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors"
                >
                    <h3
                        class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                    >
                        Ортопедія
                    </h3>
                    <img
                        src="/Arrow-down.svg"
                        alt="Arrow"
                        :class="[
                            'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                            openIndex === 3 ? '-rotate-90' : '',
                        ]"
                        :style="{
                            filter:
                                openIndex === 3
                                    ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                    : 'brightness(0)',
                        }"
                    />
                </div>

                <!-- Service 5: Видалення зубів -->
                <div
                    @click="toggleAccordion(4)"
                    class="w-full h-[60px] bg-[#E8E8E8] flex items-center justify-between px-20 lg:px-30 cursor-pointer hover:bg-[#DCDCDC] transition-colors"
                >
                    <h3
                        class="text-black text-[16px] lg:text-[18px] font-manrope font-extrabold leading-[100%] transition-all"
                    >
                        Видалення зубів
                    </h3>
                    <img
                        src="/Arrow-down.svg"
                        alt="Arrow"
                        :class="[
                            'w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] transition-all duration-300',
                            openIndex === 4 ? '-rotate-90' : '',
                        ]"
                        :style="{
                            filter:
                                openIndex === 4
                                    ? 'brightness(0) saturate(100%) invert(80%) sepia(10%) saturate(500%) hue-rotate(180deg)'
                                    : 'brightness(0)',
                        }"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
    if (openIndex.value === index) {
        openIndex.value = null;
    } else {
        openIndex.value = index;
    }
};
</script>

<style scoped></style>
