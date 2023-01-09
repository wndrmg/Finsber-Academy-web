import './App.scss';

import classNames from 'classnames';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AdvancedChartWidgetProps} from 'react-tradingview-embed';

import {getInstrumentsSelector, getIsLoadingConfigSelector} from '@src/redux/reducers/config/config.selector';
import {webSocketActions} from '@src/redux/reducers/webSocket';
import {getIsOnline} from '@src/redux/reducers/webSocket/webSocket.selector';

import Loading from './assets/shared/loading.gif';
import {KohanaChart} from './components/KohanaChart';
import {InstrumentsList} from '@components/InstrumentsTable';
import {getActiveInstrumentSelector} from '@src/redux/reducers/instruments/instruments.selector';

const intervals = ['1', '5', '15', '60', 'D'];

// const SYMBOLS = ['BINANCE:ETHUSDT', 'BINANCE:BTCUSDT', 'BINANCE:USDTRUB'];
export interface Open {
    units: number;
    nano: number;
}

export interface High {
    units: number;
    nano: number;
}

export interface Low {
    units: number;
    nano: number;
}

export interface Close {
    units: number;
    nano: number;
}

export interface Time {
    seconds: number;
}

export interface Candle {
    open: Open;
    high: High;
    low: Low;
    close: Close;
    volume: number;
    time: Time;
    is_complete: boolean;
}

export interface HistoricalData {
    candles: Candle[];
}

export const App = () => {
    const dispatch = useDispatch();
    const [intervalTimeframe, setIntervalTimeframe] = useState('5');
    const [broker, setBroker] = useState('Tinkoff');
    const [symbol, setSymbol] = useState('NASDAQ:GOOGL'); // BINANCE:BTCUSDT
    const isLoadingInstruments = useSelector(getIsLoadingConfigSelector);
    const instruments = useSelector(getInstrumentsSelector);
    const activeInstrument = useSelector(getActiveInstrumentSelector);
    const config: AdvancedChartWidgetProps = {
        // @ts-ignore
        disabled_features: [
            'use_localstorage_for_settings',
            'header_symbol_search',
        ],
        interval: intervalTimeframe,
        container_id: symbol,
        theme: 'dark',
        symbol,
        autosize: true,
    };
    console.log(intervalTimeframe, symbol);
    const [chartData, setChartData] = useState<any>(null);
    const isOnline = useSelector(getIsOnline);
    console.log('isOnline', isOnline);

    useEffect(() => {
        dispatch(webSocketActions.initCase());
    }, [dispatch]);

    return (
        <div className="App">
            <div className={classNames('online', isOnline && 'online_true')} />
            <div className="leftBlock">
                <div className="charts">
                    {/* <div className="chart"> */}
                    {/*    <AdvancedChart widgetProps={config} */}
                    {/*                   widgetPropsAny={{ */}
                    {/*                       "studies": [ */}
                    {/*                           "MASimple@tv-basicstudies" */}
                    {/*                       ] */}
                    {/*                   }}/> */}
                    {/* </div> */}
                    <div className="my-chart">
                        <div className="tools-up">
                            {intervals.map((v) => (
                                <div
                                    key={v}
                                    className={classNames(
                                        'button',
                                        v === intervalTimeframe &&
                                            'button_active',
                                    )}
                                    onClick={() => setIntervalTimeframe(v)}
                                >
                                    {v}
                                </div>
                            ))}
                            <input value={activeInstrument.ticker} />
                        </div>
                        {chartData && (
                            <KohanaChart
                                className="my-chart"
                                colors={{}}
                                data={chartData}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="rightBlock">
                {isLoadingInstruments && (
                    <img src={Loading} alt="this slowpoke moves" width="25" />
                )}

                <InstrumentsList/>
            </div>
        </div>
    );
};
