<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="m-auto max-w-[480px] w-full pt-[20px] pb-[30px] rounded-6px bg-[#ffffff1a] shadow-md">
        <div class="flex justify-center gap-1 lt-sm:gap-1">
            <button v-for="button in PomofocusStore.buttons" :key="button.id" :style="{ transition: `${button.active ? ' all 0.3' : 'none'}`, backgroundColor: `${button.active ? '#00000026' : 'transparent'}` }" class="overflow-hidden capitalize lt-sm:h-[28px] lt-sm:text-[14px] rounded-[4px] text-[16px] px-[12px] py-[2px] h-[28px] cursor-pointer text-white font-bold" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="PomofocusStore.clickHandle(button)">
                {{ button.name }}
            </button>
        </div>
        <div class="tracking-tighter text-[100px] font-bold mt-5 text-center lt-sm:mt-4 lt-sm:text-[70px]">
            {{ PomofocusStore.time >= 10 ? PomofocusStore.time : `0${PomofocusStore.time}` }} : {{ PomofocusStore.theSecond }}
        </div>
        <div class="relative w-full text-center flex items-center justify-center">
            <button :disabled="PomofocusStore.pomos === 0 && PomofocusStore.buttons[0].active" :style="{ color: PomofocusStore.bgColor, cursor: `${PomofocusStore.pomos === 0 && PomofocusStore.buttons[0].active ? 'not-allowed' : 'pointer'}`, opacity: `${PomofocusStore.pomos === 0 && PomofocusStore.buttons[0].active ? 0.6 : 1}` }" :class="PomofocusStore.isStart ? 'stop' : 'starts'" class="uppercase lt-sm:w-[170px] lt-sm:h-[45px] lt-sm:text-[20px]" @click="PomofocusStore.playHandle()">
                {{ PomofocusStore.isStart ? 'pause' : 'start' }}
            </button>
            <button v-if="PomofocusStore.isStart" class="absolute right-15 top-8 opacity-90" @click="PomofocusStore.nextHandler()">
                <div i-carbon-skip-forward-filled class="text-[28px]" />
            </button>
        </div>
    </div>
</template>
