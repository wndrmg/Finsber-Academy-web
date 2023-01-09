import {takeEvery} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';

import {webSocketActions} from '@src/redux/reducers/webSocket';

import {webSocketInitCase} from './webSocketInitCase';

export function* webSocketInitSaga(): Generator {
    yield takeEvery(getType(webSocketActions.initCase), webSocketInitCase);
}
