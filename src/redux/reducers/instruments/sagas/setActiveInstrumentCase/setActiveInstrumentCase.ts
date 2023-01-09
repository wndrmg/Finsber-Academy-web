import {put, select, take} from 'redux-saga/effects';
import {ActionType, getType} from 'typesafe-actions';

import {instrumentsActions} from '@src/redux/reducers/instruments/instruments.actions';
import {RootAction} from '@src/redux/store.actions';

export function* setActiveInstrumentCase(event: Extract<RootAction, ActionType<typeof instrumentsActions.setActiveInstrument>>): Generator {
    try {
        const {instrument} = event.payload;
        yield put(instrumentsActions.setActiveInstrumentCommit({instrument}))
    } catch (e) {
        console.error('searchCase', e);
    }
}
