import { type ViteSSGContext } from "vite-ssg";

export type UserModule = (ctx: ViteSSGContext) => void;

export interface btn {
    name: string
    id: number
    active: boolean
    time: number
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
    id: number
    name: string
}

export interface task {
    id: number
    work: string
    title?: string
    count: number
    finishedCount: number
    active: boolean
    isEdit: boolean
    completed: boolean
}

export type show = "show" | "hide";

export interface plan {
    id: number
    type: string
    price: number
    name: string
    active: boolean
}

export interface color {
    id: number
    color?: string
    obj: {
        id: number
        color: string
        active: boolean
    }[]
}

export interface alarm {
    id: number
    name: string
}
