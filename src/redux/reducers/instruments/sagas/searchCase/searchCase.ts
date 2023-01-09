import {put, select, take} from 'redux-saga/effects';
import {ActionType, getType} from 'typesafe-actions';

import {instrumentsActions} from '@src/redux/reducers/instruments/instruments.actions';
import {RootAction} from '@src/redux/store.actions';

export function* searchCase(event: Extract<RootAction, ActionType<typeof instrumentsActions.search>>): Generator {
    try {
        const {searchText} = event.payload;
        if(!searchText){
            yield put(instrumentsActions.setInstruments({instruments: null}));
            return
        }
        yield put(instrumentsActions.setSearchText(searchText));




    } catch (e) {
        console.error('searchCase', e);
    }
}
