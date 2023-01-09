import {createAction} from 'typesafe-actions';

export const LessonProgressActions = {
    setProgress: createAction('@CONFIG/setProgress.COMMIT')<number>(),
    setFinishedConfig: createAction('@CONFIG/setFinishedConfig.COMMIT')<boolean>(),
};
