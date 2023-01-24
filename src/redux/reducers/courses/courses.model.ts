export type CourseData = ICourse[];

export interface CoursesState {
    courses: ICourse[];
    loading: boolean;
    error: null | string;
}

export enum CoursesActionTypes {
    FETCH_COURSES = 'FETCH_COURSES',
    FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
    FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR',
}

interface FetchCoursesAction {
    type: CoursesActionTypes.FETCH_COURSES;
}
interface FetchCoursesSuccessAction {
    type: CoursesActionTypes.FETCH_COURSES_SUCCESS;
    payload: ICourse[];
}
interface FetchCoursesErrorAction {
    type: CoursesActionTypes.FETCH_COURSES_ERROR;
    payload: string;
}

export type CoursesAction =
    | FetchCoursesAction
    | FetchCoursesSuccessAction
    | FetchCoursesErrorAction;

export interface ICourse {
    id: string;
    title: string;
    level: string;
    description: string;
    lessons: ILesson[];
}

export interface ILesson {
    id: string;
    title: string;
    timeMinutes: number;
    blocks: IBlock[][];
}

export interface IBlock {
    type: string;
    text?: string;
    title?: string;
    img?: string;
    url?: string;
    isTestTrue?: boolean;
}
