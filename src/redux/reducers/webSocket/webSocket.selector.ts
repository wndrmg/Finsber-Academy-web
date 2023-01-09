import {createSelector} from 'reselect';

import type {RootState} from '../../store';

const webSocketSelector = (state: RootState) => state.webSocket;
export const getIsOnline = createSelector(
    webSocketSelector,
    (state) => state.isOnline,
);
