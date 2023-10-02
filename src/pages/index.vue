<script setup lang="ts">
    defineOptions({
        name: "IndexPage",
    });
    const time = ref<number>(25);
    const second = ref<number>(59);
    const theSecond = ref<string>("00");
    let isTrue = false;
    function finished() {
        isTrue = true;
        if (isTrue) {
            setInterval(() => {
                time.value--;
                // eslint-disable-next-line no-console
                console.log(time.value);
            }, 1000 * 60);
        }
        if (isTrue) {
            setInterval(() => {
                if (second.value > 0 && second.value < 10) {
                    theSecond.value = `0${second.value}`;
                }
                else if (second.value > 0 && second.value > 10) {
                    theSecond.value = `${second.value}`;
                }
                else {
                    theSecond.value = `00`;
                    second.value = 60;
                }
                second.value--;
            }, 1200);
        }
    }
</script>

<template>
    <div class="text-center">
        {{ time }} : {{ theSecond }}
    </div>
    <button class="text-center w-full" @click="finished()">
        Finish
    </button>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
