<template>
    <header class="w-full fixed top-0 left-0 z-50">
        <div
            class="w-full h-[70px] mx-auto flex items-center justify-between px-20 lg:px-60 transition-all border border-white/25 rounded-b-15"
            style="
                background: linear-gradient(
                    180deg,
                    #000000 0%,
                    rgba(0, 0, 0, 0) 116.43%
                );
            "
        >
            <!-- Logo -->
            <div class="flex items-center flex-shrink-0 z-50">
                <img :src="logoSrc" alt="L-Dental" class="h-10" />
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-60 mx-auto">
                <a
                    v-for="item in menuItems"
                    :key="item.name"
                    :href="item.link"
                    class="nav-link relative text-white text-[14px] font-manrope font-normal leading-none"
                >
                    {{ item.name }}
                </a>
            </nav>

            <!-- Desktop Call Button -->
            <div class="hidden lg:flex items-center flex-shrink-0">
                <CallButton @click="handleCallClick" />
            </div>

            <!-- Mobile Burger Menu Button -->
            <button
                @click="toggleMenu"
                class="lg:hidden w-8 h-8 flex items-center justify-center z-50 relative"
                aria-label="Toggle menu"
            >
                <img
                    v-if="!isMenuOpen"
                    :src="burgerSrc"
                    alt="Menu"
                    class="w-8 h-8"
                />
                <img
                    v-else
                    :src="closeSrc"
                    alt="Close"
                    class="w-8 h-8 md:w-[42px] md:h-[42px]"
                />
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <Transition name="menu">
            <div
                v-if="isMenuOpen"
                class="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
            >
                <nav class="pt-[90px] px-30 pb-30">
                    <div v-for="item in menuItems" :key="item.name">
                        <a
                            :href="item.link"
                            @click="closeMenu"
                            class="block text-primary-brown text-[24px] md:text-[32px] font-manrope font-semibold leading-[100%] mx-30 pt-20 pb-[10px]"
                        >
                            {{ item.name }}
                        </a>
                        <div
                            class="max-w-full mx-30 h-px border-t border-primary-brown md:border-[1.5px]"
                        ></div>
                    </div>

                    <!-- Mobile Menu Image -->
                    <div class="mt-40 flex justify-center px-30">
                        <img
                            :src="dentSrc"
                            alt="Dental"
                            class="w-full md:max-w-[800px] h-auto object-contain"
                        />
                    </div>
                </nav>
            </div>
        </Transition>

        <!-- Call Modal -->
        <AppointmentModal :is-open="isCallModalOpen" @close="closeCallModal" />
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CallButton from '~/components/Button.vue';
import AppointmentModal from '~/components/AppointmentModal.vue';

const logoSrc = '/logo.svg';
const burgerSrc = '/burger.svg';
const closeSrc = '/close.svg';
const dentSrc = '/dent.png';

const menuItems = [
    { name: 'Головна', link: '#' },
    { name: 'Про нас', link: '#about' },
    { name: 'Послуги', link: '#services' },
    { name: 'Ціни', link: '#prices' },
    { name: 'Контакти', link: '#contacts' },
];

const isMenuOpen = ref(false);
const isCallModalOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;

    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};

const handleCallClick = () => {
    isCallModalOpen.value = true;
};

const closeCallModal = () => {
    isCallModalOpen.value = false;
};
</script>

<style scoped>
.nav-link {
    position: relative;
    display: inline-block;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 0.7px;
    background-color: theme('colors.primary.brown');
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link:active::after {
    width: 100%;
}

.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.menu-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.menu-enter-to,
.menu-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
