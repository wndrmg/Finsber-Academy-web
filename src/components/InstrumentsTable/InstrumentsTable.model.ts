import {Instrument} from '@src/redux/reducers/instruments/instruments.model';

export type InstrumentsTableProps = {
    data: Instrument[];
    colors: any;
    className: string;
};
