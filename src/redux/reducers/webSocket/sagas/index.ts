import {fork} from 'redux-saga/effects';

import {webSocketInitSaga as _webSocketInitSaga} from './webSocketSaga';

export const initWebSocketInitSaga = [fork(_webSocketInitSaga)];
