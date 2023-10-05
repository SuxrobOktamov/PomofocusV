<!-- eslint-disable no-alert -->
<script setup lang="ts">
    interface alarm {
        id: number
        name: string
    }
    const showOne = ref<boolean>(false);
    const showTwo = ref<boolean>(false);
    const alarmSound = ref<number>(100);
    const tickingSound = ref<number>(100);
    const alarmSoundName = ref<string>("Wood");
    const tickingSoundName = ref<string>("Brown Noise");
    const alarmArrs = ref<alarm[]>([
        { id: 0, name: "Bell" },
        { id: 1, name: "Bird" },
        { id: 2, name: "Digital" },
        { id: 3, name: "Kitchen" },
        { id: 4, name: "Wood" },
    ]);
    const tickingArrs = ref<alarm[]>([
        { id: 0, name: "None" },
        { id: 1, name: "Ticking Fast" },
        { id: 2, name: "Ticking Slow" },
        { id: 3, name: "White Noise" },
        { id: 4, name: "Brown Noise" },
    ]);
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
            alarmArrs.value.map<alarm>((item) => {
                if (id === item.id) {
                    alarmSoundName.value = item.name;
                }
                return item;
            });
        }
        else {
            tickingArrs.value.map<alarm>((item) => {
                if (id === item.id) {
                    tickingSoundName.value = item.name;
                }
                return item;
            });
        }
        showTwo.value = false;
        showOne.value = false;
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
                    <li v-for="alarmArr in alarmArrs" :key="alarmArr.id" class="p-3 box-border" @click="selectHandle(alarmArr.id, 'alarm')">
                        {{ alarmArr.name }}
                    </li>
                </ul>
            </div>
            <div class="w-full text-end flex items-center justify-end gap-1">
                <label>{{ alarmSound }}</label>
                <input v-model="alarmSound" type="range" min="0" max="100" class="focus:outline-none appearance-none rounded-full h-[7px]  bg-[#ccc]">
            </div>
        </div>
        <div class="flex flex-wrap items-center justify-between mt-4 gap-y-2 border-b border-b-2px pb-10">
            <span> Ticking Sound</span>
            <div class="text-[14px] flex items-center justify-between text-[#787878] cursor-pointer w-[130px] p-[10px] relative rounded bg-[#ebebeb]" @click.self="changeSound(2)">
                {{ tickingSoundName }}<div i-carbon-caret-down class="text-[18px]" />
                <ul v-if="showTwo" class="py-2 absolute w-full right-0 -bottom-61 bg-white rounded-md border shadow-2xl z-[999999]">
                    <li v-for="tickingArr in tickingArrs" :key="tickingArr.id" class="p-3 box-border" @click="selectHandle(tickingArr.id, 'ticking')">
                        {{ tickingArr.name }}
                    </li>
                </ul>
            </div>
            <div class="w-full text-end flex items-center justify-end gap-1">
                <label>{{ tickingSound }}</label>
                <input v-model="tickingSound" type="range" min="0" max="100" class="focus:outline-none appearance-none rounded-full h-[7px]  bg-[#ccc]">
            </div>
        </div>
    </div>
</template>
