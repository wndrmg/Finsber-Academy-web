import {createSelector} from 'reselect';

import type {RootState} from '../../store';

const configSelector = (state: RootState) => state.config;
export const getInstrumentsSelector = createSelector(configSelector, (state) => state.instruments);
export const getIsLoadingConfigSelector = createSelector(configSelector, (state) => state.isLoadingConfig);
