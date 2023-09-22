import { acceptHMRUpdate, defineStore } from "pinia";

export type show = "show" | "hide";
export interface btn {
    name: string
    id: number
    active: boolean
}

export const usePomofocusStore = defineStore("pomofocus", () => {
    const isShow = ref<boolean>(true);
    const isStart = ref<boolean>(false);
    const isHidden = ref<boolean>(false);
    function toggleHandler(event: any, item?: show): void {
        if (item === "show") {
            event.target.classList.add("actives");
        }
        else if (item === "hide") {
            event.target.classList.remove("actives");
        }
    }
    function showHandler(item: show): void {
        if (item === "hide") {
            isShow.value = false;
        }
        else {
            isShow.value = true;
        }
    }
    const buttons = ref<btn[]>([
        { name: "Pomodoro", id: 1, active: true },
        { name: "Short Break", id: 2, active: false },
        { name: "Long Break", id: 3, active: false },
    ]);
    function clickHandle(e: any, id: number): void {
        buttons.value.map((item: btn) => {
            item.active = false;
            if (item.id === id) {
                item.active = true;
            }
            return item;
        });
    }
    function startHandler(): void {
        isStart.value = !isStart.value;
    }
    function hiddenHandler(item?: string): void {
        if (item === "app") {
            isHidden.value = false;
        }
        else {
            isHidden.value = !isHidden.value;
        }
    }
    return {
        toggleHandler,
        isShow,
        showHandler,
        clickHandle,
        buttons,
        isStart,
        startHandler,
        isHidden,
        hiddenHandler,
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePomofocusStore, import.meta.hot));
