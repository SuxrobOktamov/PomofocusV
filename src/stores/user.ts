import { acceptHMRUpdate, defineStore } from "pinia";

export interface MyType {
    name: string
    age: number
}

export const useUserStore = defineStore("user", () => {
    const Pages = ref< MyType>({
        name: "Suxrob",
        age: 21,
    });

    return {
        Pages,
    };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
