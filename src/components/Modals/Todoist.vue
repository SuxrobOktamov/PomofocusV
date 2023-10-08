<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <TransitionRoot as="template" :show="PomofocusStore.isTodoist">
        <Dialog as="div" class="relative z-10" @close="PomofocusStore.isTodoist = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <form class="fixed inset-0 z-10 overflow-y-auto" @submit.prevent>
                <div class="relative flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div i-carbon-close class="text-[24px] text-[#575757] absolute cursor-pointer top-2 right-2 font-" aria-hidden="true" @click="PomofocusStore.isTodoist = false" />
                            <div class="text-start">
                                <DialogTitle as="p" class="text-start p-4 border-b text-[16px] font-bold leading-7 text-[#575757]">
                                    How To Use Todoist Integration
                                </DialogTitle>
                                <div class="px-6 py-4">
                                    <div class="mb-[18px] text-[#575757] text-[18px]">
                                        With our <a href="https://todoist.com/" target="_blank" class="text-[#db524d] font-black">Todoist</a> integration feature, you can easily import your tasks from Todoist into the Pomofocus app. Here are five key features and how you can use them:
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            1. How to Import Todoist Tasks
                                        </h2>
                                        <p class="mb-[16px]">
                                            To import your Todoist tasks into the Pomofocus app, simply click the "Import from Todoist" button in the task section. If you've already connected your Todoist account, your tasks will appear automatically. If you haven't connected yet, you'll be directed to an authentication page.
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/import-tasks.png" alt="alarm">
                                        <p class="mb-[16px]">
                                            In the task window, you can select the tasks you want to import and then click "Import" to bring them into the Pomofocus app.
                                        </p>
                                        <img class="rounded-md shadow-md" src="/src/images/import-tasks2.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            2. Check & Uncheck Syncs with Todoist
                                        </h2>
                                        <p class="mb-[16px]">
                                            When you import tasks from Todoist into the Pomofocus app, the task state will be automatically synced between the two platforms. This means that if you check a task in Pomofocus, it will also be checked in Todoist and if you uncheck it in Pomofocus, it will also be unchecked in Todoist.
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/check.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            3. Set Estimated Pomodoros in Todoist
                                        </h2>
                                        <p class="mb-[16px]">
                                            You can set the estimated number of Pomodoros for a task in Todoist by adding a number at the end of the task title. The format is not strict, but the following examples in the image works.
                                        </p>
                                        <img class="rounded-md shadow-md mb-[16px]" src="/src/images/format.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            4. Set Due Date for Better Sorting
                                        </h2>
                                        <p class="mb-[16px]">
                                            You can set a due date for tasks in Todoist. This due date will be used to sort the tasks when you view them in the Pomofocus app.
                                        </p>
                                        <img class="w-[20rem] rounded-md shadow-md mb-[16px]" src="/src/images/duedate.png" alt="alarm">
                                    </div>
                                    <div class="mb-[30px] text-[#575757] text-[16px]">
                                        <h2 class="font-black text-[#222] text-[22px] mb-[16px]">
                                            5. Write Notes in the Desciprion
                                        </h2>
                                        <p class="mb-[16px]">
                                            The description of tasks in Todoist will be imported as notes in the Pomofocus app.
                                        </p>
                                        <img class="rounded-md shadow-md mb-[16px]" src="/src/images/description.png" alt="alarm">
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
