import {takeLatest} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';

import {instrumentsActions} from '../instruments.actions';
import {searchCase} from './searchCase';
import {setActiveInstrumentCase} from '@src/redux/reducers/instruments/sagas/setActiveInstrumentCase';

export function* searchInstrumentsSaga(): Generator {
    yield takeLatest(getType(instrumentsActions.search), searchCase);
}

export function* setActiveInstrumentSaga(): Generator {
    yield takeLatest(getType(instrumentsActions.setActiveInstrument), setActiveInstrumentCase);
}
