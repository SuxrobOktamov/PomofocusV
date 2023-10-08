<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    import type { plan } from "@/types";
    const PomofocusStore = usePomofocusStore();
    const planArrs = ref<plan[]>([
        { id: 1, type: "MONTHLY", price: 1.99, name: "/ month", active: true },
        { id: 2, type: "YEARLY", price: 12, name: "/ year", active: false },
        { id: 3, type: "LIFETIME", price: 36, name: "/ lifetime", active: false },
    ]);
    function selectPlanHandler(id: number): void {
        planArrs.value.map<plan>((item) => {
            item.active = false;
            if (item.id === id) {
                item.active = true;
            }
            return item;
        });
    }
    function onClickOutside(): void {
        confirm("To purchase the premium plan, please login first.");
    }
</script>

<template>
    <TransitionRoot as="template" :show="PomofocusStore.open">
        <Dialog as="div" class="relative z-20" @close.self="PomofocusStore.open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[30rem] sm:p-6">
                            <div i-carbon-close class="text-[28px] absolute cursor-pointer top-2 right-2 font-" aria-hidden="true" @click="PomofocusStore.open = false" />
                            <div class="text-start">
                                <DialogTitle as="h2" class="text-[28px] font-bold leading-7 text-gray-900">
                                    Premium Plan
                                </DialogTitle>
                                <div class="mt-[38px] text-[#bdbdbd] font-bold text-[18px]">
                                    More abilities
                                </div>
                                <ul class="flex flex-col gap-2 mt-2">
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> Add projects
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> See yearly report
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> Add more than 3 templates
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> Download report
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> Import tasks from Todoist
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> Connect to other apps via webhook
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> No ads
                                    </li>
                                    <li class="flex items-center gap-2 text-[18px] text-[#575757] font-black">
                                        <div i-carbon-checkmark-outline class="text-[#ff7300]" /> ... and all the future updates
                                    </li>
                                </ul>
                                <div class="mt-[38px] text-[#bdbdbd] font-bold text-[18px]">
                                    Select plan
                                </div>
                                <div class="flex items-center justify-between mt-3">
                                    <div v-for="planArr in planArrs" :key="planArr.id" :style="{ borderColor: `${planArr.active ? '#d57572' : '#8a8a8a'}`, backgroundColor: `${planArr.active ? '#f8e8e7' : '#fff'}` }" class="shadow-md cursor-pointer flex flex-col items-center rounded-lg py-4 px-2 border-2px w-[30%]" @click="selectPlanHandler(planArr.id)">
                                        <div>{{ planArr.type }}</div>
                                        <h2 :style="{ color: `${planArr.active ? '#d57572' : '#8a8a8a'}` }" class="text-[34px] font-black">
                                            ${{ planArr.price }}
                                        </h2>
                                        <span>{{ planArr.name }}</span>
                                    </div>
                                </div>
                                <div class="mt-3 p-2 text-[#8a8a8a] bg-[#f0f0f0] text-[14px]">
                                    <p>* The subscription will be auto-renewed until you <br> unsubscribe.</p>
                                    <p class="pt-2">
                                        * You will be notified a week prior to the renewal date.
                                    </p>
                                </div>
                                <div class="cursor-pointer mt-3 p-3 bg-[#222] rounded shadow-md text-[#fff] flex items-center justify-center gap-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="onClickOutside()">
                                    <div i-carbon-rocket class="pointer-events-none" /> Purchase the plan
                                </div>
                                <div class="text-[#ccc] text-center p-3">
                                    or
                                </div>
                                <div class="cursor-pointer mt-3 p-3 border-1px border-[#ccc] rounded shadow-md text-[#222] flex items-center justify-center gap-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="onClickOutside()">
                                    <div i-carbon-rocket class="pointer-events-none" /> Try for 7 days
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
