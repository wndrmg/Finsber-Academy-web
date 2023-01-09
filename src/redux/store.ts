import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {configReducer} from '@src/redux/reducers/config';
import {instrumentsReducer} from '@src/redux/reducers/instruments';
import {webSocketReducer} from '@src/redux/reducers/webSocket';
import {rootSaga} from '@src/redux/store.sagas';

export const store = (() => {
    const sagaMiddleware = createSagaMiddleware();
    const storeInstance = createStore(
        combineReducers({
            instruments: instrumentsReducer,
            config: configReducer,
            webSocket: webSocketReducer,
        }),
        undefined,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
    // if ((window as any)?.__REDUX_DEVTOOLS_EXTENSION__) {
    //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    // }
    return storeInstance;
})();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
