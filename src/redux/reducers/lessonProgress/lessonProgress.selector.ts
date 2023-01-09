import {createSelector} from 'reselect';

import type {RootState} from '../../store';

const lessonProgressSelector = (state: RootState) => state.config;
export const getInstrumentsSelector = createSelector(lessonProgressSelector, (state) => state.);
export const getIsLoadingConfigSelector = createSelector(lessonProgressSelector, (state) => state.isLoadingConfig);
