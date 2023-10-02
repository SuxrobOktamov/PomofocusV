import { acceptHMRUpdate, defineStore } from "pinia";
import type { btn, show, song, task } from "@/types/type";

export const usePomofocusStore = defineStore("pomofocus", () => {
    const buttons = ref<btn[]>([
        { name: "Pomodoro", id: 1, active: true, time: 25, color: "#ba4949", spendTime: "Time to focus!" },
        { name: "Short Break", id: 2, active: false, time: 5, color: "#a4893c", spendTime: "Time for a break!" },
        { name: "Long Break", id: 3, active: false, time: 15, color: "#545764", spendTime: "Time for a break!" },
    ]);
    const songs = ref<song[]>([
        { path: "" },
        { path: "/src/audio/helicopter-beat-47617.mp3" },
        { path: "/src/audio/072047_clock-ticking-fast-43236.mp3" },
        { path: "/src/audio/time-passing-sound-effect-fast-clock-108403.mp3" },
    ]);
    const tasks = ref<task[]>([]);
    const isShow = ref<boolean>(true);
    const isStart = ref<boolean>(false);
    const isHidden = ref<boolean>(false);
    const isEdit = ref<boolean>(false);
    const time = ref<number>(buttons.value[0].time);
    const bgColor = ref<string>(buttons.value[0].color);
    const spendTime = ref<string>(buttons.value[0].spendTime);
    const song_count = ref<number>(3);
    const pomoId = ref<number>(1);
    const isAddTask = ref<boolean>(true);
    const Audio = document.createElement("audio");
    const Sound = document.createElement("audio");
    const isNote = ref<boolean>(true);
    const repeat = ref<number>(1);
    const youWork = ref<string>("");
    const notes = ref<string>("");
    const timeHour = ref<number>(0);
    function toggleHandler(event: any, item?: show): void {
        if (item === "show") {
            event.target.classList.add("actives");
        }
        else if (item === "hide") {
            event.target.classList.remove("actives");
        }
    }
    function showHandler(item: show): void {
        isAddTask.value = true;
        if (item === "hide") {
            isShow.value = false;
        }
        else {
            isShow.value = true;
        }
    }
    function clickHandle(button: btn): void {
        isAddTask.value = true;
        pomoId.value = button.id;
        isStart.value = false;
        Audio.pause();
        buttons.value.map((item: btn) => (item.active = false));
        button.active = true;
        time.value = button.time;
        bgColor.value = button.color;
        spendTime.value = button.spendTime;
    }
    function startHandler(): void {
        isStart.value = !isStart.value;
        isAddTask.value = true;
    }
    function hiddenHandler(item?: string): void {
        isAddTask.value = true;
        if (item === "app") {
            isHidden.value = false;
        }
        else {
            isHidden.value = !isHidden.value;
        }
    }
    function nextHandler(): void {
        isAddTask.value = true;
        isStart.value = false;
        Audio.pause();
        if (!buttons.value[0].active) {
            pomoId.value = 1;
            time.value = buttons.value[0].time;
            bgColor.value = buttons.value[0].color;
            spendTime.value = buttons.value[0].spendTime;
            buttons.value[0].active = true;
            buttons.value[1].active = false;
            buttons.value[2].active = false;
        }
        else if (!buttons.value[1].active) {
            pomoId.value = 0;
            time.value = buttons.value[1].time;
            bgColor.value = buttons.value[1].color;
            spendTime.value = buttons.value[1].spendTime;
            buttons.value[1].active = true;
            buttons.value[0].active = false;
            buttons.value[2].active = false;
        }
        else if (buttons.value[2].active) {
            pomoId.value = 1;
            buttons.value[0].active = true;
            buttons.value[1].active = false;
            buttons.value[2].active = false;
        }
    }
    function playHandle(): void {
        startHandler();
        loadSong();
        playSong();
    }
    function loadSong(): void {
        Sound.src = "/src/audio/start-13691.mp3";
        Sound.load();
        Audio.src = songs.value[song_count.value].path as string;
        Audio.load();
    }
    function playSong(): void {
        Sound.play();
        if (!isStart.value) {
            Audio.pause();
        }
        else if (pomoId.value === 1) {
            Audio.play();
        }
    }
    const filterTasks = computed<task[]>(() => {
        return [...tasks.value].sort((a: task, b: task): number => {
            return a.active > b.active ? 1 : -1;
        });
    });
    const taskTitle = computed<string>(() => {
        if (tasks.value.length === 1) {
            return tasks.value[0].work;
        }
        else {
            const filter = ref<task[]>(tasks.value.filter((item: task) => item.completed));
            if (!filter.value.length) {
                tasks.value[0].completed = true;
                return tasks.value[0].work;
            }
            else {
                return filter.value[0].work;
            }
        }
    });
    const pomos = computed<number>(() => {
        let count = 0 as number;
        tasks.value.map<task>((item) => {
            if (!item.active) {
                count += item.count;
            }
            return item;
        });
        return count;
    });
    const finishPomos = computed<string>(() => {
        const today = new Date() as Date;
        const hours = today.getHours() as number;
        const minutes = today.getMinutes() as number;
        const pomo = Math.floor((minutes + ((buttons.value[0].time * pomos.value))) / 60) as number;
        let date = "ewe" as string;
        if (pomo > 0 && !((hours + pomo) > 24)) {
            if ((minutes + (pomos.value * buttons.value[0].time - (pomo * 60)) < 10 && (hours + pomo) < 10)) {
                date = `0${hours + pomo} : 0${minutes + ((pomos.value * buttons.value[0].time) - (pomo * 60))}`;
            }
            else if ((minutes + (pomos.value * buttons.value[0].time - (pomo * 60)) > 10 && (hours + pomo) < 10)) {
                date = `0${hours + pomo} : ${minutes + ((pomos.value * buttons.value[0].time) - (pomo * 60))}`;
            }
            else if ((minutes + (pomos.value * buttons.value[0].time - (pomo * 60)) < 10 && (hours + pomo) > 10)) {
                date = `${hours + pomo} : 0${minutes + ((pomos.value * buttons.value[0].time) - (pomo * 60))}`;
            }
            else {
                date = `${hours + pomo} : ${minutes + ((pomos.value * buttons.value[0].time) - (pomo * 60))}`;
            }
        }
        else if (((hours + pomo) > 24)) {
            date = `00 : 00`;
        }
        else {
            if ((minutes + (buttons.value[0].time * pomos.value)) < 10 && (hours) < 10) {
                date = `0${hours} : 0${minutes + (buttons.value[0].time * pomos.value)}`;
            }
            else
            if ((minutes + (buttons.value[0].time * pomos.value)) > 10 && (hours) < 10) {
                date = `0${hours} : ${minutes + (buttons.value[0].time * pomos.value)}`;
            }
            else if ((minutes + (buttons.value[0].time * pomos.value)) < 10 && (hours) > 10) {
                date = `${hours} : 0${minutes + (buttons.value[0].time * pomos.value)}`;
            }
            else {
                date = `${hours} : ${minutes + (buttons.value[0].time * pomos.value)}`;
            }
        }
        timeHour.value = (buttons.value[0].time * pomos.value) / 60;
        return date;
    });
    return {
        toggleHandler,
        isShow,
        showHandler,
        clickHandle,
        buttons,
        isStart,
        isHidden,
        hiddenHandler,
        nextHandler,
        time,
        bgColor,
        spendTime,
        playHandle,
        isAddTask,
        tasks,
        isNote,
        repeat,
        youWork,
        notes,
        isEdit,
        taskTitle,
        filterTasks,
        pomos,
        finishPomos,
        timeHour,
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePomofocusStore, import.meta.hot));
