<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <TransitionRoot as="template" :show="PomofocusStore.isWebhook">
        <Dialog as="div" class="relative z-10" @close="PomofocusStore.isWebhook = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <form class="fixed inset-0 z-10 overflow-y-auto" @submit.prevent>
                <div class="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div i-carbon-close class="text-[24px] text-[#575757] absolute cursor-pointer top-2 right-2 font-" aria-hidden="true" @click="PomofocusStore.isWebhook = false" />
                            <div class="text-start">
                                <DialogTitle as="p" class="text-start p-4 border-b text-[16px] font-bold leading-7 text-[#575757]">
                                    How To Use Webhook Integration
                                </DialogTitle>
                                <div class="px-6 py-4">
                                    <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                        What is Webhook?
                                    </h2>
                                    <div class="mb-[18px] text-[#575757] text-[18px]">
                                        Webhook is a way to send event data from Pomofocus to other applications. For example, you can send the timer start/stop events to messaging apps like Slack and update your status there. Or, you can send the events to time tracking apps like Toggle for more advanced reports.
                                    </div>
                                    <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                        How to make it work
                                    </h2>
                                    <div class="mb-[18px] text-[#575757] text-[18px]">
                                        To make it work, you need to create a webhook URL in the application to which you want to send the data. If you are not sure about the application you want to connect to, you can visit a service like Zapier, Make, or IFTTT and choose from the various applications listed there. Then, copy the generated URL and paste it into the Webhook URL field in Pomofocus settings.
                                    </div>
                                    <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                        The data to be sent
                                    </h2>
                                    <table class="border-collapse border-1px border-[#ddd]">
                                        <tr>
                                            <th class="border-1px border-[#ddd] p-2 text-left">
                                                Field
                                            </th>
                                            <th class="border-1px border-[#ddd] p-2 text-left">
                                                Description
                                            </th>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                type
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Type of the event (start, pause, finish)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                round
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                The round you are in (pomodoro, short_break, long_break)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                task
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Name of the current task
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                project
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Project name of the current task
                                            </td>
                                        </tr><tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                session_start
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Timestamp of starting the round
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                session_end
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Timestamp of pausing/finishing the round
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-1px border-[#ddd] p-2">
                                                seconds
                                            </td>
                                            <td class="border-1px border-[#ddd] p-2">
                                                Seconds passed from the previous start
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </form>
        </Dialog>
    </TransitionRoot>
</template>
