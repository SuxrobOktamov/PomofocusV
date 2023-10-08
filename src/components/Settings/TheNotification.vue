<!-- eslint-disable no-alert -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
    const isShow = ref<boolean>(false);
    const showName = ref<"Every" | "Last">("Every");
    function addDeviceHandler(): void {
        alert("Please log in use this feature.");
    }
    function showHandler(id: number): void {
        if (id === 1) {
            isShow.value = !isShow.value;
        }
        else if (id === 2) {
            showName.value = "Every";
            isShow.value = false;
        }
        else {
            showName.value = "Last";
            isShow.value = false;
        }
    }
</script>

<template>
    <div class="px-6 pb-4" @close="isShow = false">
        <div class="uppercase mt-[4px] flex items-center gap-1 text-[#bdbdbd] font-bold text-[16px]">
            <div i-carbon-notification class="text-[16px] font-bold" /> Notification
        </div>
        <div class="flex items-center justify-between mt-4">
            <span class="flex items-center gap-2">Reminder</span>
            <div class="flex items-center gap-2">
                <div class="text-[14px] relative flex items-center justify-between text-[#787878] cursor-pointer w-[80px] p-[10px] rounded bg-[#ebebeb]" @click.self="showHandler(1)">
                    {{ showName }}<div i-carbon-caret-down class="text-18px" />
                    <div v-if="isShow" class="py-2 absolute w-full right-0 top-11 bg-white rounded-md border shadow-2xl z-[999999]">
                        <div class="p-3 box-border" @click.self="showHandler(2)">
                            Every
                        </div>
                        <div class="p-3 box-border" @click.self="showHandler(3)">
                            Last
                        </div>
                    </div>
                </div>
                <input value="1" class="w-[80px] bg-[#efefef] text-[#555] rounded p-2 outline-none" type="number">
                <span>min</span>
            </div>
        </div>
        <div class="flex items-center justify-between mt-4 border-b border-b-2px pb-10">
            <span class="flex items-center gap-2">Mobile Alarm <div i-carbon-information-filled class="text-[#bdbdbd] cursor-pointer" @click="PomofocusStore.isAlarm = true" /></span>
            <button class="gap-1 flex items-center underline text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="addDeviceHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                <div i-carbon-add class="font-black pointer-events-none" />
                <span class="pointer-events-none">Add this device</span>
            </button>
        </div>
        <MobileAlarm />
    </div>
</template>
