
export interface IpoDate {
    seconds: number;
}

export interface Nominal {
    currency: string;
    units?: number;
}

export interface MinPriceIncrement {
    nano: number;
}

export interface First1minCandleDate {
    seconds: number;
}

export interface First1dayCandleDate {
    seconds: number;
}

export interface Instrument {
    figi: string;
    ticker: string;
    class_code: string;
    isin: string;
    lot: number;
    currency: string;
    name: string;
    exchange: string;
    ipo_date: IpoDate;
    issue_size: number;
    country_of_risk: string;
    country_of_risk_name: string;
    sector: string;
    issue_size_plan: number;
    nominal: Nominal;
    trading_status: number;
    buy_available_flag: boolean;
    sell_available_flag: boolean;
    div_yield_flag?: boolean;
    share_type: number;
    min_price_increment: MinPriceIncrement;
    api_trade_available_flag: boolean;
    uid: string;
    real_exchange: number;
    position_uid: string;
    for_iis_flag: boolean;
    first_1min_candle_date: First1minCandleDate;
    first_1day_candle_date: First1dayCandleDate;
}

export type InstrumentsState = {
    instruments?: Instrument[] | null;
    activeInstrument: Instrument;
    searchText: string;

};
