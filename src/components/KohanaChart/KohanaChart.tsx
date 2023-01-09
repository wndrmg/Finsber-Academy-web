import {
    ColorType,
    CrosshairMode,
    UTCTimestamp,
    createChart,
} from 'lightweight-charts';
import React, {useEffect, useRef} from 'react';

import * as T from './KohanaChart.model';

function setLegendText(priceValue: any) {
    let val = '∅';
    if (priceValue !== undefined) {
        val = (Math.round(priceValue * 100) / 100).toFixed(2);
    }
    // legend.innerHTML = 'MA10 <span style="color:rgba(4, 111, 232, 1)">' + val + '</span>';
}

function calculateSMA(data: any, count: any) {
    const avg = function (dataS: any) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i].close;
        }
        return sum / data.length;
    };
    const result = [];
    for (let i = count - 1, len = data.length; i < len; i++) {
        const val = avg(data.slice(i - count + 1, i));
        result.push({time: data[i].time, value: val});
    }
    console.log('result', result);
    return result;
}

function fillBarsSegment(left: any, right: any, points: any) {
    const deltaY = right.price - left.price;
    const deltaX = right.index - left.index;
    const angle = deltaY / deltaX;
    for (let i = left.index; i <= right.index; i++) {
        const basePrice = left.price + (i - left.index) * angle;
        const openNoise = 0.1 - Math.random() * 0.2 + 1;
        const closeNoise = 0.1 - Math.random() * 0.2 + 1;
        const open = basePrice * openNoise;
        const close = basePrice * closeNoise;
        const high = Math.max(
            basePrice * (1 + Math.random() * 0.2),
            open,
            close,
        );
        const low = Math.min(
            basePrice * (1 - Math.random() * 0.2),
            open,
            close,
        );
        points[i].open = open;
        points[i].high = high;
        points[i].low = low;
        points[i].close = close;
    }
}

function getRandomPrice() {
    return 10 + Math.round(Math.random() * 10000) / 100;
}

function convertBusinessDayToUTCTimestamp(date: any) {
    return new Date(Date.UTC(date.year, date.month - 1, date.day, 0, 0, 0, 0));
}
function getDiffDays(dateFrom: any, dateTo: any) {
    const df = convertBusinessDayToUTCTimestamp(dateFrom);
    const dt = convertBusinessDayToUTCTimestamp(dateTo);
    const diffTime = Math.abs(dt.getTime() - df.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function nextBusinessDay(time: any) {
    const d = convertBusinessDayToUTCTimestamp({
        year: time.year,
        month: time.month,
        day: time.day + 1,
    });
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
    };
}
function generateControlPoints(
    res: any,
    period: any = null,
    dataMultiplier: any = null,
): any {
    let time =
        period !== null ? period.timeFrom : {day: 1, month: 1, year: 2018};
    const timeTo =
        period !== null ? period.timeTo : {day: 1, month: 1, year: 2019};
    const days = getDiffDays(time, timeTo);
    dataMultiplier = dataMultiplier || 1;
    const controlPoints = [];
    controlPoints.push({index: 0, price: getRandomPrice() * dataMultiplier});
    for (let i = 0; i < days; i++) {
        if (i > 0 && i < days - 1 && Math.random() < 0.05) {
            controlPoints.push({
                index: i,
                price: getRandomPrice() * dataMultiplier,
            });
        }
        res.push({time});
        time = nextBusinessDay(time);
    }
    controlPoints.push({
        index: res.length - 1,
        price: getRandomPrice() * dataMultiplier,
    });
    return controlPoints;
}

function generateBarsData(period: any = null): any {
    const res: any = [];
    const controlPoints: any = generateControlPoints(res, period);
    for (let i = 0; i < controlPoints.length - 1; i++) {
        const left = controlPoints[i];
        const right = controlPoints[i + 1];
        fillBarsSegment(left, right, res);
    }
    return res;
}

export const KohanaChart = ({data, colors, className}: T.KohanaChartModel) => {
    const {
        backgroundColor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = colors;
    const chartContainerRef = useRef<HTMLDivElement>();
    const chartStochContainerRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const handleResize = () => {
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            chart.applyOptions({width: chartContainerRef.current.clientWidth});
        };

        // @ts-ignore
        const chart = createChart(chartContainerRef.current, {
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
                visible: true,
            },
            leftPriceScale: {
                autoScale: true,
            },
            layout: {
                background: {type: ColorType.Solid, color: backgroundColor},
                textColor,
            },

            // @ts-ignore
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chart.timeScale().fitContent();

        // const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
        // newSeries.setData(data);
        const candleSeries = chart.addCandlestickSeries();
        console.log('datadatadatadatadata', data);
        candleSeries.setData(
            data.candles?.sort((a, b) => a.time + b.time) as any,
        );

        const colors = ['green', 'blue', 'black', 'yellow'];

        // SMA
        const smaLine = chart.addLineSeries({
            color: colors[0],
            lineWidth: 2,
        });
        smaLine.setData(data.indicators.sma as any);

        // VWAP
        const vwapLine = chart.addLineSeries({
            color: colors[1],
            lineWidth: 2,
        });
        vwapLine.setData(data.indicators.vwap as any);

        // Stochastic
        const chartStoch = createChart(chartStochContainerRef.current!, {
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
                visible: true,
            },
            leftPriceScale: {
                autoScale: true,
            },
            layout: {
                background: {type: ColorType.Solid, color: backgroundColor},
                textColor,
            },
            // @ts-ignore
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chartStoch.timeScale().fitContent();
        chartStoch.subscribeClick((h) => {
            if (Number(h.time as UTCTimestamp)) {
                console.log(
                    'sdafasfd',
                    Number(h.time as UTCTimestamp),
                    h.time,
                    h.hoveredMarkerId,
                    h.hoveredSeries,
                    h,
                );
            }
        });
        chartStoch;

        //
        const kStochasticLine = chartStoch.addLineSeries({
            color: colors[2],
            lineWidth: 2,
        });
        kStochasticLine.setData(data.indicators.kStochastic as any);
        console.log('data.indicators.');

        const legend = document.createElement('div');
        legend.className = 'sma-legend';
        chartContainerRef?.current?.appendChild(legend);
        legend.style.display = 'block';
        legend.style.left = `${3}px`;
        legend.style.top = `${3}px`;

        function setLegendText(priceValue: any) {
            let val = '∅';
            if (priceValue !== undefined) {
                val = (Math.round(priceValue * 100) / 100).toFixed(2);
            }
            legend.innerHTML = `MA10 <span style="color:rgba(4, 111, 232, 1)">${val}</span>`;
        }

        // setLegendText(data.indicators[smaData.length - 1].value);

        // chart.subscribeCrosshairMove((param) => {
        //     setLegendText(param.seriesPrices.get(smaLine));
        // });

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [
        data,
        backgroundColor,
        lineColor,
        textColor,
        areaTopColor,
        areaBottomColor,
    ]);

    return (
        <>
            <div
                className={className}
                // @ts-ignore
                ref={chartContainerRef}
            />
            <div
                className={className}
                // @ts-ignore
                ref={chartStochContainerRef}
            />
        </>
    );
};
