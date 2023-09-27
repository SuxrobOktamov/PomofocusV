<script setup lang="ts">
    import type { task } from "@/stores/pomofocus";
    const PomofocusStore = usePomofocusStore();
    function EditHandler(id: number): void {
        PomofocusStore.tasks.map<task>((item: task) => {
            if (item.id === id) {
                PomofocusStore.isEdit = true;
                item.isEdit = false;
                PomofocusStore.repeat = item.count;
                PomofocusStore.youWork = item.work;
            }
            return item;
        });
    }
</script>

<template>
    <div v-for="tasks in PomofocusStore.tasks" :key="tasks.id" class="flex flex-col gap-2 cursor-pointer m-auto mb-3 max-w-[480px] text-[#555] w-full">
        <div v-if="tasks.isEdit" class="p-4 flex items-center justify-between bg-[#fff] rounded-[6px] shadow-md">
            <div class="flex items-center gap-2">
                <div i-carbon-checkmark-filled class="text-[24px]" :style="{ color: `${tasks.active ? '#ba4949' : '#dfdfdf'}` }" />
                <span class="font-bold max-w-[300px] text-ellipsis block whitespace-nowrap  overflow-hidden" :style="{ textDecoration: `${tasks.active ? 'line-through' : 'none'}`, opacity: `${tasks.active ? '0.4' : '1'}` }">{{ tasks.work }}</span>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-[18px] text-[#bbb] font-bold">0/ <small>{{ tasks.count }}</small></span>
                <button class="px-[1px] border py-[1px] bg-[#fff] rounded shadow" @click="EditHandler(tasks.id)" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                    <div i-carbon-overflow-menu-vertical class="text-gray-400 font-extrabold text-[24px] pointer-events-none" />
                </button>
            </div>
        </div>
        <TheEditAdd v-else :tasks="tasks.id" />
    </div>
</template>
