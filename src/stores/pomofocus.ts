import { acceptHMRUpdate, defineStore } from "pinia";
import type { btn, show, song, task } from "@/types/type";

export const usePomofocusStore = defineStore("pomofocus", () => {
    const buttons = ref<btn[]>([
        { name: "Pomodoro", id: 1, active: true, time: 1, color: "#ba4949", spendTime: "Time to focus!" },
        { name: "Short Break", id: 2, active: false, time: 5, color: "#a4893c", spendTime: "Time for a break!" },
        { name: "Long Break", id: 3, active: false, time: 1, color: "#545764", spendTime: "Time for a break!" },
    ]);
    const songs = ref<song[]>([
        { path: "" },
        { path: "/src/audio/timer/helicopter-beat-47617.mp3" },
        { path: "/src/audio/timer/072047_clock-ticking-fast-43236.mp3" },
        { path: "/src/audio/timer/time-passing-sound-effect-fast-clock-108403.mp3" },
    ]);
    const tasks = ref<task[]>([]);
    const isShow = ref<boolean>(true);
    const isStart = ref<boolean>(false);
    const isHidden = ref<boolean>(false);
    const isEdit = ref<boolean>(false);
    const time = ref<number>(buttons.value[0].time);
    const bgColor = ref<string>(buttons.value[0].color);
    const spendTime = ref<string>(buttons.value[0].spendTime);
    const song_countOne = ref<number>(3);
    const song_countTwo = ref<number>(2);
    const pomoId = ref<number>(1);
    const isAddTask = ref<boolean>(true);
    const Audio = document.createElement("audio");
    const Sound = document.createElement("audio");
    const taskEndSound = document.createElement("audio");
    const isNote = ref<boolean>(true);
    const repeat = ref<number>(1);
    const youWork = ref<string>("");
    const notes = ref<string>("");
    const timeHour = ref<number>(0);
    const updateMinute = ref<any>();
    const updateSecond = ref<any>();
    const second = ref<number>(60);
    const theSecond = ref<string>("00");
    const isTrue = ref<boolean>(true);
    const finishedCount = ref<number>(1);
    const showAllTasks = ref<boolean>(false);
    const borderW = ref<number>(0);
    const open = ref<boolean>(false);
    function toggleHandler(event: any, item?: show): void {
        if (item === "show") {
            event.target.classList.add("actives");
        }
        else if (item === "hide") {
            event.target.classList.remove("actives");
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
        second.value = 60;
        theSecond.value = "00";
        isTrue.value = true;
        clearInterval(updateMinute.value);
        clearInterval(updateSecond.value);
        borderW.value = 0;
    }
    function startHandler(): void {
        isStart.value = !isStart.value;
        isAddTask.value = true;
        if (isStart.value) {
            timeStart();
        }
        else {
            clearInterval(updateMinute.value);
            clearInterval(updateSecond.value);
        }
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
        borderW.value = 0;
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
        clearInterval(updateMinute.value);
        clearInterval(updateSecond.value);
        theSecond.value = "00";
        second.value = 60;
        isStart.value = false;
        playSong();
        isTrue.value = true;
    }
    function timeStart(): void {
        const borderLength = ref<number>((100 / (time.value * 60)));
        if (!(time.value === 0 && theSecond.value === "00")) {
            updateSecond.value = setInterval(() => {
                second.value--;
                borderW.value += borderLength.value;
                if (second.value >= 0 && second.value < 10) {
                    theSecond.value = `0${second.value}`;
                }
                else if (second.value > 0 && second.value >= 10) {
                    theSecond.value = `${second.value}`;
                }
                else {
                    second.value = 60;
                }
                if (isTrue.value) {
                    time.value = time.value - 1;
                }
                isTrue.value = false;
            }, 1000);
            updateMinute.value = setInterval(() => {
                time.value--;
            }, 1000 * 60);
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
        Audio.src = songs.value[song_countOne.value].path as string;
        Audio.load();
        taskEndSound.src = songs.value[song_countTwo.value].path as string;
        taskEndSound.load();
    }
    function playSong(): void {
        Sound.play();
        if (!isStart.value) {
            Audio.pause();
            Audio.loop = false;
        }
        else if (pomoId.value === 1) {
            if (!(time.value === 0 && theSecond.value === "00")) {
                Audio.play();
                Audio.loop = true;
            }
        }
    }
    function finishedTasks(): void {
        if (time.value === 0 && second.value === 0) {
            if (buttons.value[0].active) {
                finishedCount.value++;
                tasks.value.map<task>((item) => {
                    if (item.completed || tasks.value.length === 1) {
                        item.finishedCount++;
                        if (item.finishedCount === item.count) {
                            item.active = true;
                        }
                    }
                    return item;
                });
            }
            taskEndSound.play();
            time.value = buttons.value[0].time;
            buttons.value[0].active = true;
            buttons.value[1].active = false;
            buttons.value[2].active = false;
            second.value = 60;
            theSecond.value = "00";
            clearInterval(updateMinute.value);
            clearInterval(updateSecond.value);
            isStart.value = false;
            playSong();
            isTrue.value = true;
            borderW.value = 0;
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
    function completedHandler(id: number, e: any) {
        if (!e.target.classList.contains("checked")) {
            time.value = buttons.value[0].time;
            second.value = 60;
            theSecond.value = "00";
            clearInterval(updateMinute.value);
            clearInterval(updateSecond.value);
            isStart.value = false;
            playSong();
            isTrue.value = true;
            tasks.value.map<task>((item) => {
                item.completed = false;
                if (item.id === id) {
                    item.completed = true;
                }
                return item;
            });
        }
    }
    function showComputed() {
        if ((tasks.value.every((item: task) => item.active) && tasks.value.length)) {
            showAllTasks.value = true;
        }
        else {
            showAllTasks.value = false;
        }
    }
    function clearAllTasks(): void {
        tasks.value = [] as task[];
        isHidden.value = false;
        showAllTasks.value = false;
        isStart.value = false;
        borderW.value = 0;
        Audio.pause();
        clearInterval(updateMinute.value);
        clearInterval(updateSecond.value);
        theSecond.value = "00";
        second.value = 60;
        isStart.value = false;
        playSong();
        isTrue.value = true;
        time.value = buttons.value[0].time;
        buttons.value[0].active = true;
        buttons.value[1].active = false;
        buttons.value[2].active = false;
    }
    watch(theSecond, () => {
        finishedTasks();
    });
    watch(tasks.value, () => {
        showComputed();
    });
    return {
        toggleHandler,
        isShow,
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
        theSecond,
        completedHandler,
        finishedCount,
        showAllTasks,
        borderW,
        clearAllTasks,
        open,
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePomofocusStore, import.meta.hot));
