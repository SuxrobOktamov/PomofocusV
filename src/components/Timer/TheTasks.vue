<!-- eslint-disable no-console -->
<script setup lang="ts">
    import type { task } from "../../types/type";
    const PomofocusStore = usePomofocusStore();
    function EditHandler(id: number): void {
        PomofocusStore.isAddTask = true;
        PomofocusStore.tasks.map<task>((item: task) => {
            item.isEdit = true;
            if (item.id === id) {
                PomofocusStore.isEdit = true;
                item.isEdit = false;
                PomofocusStore.repeat = +item.count;
                PomofocusStore.youWork = item.work;
                PomofocusStore.notes = "";
                PomofocusStore.isNote = true;
                if (item.title?.length) {
                    PomofocusStore.isNote = false;
                    PomofocusStore.notes = item.title;
                }
            }
            return item;
        });
    }
    function finishedTaskHandler(id: number) {
        PomofocusStore.tasks.map<task>((item) => {
            if (item.id === id) {
                item.active = !item.active;
            }
            return item;
        });
    }
</script>

<template>
    <div v-for="tasks in PomofocusStore.filterTasks" :key="tasks.id" class="flex flex-col gap-2 cursor-pointer m-auto mb-3 max-w-[480px] text-[#555] w-full" @click="PomofocusStore.completedHandler(tasks.id, $event)">
        <div v-if="tasks.isEdit" class="relative overflow-hidden p-4 flex flex-wrap items-center justify-between bg-[#fff] rounded-[6px] shadow-md">
            <div v-if="tasks.completed || PomofocusStore.tasks.length === 1" class="absolute left-0 top-0 h-full w-[6px] bg-[#222]" />
            <div class="flex items-center gap-2">
                <div i-carbon-checkmark-filled class="text-[24px] z-[999] checked" :style="{ color: `${tasks.active ? '#ba4949' : '#dfdfdf'}` }" @click.self="finishedTaskHandler(tasks.id)" />
                <span class="font-bold max-w-[300px] text-ellipsis block whitespace-nowrap  overflow-hidden" :style="{ textDecoration: `${tasks.active ? 'line-through' : 'none'}`, opacity: `${tasks.active ? '0.4' : '1'}` }">{{ tasks.work }}</span>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-[18px] text-[#bbb] font-bold">{{ tasks.finishedCount }}/ <small>{{ tasks.count }}</small></span>
                <button class="px-[1px] border py-[1px] bg-[#fff] rounded shadow" @click="EditHandler(tasks.id)" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                    <div i-carbon-overflow-menu-vertical class="text-gray-400 font-extrabold text-[24px] pointer-events-none" />
                </button>
            </div>
            <div v-if="tasks.title" class="w-[90%] bg-[#fcf8de] text-[#605515] whitespace-pre-wrap break-words text-start m-auto mt-2 p-3 rounded-md shadow-md">
                {{ tasks.title }}
            </div>
        </div>
        <TheEditAdd v-else :tasks="tasks.id" />
    </div>
</template>
