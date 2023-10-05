<!-- eslint-disable no-alert -->
<script setup lang="ts">
    const isActiveOne = ref<boolean>(true);
    const isActiveTwo = ref<boolean>(true);
    function toggleHandler(e: number) {
        // eslint-disable-next-line max-statements-per-line
        if (e === 1) { isActiveOne.value = !isActiveOne.value; }
        // eslint-disable-next-line max-statements-per-line
        if (e === 2) { isActiveTwo.value = !isActiveTwo.value; }
    }
</script>

<template>
    <div class="px-6 pb-4">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-task-complete class="text-[16px] font-bold" /> Task
        </div>
        <div class="flex items-center justify-between mt-4">
            <span class="flex items-center gap-2">Auto Start Breaks <div i-carbon-information-filled class="text-[#bdbdbd]" /></span>
            <div :style="{ backgroundColor: `${isActiveOne ? '#84c733cc' : '#ccc'}` }" class="cursor-pointer w-[60px] h-[30px] p-[2px] relative rounded-full bg-[#ccc]" @click="toggleHandler(1)">
                <div :style="{ transform: `${isActiveOne ? 'translateX(115%)' : 'translateX(0%)'}` }" class="w-[26px] h-[26px] rounded-full bg-white toggle" />
            </div>
        </div>
        <div class="flex items-center justify-between mt-4 border-b border-b-2px pb-10">
            <span class="flex items-center gap-2">Auto Start Pomodoros <div i-carbon-information-filled class="text-[#bdbdbd]" /></span>
            <div :style="{ backgroundColor: `${isActiveTwo ? '#84c733cc' : '#ccc'}` }" class="cursor-pointer w-[60px] h-[30px] p-[2px] relative rounded-full bg-[#ccc]" @click="toggleHandler(2)">
                <div :style="{ transform: `${isActiveTwo ? 'translateX(115%)' : 'translateX(0%)'}` }" class="w-[26px] h-[26px] rounded-full bg-white toggle" />
            </div>
        </div>
    </div>
</template>
