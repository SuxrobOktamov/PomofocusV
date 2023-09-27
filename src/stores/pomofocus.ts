import { acceptHMRUpdate, defineStore } from "pinia";

export type show = "show" | "hide";
export interface btn {
    name: string
    id: number
    active: boolean
    time: string
    color: string
    spendTime: string
}

export interface breakTime {
    time: string
    short: string
    long: string
}

export interface song {
    path: string
}

export interface task {
    id: number
    work: string
    title?: string
    count: number
    active: boolean
    isEdit: boolean
}

export const usePomofocusStore = defineStore("pomofocus", () => {
    const buttons = ref<btn[]>([
        { name: "Pomodoro", id: 1, active: true, time: "25 : 00", color: "#ba4949", spendTime: "Time to focus!" },
        { name: "Short Break", id: 2, active: false, time: "5 : 00", color: "#a4893c", spendTime: "Time for a break!" },
        { name: "Long Break", id: 3, active: false, time: "15 : 00", color: "#545764", spendTime: "Time for a break!" },
    ]);
    const songs = ref<song[]>([
        { path: "" },
        { path: "/src/audio/helicopter-beat-47617.mp3" },
        { path: "/src/audio/072047_clock-ticking-fast-43236.mp3" },
        { path: "/src/audio/time-passing-sound-effect-fast-clock-108403.mp3" },
    ]);
    const tasks = ref<task[]>([
        { id: 1, work: "work one", count: 1, active: true, isEdit: true, title: "" },
        { id: 2, work: "work two", count: 5, active: false, isEdit: true, title: "" },
        { id: 3, work: "work three", count: 2, active: false, isEdit: true, title: "" },
    ]);
    const isShow = ref<boolean>(true);
    const isStart = ref<boolean>(false);
    const isHidden = ref<boolean>(false);
    const isEdit = ref<boolean>(false);
    const time = ref<string>(buttons.value[0].time);
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
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePomofocusStore, import.meta.hot));
