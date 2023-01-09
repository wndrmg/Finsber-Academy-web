import {fork} from 'redux-saga/effects';

import {
    searchInstrumentsSaga as _initInstrumentsSaga,
} from './instrumentsSaga';

export const initInstrumentsSaga = [fork(_initInstrumentsSaga)];
