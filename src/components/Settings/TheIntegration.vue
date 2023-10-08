<!-- eslint-disable no-alert -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="px-6 pb-4">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-arrows-horizontal class="text-[16px] font-bold" /> Integration
        </div>
        <div class="flex items-center justify-between mt-4">
            <span class="flex items-center gap-2">Todoist <div i-carbon-information-filled class="text-[#bdbdbd] cursor-pointer" @click="PomofocusStore.isTodoist = true" /></span>
            <button class="text-[14px] flex items-center justify-between text-[#787878] cursor-pointer w-[100px] p-[8px] relative shadow-md border rounded bg-[#fff]" @click="PomofocusStore.open = true" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                Connect<div i-carbon-locked class="text-[14px] pointer-events-none" />
            </button>
        </div>
        <div class="flex items-center justify-between mt-4 pb-10">
            <span class="flex items-center gap-2">Webhook<div i-carbon-information-filled class="text-[#bdbdbd] cursor-pointer" @click="PomofocusStore.isWebhook = true" /></span>
            <button class="text-[14px] flex items-center justify-between text-[#787878] cursor-pointer w-[70px] p-[8px] relative shadow-md border rounded bg-[#fff]" @click="PomofocusStore.open = true" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                Add<div i-carbon-locked class="text-[14px] pointer-events-none" />
            </button>
        </div>
        <Todoist />
        <Webhook />
        <Modal />
    </div>
</template>
