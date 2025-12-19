<template>
    <section
        id="about"
        class="w-full bg-white py-40 xl:py-[100px] xl:pb-[125px] px-[10px] md:px-[50px] xl:px-[100px]"
    >
        <div
            class="w-full max-w-[370px] md:max-w-[700px] xl:max-w-[1240px] mx-auto"
        >
            <!-- Title -->
            <div
                class="flex items-center justify-center gap-20 md:gap-30 xl:gap-40 mb-30 md:mb-[60px] xl:mb-[80px]"
            >
                <div
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
                <h2
                    class="text-black text-[32px] md:text-[48px] xl:text-[64px] font-manrope font-semibold leading-[100%] tracking-[-0.03em] text-center whitespace-nowrap transition-all"
                >
                    Чому L-Dental
                </h2>
                <div
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
            </div>

            <!-- Content Container -->
            <div class="relative">
                <!-- Center Content -->
                <div
                    class="flex flex-col items-center w-full max-w-[370px] md:max-w-[500px] xl:max-w-[527px] mx-auto"
                >
                    <!-- Main Image -->
                    <img
                        src="/foto-c.png"
                        alt="Dental Office"
                        class="w-full h-[227px] md:h-[280px] xl:h-[323px] rounded-15 object-cover mb-[48px] transition-all"
                    />

                    <!-- Feature 1 -->
                    <div class="flex flex-col items-start mb-[30px] w-full">
                        <img
                            src="/arrow-down.svg"
                            alt="Arrow"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px] transition-all"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%] text-start transition-all"
                        >
                            У клініці L-Dental ви отримуєте не просто комфортний
                            досвід, побудований на сучасних технологіях, знаннях
                            та уважності лікарів, а й на чесності кожного
                            рішення
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="flex flex-col items-start mb-[30px] w-full">
                        <img
                            src="/arrow-down.svg"
                            alt="Arrow"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px] transition-all"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%] text-start transition-all"
                        >
                            Ми працюємо, щоб ви могли усміхатись без страху та
                            сумнівів, використовуючи різноманітні види анестезії
                            та професійний підхід
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="flex flex-col items-start mb-40 xl:mb-0 w-full">
                        <img
                            src="/arrow-down.svg"
                            alt="Arrow"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px] transition-all"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%] text-start transition-all"
                        >
                            Кожен план лікування створюється під індивідуальні
                            показання та потреби пацієнта, включаючи естетичну
                            складову
                        </p>
                    </div>
                </div>

                <!-- Side Images - Only visible on xl screens (1280px+) -->
                <div class="hidden xl:block">
                    <!-- Left Image -->
                    <div
                        class="absolute left-0 top-[323px] opacity-0 xl:opacity-100 transition-all duration-500"
                    >
                        <img
                            src="/foto-l.png"
                            alt="Clinic"
                            class="w-[170px] h-[303px] rounded-15 object-cover"
                        />
                    </div>

                    <!-- Right Image -->
                    <div
                        class="absolute right-0 top-[323px] opacity-0 xl:opacity-100 transition-all duration-500"
                    >
                        <img
                            src="/foto-r.png"
                            alt="Clinic Interior"
                            class="w-[227px] h-[303px] rounded-15 object-cover"
                        />
                    </div>
                </div>
            </div>

            <!-- Bottom Images - Visible below xl screens -->
            <div class="flex flex-col xl:hidden mt-0">
                <img
                    src="/foto-l.png"
                    alt="Clinic"
                    class="w-full h-[658px] md:h-[500px] rounded-15 object-cover mb-20 transition-all"
                />
                <img
                    src="/foto-r.png"
                    alt="Clinic Interior"
                    class="w-full h-[494px] md:h-[400px] rounded-15 object-cover transition-all"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
