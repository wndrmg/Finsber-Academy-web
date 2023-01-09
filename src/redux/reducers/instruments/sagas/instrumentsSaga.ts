import {takeLatest} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';

import {instrumentsActions} from '../instruments.actions';
import {searchCase} from './searchCase';

export function* searchInstrumentsSaga(): Generator {
    yield takeLatest(getType(instrumentsActions.search), searchCase);
}
