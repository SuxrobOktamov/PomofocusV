<!-- eslint-disable no-alert -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
    const isActiveOne = ref<boolean>(true);
    function toggleHandler() {
        PomofocusStore.isDark = !PomofocusStore.isDark;
    }
    function changeColors(id: number): void {
        PomofocusStore.countColor = id;
        PomofocusStore.isColor = true;
    }
</script>

<template>
    <div class="px-6 pb-4">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-interactive-segmentation-cursor class="text-[16px] font-bold" /> Theme
        </div>
        <div class="flex items-center justify-between mt-4">
            <span class="flex items-center gap-2">Color Themes </span>
            <div class="flex items-center justify-center gap-3">
                <div :style="{ backgroundColor: PomofocusStore.colorOne }" class="cursor-pointer w-7 h-7 rounded-md" @click="changeColors(0)" />
                <div :style="{ backgroundColor: PomofocusStore.colorTwo }" class="cursor-pointer w-7 h-7 rounded-md" @click="changeColors(1)" />
                <div :style="{ backgroundColor: PomofocusStore.colorThree }" class="cursor-pointer w-7 h-7 rounded-md" @click="changeColors(2)" />
            </div>
        </div>
        <div class="flex items-center justify-between mt-5">
            <span class="flex items-center gap-2">Dark Mode when running </span>
            <div :style="{ backgroundColor: `${PomofocusStore.isDark ? '#84c733cc' : '#ccc'}` }" class="cursor-pointer w-[60px] h-[30px] p-[2px] relative rounded-full bg-[#ccc]" @click="toggleHandler()">
                <div :style="{ transform: `${PomofocusStore.isDark ? 'translateX(115%)' : 'translateX(0%)'}` }" class="w-[26px] h-[26px] rounded-full bg-white toggle" />
            </div>
        </div>
        <div class="flex flex-wrap items-center justify-between mt-5 gap-y-2 border-b border-b-2px pb-10">
            <span> Small Window</span>
            <button class="text-[14px] flex items-center justify-between text-[#787878] cursor-pointer w-[80px] p-[8px] relative shadow-md border rounded bg-[#fff]" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                Open<div i-carbon-chat-launch class="text-[18px] pointer-events-none" />
            </button>
        </div>
    </div>
    <ModalColor />
</template>
