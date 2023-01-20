export type CourseData = ICourse[]

export interface ICourse {
    id: string
    title: string
    level: string
    description: string
    lessons: ILesson[]
}

export interface ILesson {
    id: string
    title: string
    timeMinutes: number
    blocks: IBlock[][]
}

export interface IBlock {
    type: string
    text?: string
    title?: string
    img?: string
    url?: string
    isTestTrue?: boolean
}
