<!-- eslint-disable no-console -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <header class="flex items-center justify-between py-4 px-2 mx-auto max-w-[620px] border-b border-gray-900 border-opacity-10">
        <router-link to="app" class="flex items-center gap-1">
            <img class="w-6 object-contain" src="../images/icon-white2.png" alt="">
            <div class="lt-sm:hidden text-xl font-semibold text-white" @click="PomofocusStore.showHandler('hide')">
                Pomofocus
            </div>
        </router-link>
        <div class="flex gap-2">
            <button class="cursor-pointer flex items-center gap-1 font-sans rounded opacity-90 bg-gray-1/20 py-2 px-3 text-[13px] min-w-[70px] lt-md:min-w-auto" @click="PomofocusStore.toggleHandler($event)">
                <div i-carbon-report class="pointer-events-none lt-sm:text-xl" />
                <span class="lt-sm:hidden capitalize pointer-events-none">Report</span>
            </button>
            <button class="cursor-pointer flex items-center gap-1 font-sans rounded opacity-90 bg-gray-1/20 py-2 px-3 text-[13px] min-w-[70px] lt-md:min-w-auto" @click="PomofocusStore.toggleHandler($event)">
                <div i-carbon-settings class="pointer-events-none lt-sm:text-xl" />
                <span class="lt-sm:hidden capitalize pointer-events-none">Setting</span>
            </button>
            <router-link to="login">
                <button class="cursor-pointer flex items-center gap-1 font-sans rounded opacity-90 bg-gray-1/20 py-2 px-3 text-[13px] min-w-[70px] lt-md:min-w-auto" @click="PomofocusStore.toggleHandler($event)">
                    <div i-carbon-user-avatar-filled-alt class="pointer-events-none lt-sm:text-xl" />
                    <span class="lt-sm:hidden capitalize pointer-events-none">Login</span>
                </button>
            </router-link>
        </div>
    </header>
</template>
