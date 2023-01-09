export interface Candle {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    time: number;
}

export interface Sma {
    time: number;
    value: number;
}

export interface Indicator {
    time: number;
    value: number;
}

export interface Indicators {
    sma: Indicator[];
    vwap: Indicator[];
    dStochastic: Indicator[];
    kStochastic: Indicator[];
}

export interface Data {
    candles: Candle[];
    indicators: Indicators;
}

export type KohanaChartModel = {
    data: Data;
    colors: any;
    className: string;
};
