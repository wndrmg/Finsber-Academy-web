export const getImageUrl = (fileName: string) => `/cdn/img/${fileName}`;
export const getCourseLogo = (courseId: string) => `/cdn/img/courses/${courseId}/logo.png`;

export const getLessonLogo = (courseId: string, lessonId: string) => `/cdn/img/courses/${courseId}/${lessonId}.png`;
