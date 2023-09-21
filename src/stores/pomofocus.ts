import { acceptHMRUpdate, defineStore } from "pinia";

export type show = "show" | "hide";
export interface btn {
    name: string
    id: number
    active: boolean
}

export const usePomofocusStore = defineStore("pomofocus", () => {
    const isShow = ref<boolean>(true);
    function toggleHandler(event: any): void {
        if (!event.target.classList.contains("actives")) {
            event.target.classList.add("actives");
        }
        setTimeout(() => {
            event.target.classList.remove("actives");
        }, 100);
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
        toggleHandler(e);
    }
    return {
        toggleHandler,
        isShow,
        showHandler,
        clickHandle,
        buttons,
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(usePomofocusStore, import.meta.hot));
