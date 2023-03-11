export type ContentBlockType = {
    type:
    | 'H1'
    | 'H2'
    | 'BR'
    | 'TEXT'
    | 'LI'
    | 'TEST'
    | 'TEST_CHECKBOX'
    | 'LINK'
    | 'IMG'
    | 'SMALL_GRAY_TEXT'
    | 'TEXT_BOLD';
    text: string;
    isTestTrue?: boolean;
    title?: string;
    url?: string;
    img?: string;
};

export type LessonType = {
    id: string;
    title: string;
    timeMinutes: number;
    blocks: ContentBlockType[][];
};

export type CourseType = {
    id: string;
    title: string;
    description: string;
    lessons: LessonType[];
    level: 'beginner';
    color: string;
};

export type SetLessonProgressParams = {
    courseId: string;
    lessonId: string;
    currentPage: number;
    pages: number;
    lessonProgressPercent: string;
    isFinished: boolean;
};

export type LessonProgressType = {
    isFinished: boolean;
    lessonProgressPercent: string;
    currentPage: number;
    pages: number;
};

export type CourseProgressType = {
    isFinished: boolean;
    courseProgressCount: number;
    courseProgressPercent: string;
    lessons: {
        [lessonId: string]: LessonProgressType;
    };
};

export type CoursesProgressType = {
    [courseId: string]: CourseProgressType;
};

export type CheckboxCheckedObject = {
    [text: string]: boolean;
};

export type TestsObjectType = {
    [index: string]: boolean;
};

// Redux state
export type CoursesState = {
    courses: CourseType[];
    coursesProgress: CoursesProgressType;
    isBlockProgress: boolean;
    isFinished: boolean;
    radioButtonIsChecked: string;
    checkboxCheckedList: CheckboxCheckedObject;
    testsObject: TestsObjectType;
    currentPage: number;
};
