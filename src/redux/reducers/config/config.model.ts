import {Instrument} from '@src/redux/reducers/instruments/instruments.model';

export type ConfigState = {
    instruments: Instrument[];
    isLoadingConfig: boolean;
    isErrorConfig: boolean;
};
