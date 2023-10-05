<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="fixed z-[9999] bottom-0 w-full left-0 box-border text-center py-5">
        <div class="m-auto flex items-center max-w-[480px] justify-between bg-white text-[black] rounded-6px shadow-2xl shadow-[#666] p-4">
            <p>You've finished all your tasks for today 🎉</p>
            <button class="px-3 py-2 text-[12px] rounded shadow-lg text-white bg-[#379580]" @click="PomofocusStore.clearAllTasks()" @pointerdown="PomofocusStore.toggleHandler($event, 'show')" @pointerup="PomofocusStore.toggleHandler($event, 'hide')">
                Clear Tasks
            </button>
        </div>
    </div>
</template>
