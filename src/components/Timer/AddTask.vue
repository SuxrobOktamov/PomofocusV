<!-- eslint-disable no-console -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
    const isNote = ref<boolean>(true);
    const repeat = ref<number>(1);
    const youWork = ref<string>("");
    const notes = ref<string>("");
    function showHandler(): void {
        isNote.value = false;
    }
    function updateValue(e: any): void {
        repeat.value = e.target.value;
    }
    function clickHandler(type: "increase" | "decries"): void {
        if (type === "decries") {
            if (repeat.value >= 0) {
                repeat.value++;
            }
        }
        else {
            if (repeat.value > 0) {
                repeat.value--;
            }
        }
    }
    function submitHandle(): void {
        if (youWork.value.length !== 0 && repeat.value) {
            isNote.value = true;
            youWork.value = "";
            repeat.value = 1;
            notes.value = "";
        }
    }
    function addTaskHandler(type: "add" | "hide"): void {
        if (type === "add") {
            PomofocusStore.isAddTask = false;
        }
        else {
            PomofocusStore.isAddTask = true;
            isNote.value = true;
        }
    }
</script>

<template>
    <form @submit.prevent="submitHandle()">
        <div class="m-auto max-w-[480px] w-full mt-5">
            <div class="relative flex items-center justify-between mb-5 pb-[14px] border-w-[2px] border-b-2px border-b-[#fff9]">
                <span class="text-[18px] font-bold tracking-widest">Task</span>
                <button class="px-[1px] py-[1px] bg-[#fff3] rounded shadow" @click.self="PomofocusStore.hiddenHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
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
            <button v-if="PomofocusStore.isAddTask" class="w-full flex text-[18px] cursor-pointer opacity-60 p-4 border-dashed border-2px bg-[#0000001a] rounded-lg items-center justify-center gap-2" @click="addTaskHandler('add')">
                <div i-carbon-add-filled />
                <span>Add Task</span>
            </button>
            <div v-else class="bg-white rounded-lg shadow-md pt-5 overflow-hidden">
                <input v-model="youWork" class="pl-5 pr-5 w-full rounded text-[22px] border-none text-[#555] box-border font-bold outline-none" type="text" placeholder="What are you working on?">
                <div class="pl-5 pr-5 text-[#555] w-full text-start mt-5 flex flex-wrap items-end gap-1">
                    <span class="w-full block pb-2 font-bold">Est Pomodoros</span>
                    <input :value="repeat" type="number" min="0" class="mr-3 rounded bg-[#efefef] text-[16px] p-[10px] border-none text-[#555] box-border font-bold w-[75px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" @input="updateValue($event)">
                    <button class="shadow-md text-center rounded cursor-pointer text-[14px] px-3 py-2 inline-block w-[40px] bg-white text-[#555] border border-[#dfdfdf]" @click="clickHandler('increase')" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                        <div class="i-carbon-caret-down text-black opacity-60 pointer-events-none" />
                    </button>
                    <button class="shadow-md text-center rounded cursor-pointer text-[14px] px-3 py-2 inline-block w-[40px] bg-white text-[#555] border border-[#dfdfdf]" @click="clickHandler('decries')" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                        <div class="i-carbon-caret-up text-black opacity-60 pointer-events-none" />
                    </button>
                </div>
                <div class="pl-5 pr-5 flex pt-4 gap-3 flex-wrap">
                    <button v-if="isNote" class="underline text-center rounded opacity-90 text-[14px] font-bold text-[#0006]" @click="showHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                        +Add Note
                    </button>
                    <textarea v-else v-model="notes" class="rounded p-2 block w-full outline-none bg-[#efefef] text-[#555]" placeholder="Some notes" />
                    <button class="underline flex gap-1 items-center text-center rounded opacity-90 text-[14px] font-bold text-[#0006]" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                        +Add Project
                        <div class="i-carbon-locked text-3" />
                    </button>
                </div>
                <div class="mt-5 w-full p-4 bg-[#efefef] flex items-center justify-end gap-2">
                    <button class="min-w-[70px] text-[#888] font-bold text-[12px] opacity-90 text-center px-3 py-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="addTaskHandler('hide')">
                        Cancel
                    </button>
                    <button type="submit" class="shadow-md min-w-[70px] text-[#fff] inline-block rounded bg-[#222] font-bold text-[12px] text-center px-3 py-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
