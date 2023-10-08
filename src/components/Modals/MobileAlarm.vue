<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <TransitionRoot as="template" :show="PomofocusStore.isAlarm">
        <Dialog as="div" class="relative z-10" @close="PomofocusStore.isAlarm = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <form class="fixed inset-0 z-10 overflow-y-auto" @submit.prevent>
                <div class="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div i-carbon-close class="text-[24px] text-[#575757] absolute cursor-pointer top-2 right-2 font-" aria-hidden="true" @click="PomofocusStore.isAlarm = false" />
                            <div class="text-start">
                                <DialogTitle as="p" class="text-start p-4 border-b text-[16px] font-bold leading-7 text-[#575757]">
                                    How To Use The Mobile Alarm Feature
                                </DialogTitle>
                                <div class="px-6 py-4">
                                    <div class="mb-[18px] text-[#575757] text-[18px]">
                                        The Mobile Alarm feature allows you to receive alarms on your mobile phone even when the screen is turned off. This feature is essential for using Pomofocus on your phone. (* Currently, the alarm sound is not supported on iOS.)
                                    </div>
                                    <div class="mb-[18px] text-[#575757] text-[18px]">
                                        You can also use this feature as a cross-device alarm, which means you can receive an alarm on your phone when the Pomodoro or break round is finished on your PC.
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[18px]">
                                        Here's how to enable this feature:
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            1. Create an Account on Pomofocus
                                        </h2>
                                        <p>First, you need to create an account on Pomofocus. You can do this by clicking the "Log in" button on the top right.</p>
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            2. Add Pomofocus to Your Home Screen
                                        </h2>
                                        <p class="mb-[16px]">
                                            Next, you need to add Pomofocus to your home screen. This is a one-time setup. To do this, open the Pomofocus app on your mobile phone and then click the "Add to Home Screen" button on your browser.
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/4.png" alt="alarm">
                                        <img class="w-[20rem] rounded-md shadow-md" src="/src/images/3.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            3. Register Your Device in Pomofocus <br> Settings
                                        </h2>
                                        <p class="mb-[16px]">
                                            Go to the "Settings" page and click the "Add this device" button on the "Mobile Alarm" section. You will see the "Allow Notification" prompt, click "Allow".
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/5.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            4. Select the Alarm Type
                                        </h2>
                                        <p class="mb-[16px]">
                                            You can choose the alarm type between "Pomodoro", "Breaks", "Both", and "None". For example, if you choose "Breaks", you will get an alarm only when a short/long break ends. If you choose "Both", you will get an alarm when both pomodoro and breaks ends.
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/6.png" alt="alarm">
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
