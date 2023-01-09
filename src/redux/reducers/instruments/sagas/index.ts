import {fork} from 'redux-saga/effects';

import {
    searchInstrumentsSaga as _initInstrumentsSaga,
    setActiveInstrumentSaga as _setActiveInstrumentSaga,
} from './instrumentsSaga';

export const initInstrumentsSaga = [fork(_initInstrumentsSaga)];
export const setActiveInstrumentSaga = [fork(_setActiveInstrumentSaga)];
