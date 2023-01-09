import {all} from 'redux-saga/effects';

import {configSaga} from '@src/redux/reducers/config/sagas';
import {initWebSocketInitSaga} from '@src/redux/reducers/webSocket/sagas';

import {initInstrumentsSaga, setActiveInstrumentSaga} from './reducers/instruments/sagas';

export function* rootSaga(): Generator {
    yield all([
        ...initWebSocketInitSaga,
        ...initInstrumentsSaga,
        ...configSaga,
        ...setActiveInstrumentSaga
    ]);
}
