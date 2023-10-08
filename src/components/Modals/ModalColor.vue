<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    const PomofocusStore = usePomofocusStore();
    function changeColor(id: number): void {
        PomofocusStore.ColorArrs[PomofocusStore.countColor].obj.map((item) => {
            item.active = false;
            if (id === item.id) {
                item.active = true;
            }
            return item;
        });
        PomofocusStore.isColor = false;
    }
</script>

<template>
    <TransitionRoot as="template" :show="PomofocusStore.isColor">
        <Dialog as="div" class="relative z-10" @close="PomofocusStore.isColor = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <form class="fixed inset-0 z-10 overflow-y-auto" @submit.prevent>
                <div class="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                            <div class="text-start">
                                <DialogTitle as="p" class="text-center p-4 border-b text-[16px] font-bold leading-7 text-[#575757]">
                                    Pick a color for Pomodoro
                                </DialogTitle>
                                <div class="p-5 flex flex-wrap gap-3">
                                    <div v-for="ColorArr in PomofocusStore.ColorArrs[PomofocusStore.countColor].obj" :key="ColorArr.id" :style="{ backgroundColor: ColorArr.color }" class="cursor-pointer w-14 h-14 rounded-lg flex items-center justify-center" @click="changeColor(ColorArr.id)">
                                        <div v-show="ColorArr.active" i-carbon-checkmark class="text-white text-[20px] font-black" />
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </form>
        </Dialog>
    </TransitionRoot>
</template>
