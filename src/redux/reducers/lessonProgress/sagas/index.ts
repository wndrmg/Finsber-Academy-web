import {fork} from 'redux-saga/effects';

import {configSaga as _configSaga} from './configSaga';

export const configSaga = [fork(_configSaga)];
