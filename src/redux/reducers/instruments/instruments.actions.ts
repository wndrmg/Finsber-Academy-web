import {createAction} from 'typesafe-actions';
import {Instrument} from '@src/redux/reducers/instruments/instruments.model';

export const instrumentsActions = {
    search: createAction('@INSTRUMENTS/search')<{searchText?: string | null}>(),
    setSearchText: createAction('@INSTRUMENTS/setSearchText.COMMIT')<string>(),
    setInstruments: createAction('@INSTRUMENTS/setInstruments.COMMIT')<{instruments?: Instrument[] | null}>(),
    setActiveInstrument: createAction('@INSTRUMENTS/setActiveInstrument')<{instrument: Instrument}>(),
    setActiveInstrumentCommit: createAction('@INSTRUMENTS/setActiveInstrument.COMMIT')<{instrument: Instrument}>(),

};
