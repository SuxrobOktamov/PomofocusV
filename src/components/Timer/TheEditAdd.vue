<script setup lang="ts">
    import type { task } from "../../types/type";

    defineProps({ tasks: { required: false, type: Number } });
    const PomofocusStore = usePomofocusStore();
    function showHandler(): void {
        PomofocusStore.isNote = false;
    }
    function updateValue(e: any): void {
        PomofocusStore.repeat = +e.target.value;
    }
    function clickHandler(type: "increase" | "decries"): void {
        if (type === "decries") {
            if (PomofocusStore.repeat >= 0) {
                PomofocusStore.repeat++;
            }
        }
        else {
            if (PomofocusStore.repeat > 0) {
                PomofocusStore.repeat--;
            }
        }
    }
    function addTaskHandler(type: "add" | "hide", id?: number): void {
        if (type === "add") {
            PomofocusStore.isAddTask = false;
        }
        else {
            PomofocusStore.isAddTask = true;
            PomofocusStore.isNote = true;
        }

        PomofocusStore.tasks.map<task>((item: task) => {
            if (item.id === id) {
                item.isEdit = true;
            }
            return item;
        });
    }
    function deleteHandler(id?: number): void {
        PomofocusStore.tasks = PomofocusStore.tasks.filter((item: task) => (item.id !== id));
    }
    function submitHandle(id?: number): void {
        if (PomofocusStore.youWork.length !== 0 && PomofocusStore.repeat && id) {
            PomofocusStore.tasks.map<task>((item: task) => {
                if (item.id === id) {
                    item.count = +PomofocusStore.repeat;
                    item.work = PomofocusStore.youWork;
                    item.title = PomofocusStore.notes;
                    item.isEdit = true;
                    if (item.title.length) {
                        PomofocusStore.isNote = false;
                    }
                    else {
                        PomofocusStore.isNote = true;
                    }
                }
                return item;
            });
        }
        if (PomofocusStore.youWork.length !== 0 && PomofocusStore.repeat && !id) {
            const obj = ref<task>({ id: Date.now(), work: PomofocusStore.youWork, count: PomofocusStore.repeat, title: PomofocusStore.notes, active: false, isEdit: true, completed: false });
            PomofocusStore.tasks.push(obj.value);
            PomofocusStore.isNote = true;
            PomofocusStore.youWork = "";
            PomofocusStore.repeat = 1;
            PomofocusStore.notes = "";
        }
    }
</script>

<template>
    <div class="bg-white rounded-lg shadow-md pt-5 overflow-hidden">
        <input v-model="PomofocusStore.youWork" class="pl-5 pr-5 w-full rounded text-[22px] border-none text-[#555] box-border font-bold outline-none" type="text" placeholder="What are you working on?">
        <div class="pl-5 pr-5 text-[#555] w-full text-start mt-5 flex flex-wrap items-end gap-1">
            <span class="w-full block pb-2 font-bold">Est Pomodoros</span>
            <input :value="+PomofocusStore.repeat" type="number" min="0" class="mr-3 rounded bg-[#efefef] text-[16px] p-[10px] border-none text-[#555] box-border font-bold w-[75px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" @input="updateValue($event)">
            <button class="shadow-md text-center rounded cursor-pointer text-[14px] px-3 py-2 inline-block w-[40px] bg-white text-[#555] border border-[#dfdfdf]" @click="clickHandler('increase')" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                <div class="i-carbon-caret-down text-black opacity-60 pointer-events-none" />
            </button>
            <button class="shadow-md text-center rounded cursor-pointer text-[14px] px-3 py-2 inline-block w-[40px] bg-white text-[#555] border border-[#dfdfdf]" @click="clickHandler('decries')" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                <div class="i-carbon-caret-up text-black opacity-60 pointer-events-none" />
            </button>
        </div>
        <div class="pl-5 pr-5 flex pt-4 gap-3 flex-wrap">
            <button v-if="PomofocusStore.isNote" class="underline text-center rounded opacity-90 text-[14px] font-bold text-[#0006]" @click="showHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                +Add Note
            </button>
            <textarea v-else v-model="PomofocusStore.notes" class="rounded p-2 block w-full outline-none bg-[#efefef] text-[#555]" placeholder="Some notes" />
            <button class="underline flex gap-1 items-center text-center rounded opacity-90 text-[14px] font-bold text-[#0006]" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                +Add Project
                <div class="i-carbon-locked text-3" />
            </button>
        </div>
        <div :class="PomofocusStore.isEdit ? 'justify-between' : 'justify-end'" class="mt-5 w-full p-4 bg-[#efefef] flex items-center gap-2">
            <button v-show="PomofocusStore.isEdit" class="min-w-[70px] text-[#888] font-bold text-[12px] opacity-90 text-center px-3 py-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="deleteHandler(tasks)">
                Delete
            </button>
            <div class="flex items-center gap-2">
                <button class="min-w-[70px] text-[#888] font-bold text-[12px] opacity-90 text-center px-3 py-2" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')" @click="addTaskHandler('hide', tasks)">
                    Cancel
                </button>
                <button type="submit" class="shadow-md min-w-[70px] text-[#fff] inline-block rounded bg-[#222] font-bold text-[12px] text-center px-3 py-2" @click="submitHandle(tasks)" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>
