<template>
    <section
        class="w-full h-auto lg:h-[558px] relative bg-cover bg-center transition-all"
        style="
            background-image: url('/bg-services.png');
            background-color: rgba(187, 187, 187, 0.35);
        "
    >
        <div
            class="w-full max-w-[1440px] mx-auto h-full flex flex-col items-center"
        >
            <!-- Title -->
            <div
                class="flex items-center justify-center gap-20 lg:gap-40 mt-20 lg:mt-40 transition-all"
            >
                <div
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>

                <h2
                    class="text-black text-[32px] md:text-[48px] xl:text-[64px] font-manrope font-semibold leading-[100%] tracking-[-0.03em] text-center whitespace-nowrap transition-all"
                >
                    Послуги
                </h2>

                <div
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
            </div>

            <!-- GRID -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-40 md:gap-28 lg:gap-60 mt-40 lg:mt-[80px] px-[95px] md:px-[60px] lg:px-[100px] pb-[20px] transition-all"
            >
                <div
                    v-for="(item, i) in services"
                    :key="i"
                    class="flex flex-col items-center transition-all"
                >
                    <div
                        class="w-[200px] h-[200px] flex items-center justify-center mb-20 md:mb-30 lg:mb-30 transition-all"
                    >
                        <img
                            :src="item.icon"
                            :alt="item.title"
                            class="w-full h-full object-contain"
                        />
                    </div>

                    <p
                        class="text-black text-[16px] font-manrope font-extrabold leading-[100%] tracking-[-0.03em] text-center"
                    >
                        {{ item.title }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const services = [
    { icon: '/icon-consulting.svg', title: 'Консультування' },
    { icon: '/icon-tooth-extraction.svg', title: 'Видалення зубів' },
    { icon: '/icon-treatment.svg', title: 'Лікування' },
    { icon: '/icon-implantation.svg', title: 'Імплантація' },
    { icon: '/icon-orthopaedics.svg', title: 'Ортопедія' },
];
</script>

<style scoped></style>
