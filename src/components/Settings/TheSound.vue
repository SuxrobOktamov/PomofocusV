<!-- eslint-disable no-alert -->
<script setup lang="ts">
    import type { alarm } from "../../types";
    const PomofocusStore = usePomofocusStore();
    const showOne = ref<boolean>(false);
    const showTwo = ref<boolean>(false);
    const alarmSoundName = ref<string>("Wood");
    const tickingSoundName = ref<string>("Brown Noise");

    function changeSound(id: number): void {
        if (id === 1) {
            showTwo.value = false;
            showOne.value = !showOne.value;
        }
        if (id === 2) {
            showOne.value = false;
            showTwo.value = !showTwo.value;
        }
    }
    function selectHandle(id: number, type: "alarm" | "ticking"): void {
        if (type === "alarm") {
            PomofocusStore.song_countTwo = id;
            PomofocusStore.loadSong();
            PomofocusStore.taskEndSound.play();
            PomofocusStore.alarmSongArr.map<alarm>((item) => {
                if (id === item.id) {
                    alarmSoundName.value = item.name;
                }
                return item;
            });
        }
        else {
            PomofocusStore.song_countOne = id;
            PomofocusStore.loadSong();
            PomofocusStore.Audio.play();
            PomofocusStore.tickingSongArr.map<alarm>((item) => {
                if (id === item.id) {
                    tickingSoundName.value = item.name;
                }
                return item;
            });
        }
        showTwo.value = false;
        showOne.value = false;
    }
    function changeSoundValue(type: "alarm" | "ticking"): void {
        PomofocusStore.loadSong();
        if (type === "alarm") {
            PomofocusStore.taskEndSound.volume = PomofocusStore.alarmSound / 100;
            PomofocusStore.taskEndSound.play();
        }
        else {
            PomofocusStore.Audio.volume = PomofocusStore.tickingSound / 100;
            PomofocusStore.Audio.play();
        }
    }
</script>

<template>
    <div class="px-6 pb-4">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-volume-up-filled class="text-[16px] font-bold" /> Sound
        </div>
        <div class="flex flex-wrap items-center justify-between mt-4 gap-y-2">
            <span>Alarm Sound</span>
            <div class="text-[14px] relative flex items-center justify-between text-[#787878] cursor-pointer w-[130px] p-[10px] rounded bg-[#ebebeb]" @click.self="changeSound(1)">
                {{ alarmSoundName }} <div i-carbon-caret-down class="text-[18px]" />
                <ul v-if="showOne" class="py-2 absolute w-full right-0 -bottom-61 bg-white rounded-md border shadow-2xl z-[999999]">
                    <li v-for="alarmArr in PomofocusStore.alarmSongArr" :key="alarmArr.id" class="p-3 box-border" @click="selectHandle(alarmArr.id, 'alarm')">
                        {{ alarmArr.name }}
                    </li>
                </ul>
            </div>
            <div class="w-full text-end flex items-center justify-end gap-1">
                <label>{{ PomofocusStore.alarmSound }}</label>
                <input v-model="PomofocusStore.alarmSound" type="range" min="0" max="100" class="focus:outline-none appearance-none rounded-full h-[7px]  bg-[#ccc]" @change="changeSoundValue('alarm')">
            </div>
        </div>
        <div class="flex flex-wrap items-center justify-between mt-4 gap-y-2 border-b border-b-2px pb-10">
            <span> Ticking Sound</span>
            <div class="text-[14px] flex items-center justify-between text-[#787878] cursor-pointer w-[130px] p-[10px] relative rounded bg-[#ebebeb]" @click.self="changeSound(2)">
                {{ tickingSoundName }}<div i-carbon-caret-down class="text-[18px]" />
                <ul v-if="showTwo" class="py-2 absolute w-full right-0 -bottom-61 bg-white rounded-md border shadow-2xl z-[999999]">
                    <li v-for="tickingArr in PomofocusStore.tickingSongArr" :key="tickingArr.id" class="p-3 box-border" @click="selectHandle(tickingArr.id, 'ticking')">
                        {{ tickingArr.name }}
                    </li>
                </ul>
            </div>
            <div class="w-full text-end flex items-center justify-end gap-1">
                <label>{{ PomofocusStore.tickingSound }}</label>
                <input v-model="PomofocusStore.tickingSound" type="range" min="0" max="100" class="focus:outline-none appearance-none rounded-full h-[7px]  bg-[#ccc]" @change="changeSoundValue('ticking')">
            </div>
        </div>
    </div>
</template>
