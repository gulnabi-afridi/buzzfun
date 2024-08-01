"use client";

import React, { useState, useRef, useEffect } from "react";
import { init, dispose } from "klinecharts";
import "@klinecharts/pro/dist/klinecharts-pro.css";

const CandleChart: React.FC = () => {
  useEffect(() => {
    const chart = init("chart");

    // Apply data
    chart?.applyNewData([
        { timestamp: 1625097600000, open: 34000.5, high: 34256.75, low: 33850.2, close: 34150.8, volume: 1250 },
        { timestamp: 1625184000000, open: 34150.8, high: 34500.0, low: 34100.25, close: 34475.5, volume: 1500 },
        { timestamp: 1625270400000, open: 34475.5, high: 34700.0, low: 34200.0, close: 34300.25, volume: 1800 },
        { timestamp: 1625356800000, open: 34300.25, high: 34400.5, low: 33900.75, close: 34050.0, volume: 2000 },
        { timestamp: 1625443200000, open: 34050.0, high: 34300.0, low: 33800.0, close: 33950.75, volume: 2200 },
        { timestamp: 1625529600000, open: 33950.75, high: 34200.0, low: 33900.0, close: 34150.5, volume: 1900 },
        { timestamp: 1625616000000, open: 34150.5, high: 34400.0, low: 34100.25, close: 34350.0, volume: 2100 },
        { timestamp: 1625702400000, open: 34350.0, high: 34500.5, low: 34200.0, close: 34250.75, volume: 2300 },
        { timestamp: 1625788800000, open: 34250.75, high: 34400.0, low: 34000.5, close: 34050.25, volume: 2500 },
        { timestamp: 1625875200000, open: 34050.25, high: 34300.0, low: 33900.0, close: 34250.5, volume: 2700 },
        { timestamp: 1625961600000, open: 34250.5, high: 34600.75, low: 34200.25, close: 34550.0, volume: 2900 },
        { timestamp: 1626048000000, open: 34550.0, high: 34700.0, low: 34400.5, close: 34450.25, volume: 3100 },
        { timestamp: 1626134400000, open: 34450.25, high: 34600.5, low: 34300.0, close: 34550.75, volume: 3300 },
        { timestamp: 1626220800000, open: 34550.75, high: 34900.0, low: 34500.25, close: 34850.5, volume: 3500 },
        { timestamp: 1626307200000, open: 34850.5, high: 35000.0, low: 34700.0, close: 34750.25, volume: 3700 },
        { timestamp: 1626393600000, open: 34750.25, high: 34900.75, low: 34600.5, close: 34850.0, volume: 3900 },
        { timestamp: 1626480000000, open: 34850.0, high: 35100.0, low: 34800.25, close: 35050.5, volume: 4100 },
        { timestamp: 1626566400000, open: 35050.5, high: 35200.25, low: 34900.0, close: 34950.75, volume: 4300 },
        { timestamp: 1626652800000, open: 34950.75, high: 35100.5, low: 34800.25, close: 35050.0, volume: 4500 },
        { timestamp: 1626739200000, open: 35050.0, high: 35200.0, low: 34900.5, close: 35150.25, volume: 4700 },
        { timestamp: 1626825600000, open: 35150.25, high: 35300.0, low: 35000.0, close: 35100.5, volume: 4900 },
        { timestamp: 1626912000000, open: 35100.5, high: 35250.0, low: 34950.0, close: 35200.75, volume: 5100 },
        { timestamp: 1626998400000, open: 35200.75, high: 35400.0, low: 35150.0, close: 35350.0, volume: 5300 },
        { timestamp: 1627084800000, open: 35350.0, high: 35500.0, low: 35200.0, close: 35250.5, volume: 5500 },
        { timestamp: 1627171200000, open: 35250.5, high: 35400.0, low: 35100.0, close: 35300.25, volume: 5700 },
        { timestamp: 1627257600000, open: 35300.25, high: 35450.0, low: 35150.0, close: 35400.75, volume: 5900 },
        { timestamp: 1627344000000, open: 35400.75, high: 35600.0, low: 35300.0, close: 35550.0, volume: 6100 },
        { timestamp: 1627430400000, open: 35550.0, high: 35700.0, low: 35400.0, close: 35450.25, volume: 6300 },
        { timestamp: 1627516800000, open: 35450.25, high: 35600.0, low: 35300.0, close: 35500.5, volume: 6500 },
        { timestamp: 1627603200000, open: 35500.5, high: 35650.0, low: 35350.0, close: 35600.75, volume: 6700 },
        { timestamp: 1627689600000, open: 35600.75, high: 35800.0, low: 35500.0, close: 35750.0, volume: 6900 },
        { timestamp: 1627776000000, open: 35750.0, high: 35900.0, low: 35600.0, close: 35650.25, volume: 7100 },
        { timestamp: 1627862400000, open: 35650.25, high: 35800.0, low: 35500.0, close: 35700.5, volume: 7300 },
        { timestamp: 1627948800000, open: 35700.5, high: 35850.0, low: 35550.0, close: 35800.75, volume: 7500 },
        { timestamp: 1628035200000, open: 35800.75, high: 36000.0, low: 35700.0, close: 35950.0, volume: 7700 },
        { timestamp: 1628121600000, open: 35950.0, high: 36100.0, low: 35800.0, close: 35850.25, volume: 7900 },
        { timestamp: 1628208000000, open: 35850.25, high: 36000.0, low: 35700.0, close: 35900.5, volume: 8100 },
        { timestamp: 1628294400000, open: 35900.5, high: 36050.0, low: 35750.0, close: 36000.75, volume: 8300 },
        { timestamp: 1628380800000, open: 36000.75, high: 36200.0, low: 35900.0, close: 36150.0, volume: 8500 },
        { timestamp: 1628467200000, open: 36150.0, high: 36300.0, low: 36000.0, close: 36050.25, volume: 8700 }
      ]);

    // Customize chart styles
    chart?.setStyles({
      candle: {
        type: "candle_solid",
        bar: {
          upColor: "#ffffff",
          downColor: "#000000",
          noChangeColor: "#888888",
          upBorderColor: "#000000",
          downBorderColor: "#000000",
          noChangeBorderColor: "#888888",
          upWickColor: "#000000",
          downWickColor: "#000000",
          noChangeWickColor: "#888888",
        },
      },
      grid: {
        show: false,
      },
    });

    return () => {
      dispose("chart");
    };
  }, []);

  return <div id="chart" style={{ width: "100%", height: "100%" }} />;
};

export default CandleChart;
