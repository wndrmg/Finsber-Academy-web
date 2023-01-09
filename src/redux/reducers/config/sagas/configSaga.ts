import {takeLatest} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';

import {configActions} from '@src/redux/reducers/config/config.actions';
import {getConfigCase} from '@src/redux/reducers/config/sagas/getConfigCase';

export function* configSaga(): Generator {
    yield takeLatest(getType(configActions.getConfig), getConfigCase);
}
