<script setup lang="ts">
    const PomofocusStore = usePomofocusStore();
</script>

<template>
    <main class="w-full">
        <div class="app">
            <TheLogin class="text-center" />
        </div>
        <TheMain v-if="PomofocusStore.isShow" />
    </main>
</template>
