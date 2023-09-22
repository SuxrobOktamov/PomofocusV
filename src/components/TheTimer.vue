<!-- eslint-disable no-console -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="w-full text-center px-2 mx-auto max-w-[620px]">
        <div class="h-1px bg-white mb-[40px] w-0" />
        <div class="m-auto max-w-[480px] w-full pt-[20px] pb-[30px] rounded-6px bg-[#ffffff1a] shadow-md">
            <div class="flex justify-center gap-1 lt-sm:gap-1">
                <button v-for="button in PomofocusStore.buttons" :key="button.id" :class="button.active && 'active'" class="overflow-hidden capitalize lt-sm:h-[28px] lt-sm:text-[14px] rounded-[4px] text-[16px] px-[12px] py-[2px] h-[28px] cursor-pointer text-white font-bold " @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="PomofocusStore.clickHandle($event, button.id)">
                    {{ button.name }}
                </button>
            </div>
            <div class="tracking-tighter text-[100px] font-bold mt-5 text-center lt-sm:mt-4 lt-sm:text-[70px]">
                38 : 00
            </div>
            <div class="inline-block w-full text-center">
                <button :class="PomofocusStore.isStart ? 'stop' : 'starts'" class="uppercase lt-sm:w-[170px] lt-sm:h-[45px] lt-sm:text-[20px]" @click="PomofocusStore.startHandler()">
                    {{ PomofocusStore.isStart ? 'pause' : 'start' }}
                </button>
            </div>
        </div>
        <div class="mt-5 cursor-pointer select-none inline-block text-[16px] opacity-80 mb-1">
            #1
        </div>
        <div class="text-[18px] font-bold text-white">
            Time to focus!
        </div>
        <div class="m-auto max-w-[480px] w-full mt-5">
            <div class="relative flex items-center justify-between mb-5 pb-[14px] border-w-[2px] border-b-2px border-b-[#fff9]">
                <span class="text-[18px] font-bold tracking-widest">Task</span>
                <button class="px-[1px] py-[1px] bg-[#fff3] rounded shadow" @click="PomofocusStore.hiddenHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                    <div i-carbon-overflow-menu-vertical class="font-extrabold text-[24px] pointer-events-none" />
                </button>
                <div v-if="PomofocusStore.isHidden" class="absolute z-50 w-[210px] right-0 -bottom-63 rounded py-1 shadow-md bg-white">
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-trash-can class="font-black" />
                        <span>Clear finished tasks</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-checkmark class="font-black" />
                        <span>Clear act pomodoros</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-save class="font-black" />
                        <span>Save as template</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-add class="font-black" />
                        <span>Add from templates</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-ibm-data-replication class="font-black" />
                        <span>Import from Todoist</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]">
                        <div i-carbon-trash-can class="font-black" />
                        <span>Clear all tasks</span>
                    </button>
                </div>
            </div>
            <div class="text-[18px] cursor-pointer opacity-60 p-4 border-dashed border-2px bg-[#0000001a] rounded-lg flex items-center justify-center gap-2">
                <div i-carbon-add-filled />
                <span>Add Task</span>
            </div>
        </div>
    </div>
</template>
