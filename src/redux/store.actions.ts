import {ActionType} from 'typesafe-actions';

import {instrumentsActions} from '@src/redux/reducers/instruments/instruments.actions';

const storeActions = {
    instrumentsActions,
};

export type RootAction = ActionType<typeof storeActions>;
