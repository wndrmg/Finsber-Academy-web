import type {Action} from 'redux-actions';
import {handleActions} from 'redux-actions';
import {getType} from 'typesafe-actions';

import {instrumentsActions} from '@src/redux/reducers/instruments/instruments.actions';
import {Instrument, InstrumentsState} from '@src/redux/reducers/instruments/instruments.model';
import {ACTIVE_INSTRUMENT} from '@src/redux/reducers/instruments/instruments.const';

const initialState: InstrumentsState = {
    instruments: null,
    searchText: '',
    activeInstrument: ACTIVE_INSTRUMENT
};

const setSearchText = (state: InstrumentsState, action: Action<string>): InstrumentsState => ({
    ...state,
    searchText: action.payload,
});

const setInstruments = (state: InstrumentsState, action: Action<{instruments?: Instrument[] | null}>): InstrumentsState => ({
    ...state,
    instruments: action.payload.instruments,
});

const setActiveInstrument = (state: InstrumentsState, action: Action<{instrument: Instrument}>): InstrumentsState => ({
    ...state,
    activeInstrument: action.payload.instrument,
});

const reducerMap: {[key: string]: any} = {
    [getType(instrumentsActions.setSearchText)]: setSearchText,
    [getType(instrumentsActions.setInstruments)]: setInstruments,
    [getType(instrumentsActions.setActiveInstrument)]: setActiveInstrument,
};

export const instrumentsReducer = handleActions(reducerMap, initialState);
