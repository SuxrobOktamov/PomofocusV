<!-- eslint-disable no-alert -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
    function toggleHandler(e: number) {
        if (e === 1) {
            PomofocusStore.isStartBreaks = !PomofocusStore.isStartBreaks;
        }
        if (e === 2) {
            PomofocusStore.isStartPomodoros = !PomofocusStore.isStartPomodoros;
        }
    }
</script>

<template>
    <div class="py-4 px-6">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-time class="text-[16px] font-bold" /> Timer
        </div>
        <div class="mt-[20px] flex items-center gap-1 text-[#000] text-[16px]">
            Time (minutes)
        </div>
        <div class="mt-[10px] flex gap-5">
            <div class="flex flex-col gap-1 w-full">
                <label class="text-[#bbb] font-black text-[14px]">
                    Pomodoro
                </label>
                <input v-model="PomofocusStore.pomodoroVal" class="w-full bg-[#efefef] text-[#555] rounded p-2 outline-none" type="number">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label class="text-[#bbb] font-black text-[14px]">
                    Short Break
                </label>
                <input v-model="PomofocusStore.shortVal" class="w-full bg-[#efefef] text-[#555] rounded p-2 outline-none" type="number">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label class="text-[#bbb] font-black text-[14px]">
                    Long break
                </label>
                <input v-model="PomofocusStore.longVal" class="w-full bg-[#efefef] text-[#555] rounded p-2 outline-none" type="number">
            </div>
        </div>
        <div class="flex items-center justify-between mt-4">
            <span>Auto Start Breaks</span>
            <div :style="{ backgroundColor: `${PomofocusStore.isStartBreaks ? '#84c733cc' : '#ccc'}` }" class="cursor-pointer w-[60px] h-[30px] p-[2px] relative rounded-full bg-[#ccc]" @click="toggleHandler(1)">
                <div :style="{ transform: `${PomofocusStore.isStartBreaks ? 'translateX(115%)' : 'translateX(0%)'}` }" class="w-[26px] h-[26px] rounded-full bg-white pointer-events-none" />
            </div>
        </div>
        <div class="flex items-center justify-between mt-4">
            <span>Auto Start Pomodoros</span>
            <div :style="{ backgroundColor: `${PomofocusStore.isStartPomodoros ? '#84c733cc' : '#ccc'}` }" class="cursor-pointer w-[60px] h-[30px] p-[2px] relative rounded-full bg-[#ccc]" @click="toggleHandler(2)">
                <div :style="{ transform: `${PomofocusStore.isStartPomodoros ? 'translateX(115%)' : 'translateX(0%)'}` }" class="w-[26px] h-[26px] rounded-full bg-white pointer-events-none" />
            </div>
        </div>
        <div class="border-b border-b-2px flex items-center justify-between mt-4 pb-10">
            <span>Long Break interval</span>
            <input value="1" class="w-[70px] bg-[#efefef] text-[#555] rounded p-2 outline-none" type="number">
        </div>
    </div>
</template>
