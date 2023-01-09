import {createSelector} from 'reselect';

import type {RootState} from '../../store';

const instrumentsSelector = (state: RootState) => state.instruments;
export const getSearchTextSelector = createSelector(instrumentsSelector, (state) => state.searchText);
export const getFilteredInstrumentsSelector = createSelector(instrumentsSelector, (state) => state.instruments);
export const getActiveInstrumentSelector = createSelector(instrumentsSelector, (state) => state.activeInstrument);

