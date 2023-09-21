<!-- eslint-disable no-console -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="w-full text-center px-2 mx-auto max-w-[620px]">
        <div class="h-1px bg-white mb-[40px]" />
        <div class="m-auto max-w-[480px] w-full pt-[20px] pb-[30px] rounded-6px bg-[#ffffff1a] shadow-md">
            <div class="flex justify-center gap-1 box">
                <button v-for="button in PomofocusStore.buttons" :key="button.id" :class="button.active && 'active'" class="capitalize rounded-4px text-16px px-12px py-2px h-28px cursor-pointer text-white font-bold" @click="PomofocusStore.clickHandle($event, button.id)">
                    {{ button.name }}
                </button>
            </div>
            <div class="text-[100px] font-bold mt-5 text-center">
                38 : 00
            </div>
        </div>
    </div>
</template>
