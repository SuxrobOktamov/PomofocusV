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
}

export interface task {
    id: number
    work: string
    title?: string
    count: number
    active: boolean
    isEdit: boolean
    completed: boolean
}

export type show = "show" | "hide";