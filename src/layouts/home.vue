<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <main class="w-full flex flex-col gap-5">
        <div class="app" :style="{ 'background-color': PomofocusStore.bgColor }" @click.self="PomofocusStore.hiddenHandler('app')">
            <TheHeader />
            <TheTimer />
        </div>
        <TheMain />
        <TheFooter />
    </main>
</template>
