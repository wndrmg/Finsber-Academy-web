import React, {ChangeEventHandler, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as T from './InstrumentsTable.model';
import S from './InstrumentsTable.module.scss';
import {getFilteredInstrumentsSelector} from '@src/redux/reducers/instruments/instruments.selector';
import {getInstrumentsSelector} from '@src/redux/reducers/config/config.selector';
import {instrumentsActions} from '@src/redux/reducers/instruments/instruments.actions';

export const InstrumentsList = () => {
    const dispatch = useDispatch();
    const instruments = useSelector(getInstrumentsSelector);
    const filteredInstruments = useSelector(getFilteredInstrumentsSelector);

    useEffect(() => {
        console.log('InstrumentsTable', instruments);
    }, [instruments]);

    const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(instrumentsActions.search({searchText: e.currentTarget.value}));
    };

    return (
        <div>
            <p>
                Инструменты
                {instruments?.length ? ` (${instruments.length})` : ''}
            </p>
            <div>
                <input onChange={onChangeSearchText} />
            </div>
            <div className={S.instrumentsList}>
                {(filteredInstruments || instruments)?.map((v) => (
                    <div onClick={function onClickInstrument() {
                        dispatch(instrumentsActions.setActiveInstrument({instrument: v}));
                    }} key={v?.figi} className={S.instrument}>
                        {v?.name} {v?.ticker}
                    </div>
                ))}
            </div>
        </div>
    );
};
