<template>
    <section
        id="contacts"
        class="w-full bg-white pb-40 lg:pb-[106px] px-[10px] lg:px-[100px]"
    >
        <div class="w-full max-w-[390px] lg:max-w-[1240px] mx-auto">
            <div
                class="flex items-center justify-center gap-20 lg:gap-40 mb-40 lg:mb-[80px]"
            >
                <div
                    class="w-[25px] lg:w-[35px] h-[4px] lg:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
                <h2
                    class="text-black text-[32px] lg:text-[64px] font-manrope font-semibold leading-[100%] tracking-[-0.03em] text-center transition-all"
                >
                    Контакти
                </h2>
                <div
                    class="w-[25px] lg:w-[35px] h-[4px] lg:h-[6px] bg-primary-brown/65 rounded-full transition-all"
                ></div>
            </div>

            <div
                class="relative flex flex-col lg:flex-row gap-40 lg:gap-40 items-center lg:items-stretch"
            >
                <div class="flex flex-col flex-1 min-w-0 z-10">
                    <div class="flex flex-col gap-[25px]">
                        <div
                            v-for="contact in contacts"
                            :key="contact.title"
                            class="flex items-start gap-20"
                        >
                            <div
                                class="w-[60px] h-[60px] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    :src="contact.icon"
                                    :alt="contact.title"
                                    class="w-[60px] h-[60px]"
                                />
                            </div>
                            <div class="flex flex-col gap-[10px] min-w-0">
                                <h3
                                    class="text-black text-[18px] font-manrope font-extrabold leading-[100%] tracking-[-0.03em]"
                                >
                                    {{ contact.title }}
                                </h3>
                                <component
                                    :is="contact.link ? 'a' : 'p'"
                                    :href="contact.link"
                                    class="text-black text-[16px] font-manrope font-normal leading-[100%] transition-colors"
                                    :class="
                                        contact.link
                                            ? 'hover:text-primary-brown'
                                            : ''
                                    "
                                >
                                    {{ contact.text }}
                                </component>
                            </div>
                        </div>
                    </div>

                    <div
                        class="block lg:hidden mt-[40px] w-full flex justify-center"
                    >
                        <img
                            :src="denttSrc"
                            alt="Dental"
                            class="w-[100%] h-auto object-contain"
                        />
                    </div>
                </div>

                <div
                    class="hidden min-[1301px]:block absolute left-[30%] bottom-[-10%] -translate-x-1/2 z-20 pointer-events-none w-[450px] h-auto"
                >
                    <img
                        :src="denttSrc"
                        alt="Dental"
                        class="w-[390px] h-[320px] lg:w-full lg:h-full object-contain drop-shadow-2xl"
                        style="transform-origin: bottom center"
                    />
                </div>

                <div
                    class="w-full lg:w-[600px] h-[246px] lg:h-[400px] rounded-15 overflow-hidden flex-shrink-0 lg:mt-0 z-0 relative"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8637!2d30.4875!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjQiTiAzMMKwMjknMTUuMCJF!5e0!3m2!1suk!2sua!4v1234567890"
                        style="border: 0"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const denttSrc = '/dentt.png';

const contacts = [
    {
        icon: '/map.svg',
        title: 'Адреса:',
        text: 'вулиця Коноплянська 22а, перший поверх',
    },
    {
        icon: '/time.svg',
        title: 'Графік роботи:',
        text: '9:00 - 19:00 за попереднім записом',
    },
    {
        icon: '/tel.svg',
        title: 'Телефон:',
        text: '(050) 387-83-54',
        link: 'tel:+380503878354',
    },
    {
        icon: '/mail.svg',
        title: 'Електронна пошта:',
        text: 'dr.lohvinova@gmail.com',
        link: 'mailto:dr.lohvinova@gmail.com',
    },
];
</script>

<style scoped></style>
