<template>
    <section
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
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full"
                ></div>
                <h2
                    class="text-black text-[32px] md:text-[48px] xl:text-[64px] font-manrope font-semibold leading-[100%] tracking-[-0.03em] text-center whitespace-nowrap"
                >
                    Чому L-Dental
                </h2>
                <div
                    class="w-[25px] md:w-[30px] xl:w-[35px] h-[4px] md:h-[5px] xl:h-[6px] bg-primary-brown/65 rounded-full"
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
                        class="w-full h-[227px] md:h-[280px] xl:h-[323px] rounded-15 object-cover mb-[48px]"
                    />

                    <!-- Feature 1 -->
                    <div class="flex flex-col items-start mb-[30px] w-full">
                        <img
                            src="/Arrow-down.svg"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px]"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%]"
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
                            src="/Arrow-down.svg"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px]"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%]"
                        >
                            Ми працюємо, щоб ви могли усміхатись без страху та
                            сумнівів, використовуючи різноманітні види анестезії
                            та професійний підхід
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="flex flex-col items-start mb-40 xl:mb-0 w-full">
                        <img
                            src="/Arrow-down.svg"
                            class="w-[13px] h-[13px] mb-20 md:mb-[28px] xl:mb-[35px]"
                        />
                        <p
                            class="text-black text-[18px] font-manrope font-medium leading-[100%]"
                        >
                            Кожен план лікування створюється під індивідуальні
                            показання та потреби пацієнта, включаючи естетичну
                            складову
                        </p>
                    </div>
                </div>

                <!--IMAGE BLOCK -->
                <div>
                    <!-- Desktop layout  -->
                    <div class="hidden xl:block">
                        <img
                            src="/foto-l.png"
                            class="absolute left-0 top-[323px] w-[170px] h-[303px] object-cover rounded-15"
                            alt=""
                        />
                        <img
                            src="/foto-r.png"
                            class="absolute right-0 top-[323px] w-[227px] h-[303px] object-cover rounded-15"
                            alt=""
                        />
                    </div>

                    <!-- Mobile + Tablet layout -->
                    <div class="flex flex-col xl:hidden mt-0">
                        <img
                            src="/foto-l.png"
                            class="w-full h-[658px] md:h-[500px] rounded-15 object-cover mb-20"
                            alt=""
                        />
                        <img
                            src="/foto-r.png"
                            class="w-full h-[494px] md:h-[400px] rounded-15 object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
