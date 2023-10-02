<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <div class="flex items-center justify-center gap-5 m-auto mb-3 mt-7 max-w-[480px] w-full border-t border-[#eee] shadow-md py-6 bg-[#ffffff1a]">
        <div class="text-[#ffffffb3]">
            Pomos: <span class="text-[#fff] text-[24px] pl-1">0<small class="text-[16px] text-[#ffffffb3]">/</small>{{ PomofocusStore.pomos }}</span>
        </div>
        <div class="text-[#ffffffb3]">
            Finish At: <span class="text-[#fff] text-[24px] px-1">{{ PomofocusStore.finishPomos }}</span> ( {{ PomofocusStore.timeHour.toFixed(1) }}h)
        </div>
    </div>
</template>
