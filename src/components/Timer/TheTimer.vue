<!-- eslint-disable no-console -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="w-full text-center px-2 mx-auto max-w-[620px]">
        <div class="h-1px bg-white mb-[40px]" :style="{ width: `${0}%` }" />
        <TheBreaks />
        <div class="mt-5 cursor-pointer select-none inline-block text-[16px] opacity-80 mb-1">
            #1
        </div>
        <div class="text-[18px] font-bold text-white">
            {{ PomofocusStore.tasks.length === 0 ? PomofocusStore.spendTime : PomofocusStore.taskTitle }}
        </div>
        <AddTask />
        <TheFinish v-if="PomofocusStore.tasks.length && PomofocusStore.pomos" />
    </div>
</template>
