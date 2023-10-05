<!-- eslint-disable no-console -->
<script setup lang="ts">
    import type { task } from "../../types/type";

    const PomofocusStore = usePomofocusStore();
    function addTaskHandler(type: "add" | "hide"): void {
        PomofocusStore.tasks.map<task>((item: task) => {
            item.isEdit = true;
            return item;
        });
        if (type === "add") {
            PomofocusStore.isAddTask = false;
            PomofocusStore.isEdit = false;
            PomofocusStore.repeat = 1;
            PomofocusStore.youWork = "";
            PomofocusStore.notes = "";
        }
        else {
            PomofocusStore.isAddTask = true;
            PomofocusStore.isNote = true;
        }
    }
    function deleteFinishedTasks(): void {
        PomofocusStore.tasks = PomofocusStore.tasks.filter((item: task) => !item.active);
        PomofocusStore.hiddenHandler();
    }
    function saveTemplate(): void {
        // eslint-disable-next-line no-alert
        confirm("Please login to use the template feature.");
        PomofocusStore.hiddenHandler();
    }
</script>

<template>
    <form @submit.prevent>
        <div class="m-auto max-w-[480px] w-full mt-5">
            <div class="relative flex items-center justify-between mb-5 pb-[14px] border-w-[2px] border-b-2px border-b-[#fff9]">
                <span class="text-[18px] font-bold tracking-widest">Task</span>
                <button class="px-[1px] py-[1px] bg-[#fff3] rounded shadow" @click.self="PomofocusStore.hiddenHandler()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                    <div i-carbon-overflow-menu-vertical class="font-extrabold text-[24px] pointer-events-none" />
                </button>
                <div v-if="PomofocusStore.isHidden" class="absolute z-50 w-[210px] right-0 -bottom-63 rounded py-1 shadow-md bg-white">
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="deleteFinishedTasks()">
                        <div i-carbon-trash-can class="font-black" />
                        <span>Clear finished tasks</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="PomofocusStore.hiddenHandler();">
                        <div i-carbon-checkmark class="font-black" />
                        <span>Clear act pomodoros</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="saveTemplate()">
                        <div i-carbon-save class="font-black" />
                        <span>Save as template</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="saveTemplate()">
                        <div i-carbon-add class="font-black" />
                        <span>Add from templates</span>
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="PomofocusStore.open = true, PomofocusStore.isHidden = false">
                        <div i-carbon-ibm-data-replication class="font-black" />
                        <span>Import from Todoist</span>
                        <div i-carbon-locked class="font-black" />
                    </button>
                    <button class="gap-1 flex items-center text-[#4f2b2d] px-[16px] py-[10px] text-[14px]" @click="PomofocusStore.clearAllTasks()">
                        <div i-carbon-trash-can class="font-black" />
                        <span>Clear all tasks</span>
                    </button>
                </div>
            </div>
            <TheTasks />
            <button v-if="PomofocusStore.isAddTask" class="w-full flex text-[18px] cursor-pointer opacity-60 p-4 border-dashed border-2px bg-[#0000001a] rounded-lg items-center justify-center gap-2" @click="addTaskHandler('add')">
                <div i-carbon-add-filled />
                <span>Add Task</span>
            </button>
            <TheEditAdd v-else />
        </div>
    </form>
</template>
