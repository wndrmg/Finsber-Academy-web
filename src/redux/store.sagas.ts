import {all} from 'redux-saga/effects';

import {initInstrumentsSaga} from './reducers/instruments/sagas';

export function* rootSaga(): Generator {
    yield all([
        ...initInstrumentsSaga,
    ]);
}
