<template>
    <!-- Modal Overlay -->
    <Transition name="modal-fade">
        <div
            v-if="isOpen"
            class="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 font-manrope"
            @click.self="closeModal"
        >
            <!-- Modal Container -->
            <Transition name="modal-scale">
                <div
                    v-if="isOpen"
                    class="relative bg-white w-full max-w-[1240px] max-h-[90vh] rounded-lg shadow-2xl overflow-hidden my-8"
                >
                    <!-- Close Button -->
                    <button
                        @click="closeModal"
                        class="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors z-10"
                        aria-label="Close"
                    >
                        <img
                            :src="closeModalDarkSrc"
                            alt="Close"
                            class="w-6 h-6"
                        />
                    </button>

                    <!-- Content -->
                    <div
                        class="overflow-y-auto max-h-[85vh] py-40 md:py-60 px-20 md:px-70 hide-scrollbar"
                    >
                        <!-- Title -->
                        <h1
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Політика конфіденційності Desktop
                        </h1>

                        <!-- Intro Text -->
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Залишаючи дані на сайті, Ви погоджуєтеся з Політикою
                            конфіденційності та захисту інформації.
                        </p>

                        <!-- Section 1 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Захист даних
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Адміністрація сайту openko-dental.clinic (далі Сайт)
                            не може передати або розкрити інформацію, надану
                            користувачем (далі Користувач) при реєстрації і
                            використанні функцій сайту третім особам, крім
                            випадків, описаних законодавством країни, на
                            території якої користувач веде свою діяльність.
                        </p>

                        <!-- Section 2 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Отримання персональної інформації
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Для комунікації на сайті користувач зобов'язаний
                            внести деяку персональну інформацію. Для перевірки
                            наданих даних, сайт залишає за собою право вимагати
                            докази ідентичності в онлайн або офлайн режимах.
                        </p>

                        <!-- Section 3 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Використання персональної інформації
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Сайт використовує особисту інформацію Користувача
                            для обслуговування і для поліпшення якості послуг,
                            що надаються. Частина персональної інформації може
                            бути надана банку або платіжній системі, в разі,
                            якщо надання цієї інформації обумовлено процедурою
                            переказу коштів платіжній системі, послугами якої
                            Користувач бажає скористатися. Сайт докладає всіх
                            зусиль для збереження в цілості особистих даних
                            Користувача. Особиста інформація може бути розкрита
                            у випадках, описаних законодавством, або коли
                            адміністрація буде вважати подібні дії необхідними
                            для дотримання юридичної процедури, судового
                            розпорядження або легального процесу необхідного для
                            роботи Користувача з Сайтом. В інших випадках, ні
                            при яких умовах, інформація, яку Користувач передає
                            Сайту, не буде розкрита третім особам.
                        </p>

                        <!-- Section 4 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Комунікація
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Після того, як Користувач залишив дані, він отримує
                            повідомлення, яке підтверджує його успішну
                            реєстрацію. Користувач має право в будь-який момент
                            припинити отримання інформаційних бюлетенів
                            скориставшись відповідним сервісом в Сайті.
                        </p>

                        <!-- Section 5 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Посилання
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            На сайті можуть міститися посилання на інші сайти.
                            Сайт не несе відповідальності за зміст, якість і
                            політику безпеки цих сайтів. Дана заява про
                            конфіденційність відноситься тільки до інформації,
                            розміщеної безпосередньо на сайті.
                        </p>

                        <!-- Section 6 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Безпека
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em] mb-30 md:mb-30"
                        >
                            Сайт забезпечує безпеку облікового запису
                            Користувача від несанкціонованого доступу.
                        </p>

                        <!-- Section 7 -->
                        <h2
                            class="text-black text-[16px] md:text-[20px] font-unbounded font-medium leading-[100%] tracking-[-0.03em] mb-15 md:mb-30"
                        >
                            Повідомлення про зміни
                        </h2>
                        <p
                            class="text-black text-[16px] font-unbounded font-light leading-[100%] tracking-[-0.03em]"
                        >
                            Сайт залишає за собою право вносити зміни в Політику
                            конфіденційності без додаткових повідомлень.
                            Нововведення набирають чинності з моменту їх
                            опублікування. Користувачі можуть відслідковувати
                            зміни в Політиці конфіденційності самостійно.
                        </p>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
interface Props {
    isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    close: [];
}>();

const closeModalDarkSrc = '/close-modal-dark.svg';

const closeModal = () => {
    emit('close');
};

const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
        closeModal();
    }
};

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        }
    },
);

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
}

.modal-fade-enter-active {
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-leave-active {
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-scale-enter-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-scale-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.modal-scale-enter-from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
}

.modal-scale-leave-to {
    opacity: 0;
    transform: scale(0.98) translateY(-10px);
}
</style>
