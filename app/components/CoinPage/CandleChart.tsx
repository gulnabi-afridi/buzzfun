import React, { useEffect, useRef, memo } from "react";
import { useTheme } from "next-themes";
import Trades from "./Trades";
import StatsHeader from "./StatsHeader";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (container.current) {
      while (container.current.firstChild) {
        container.current.removeChild(container.current.firstChild);
      }

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: resolvedTheme === "dark" ? "dark" : "light",
        style: "1",
        locale: "en",
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        calendar: false,
        hide_volume: true,
        support_host: "https://www.tradingview.com",
      });
      container.current.appendChild(script);

      return () => {
        // Cleanup: Remove the script if the component unmounts or re-renders
        if (container.current) {
          container.current.innerHTML = "";
        }
      };
    }
  }, [resolvedTheme]);

  return (
    <div className="w-full flex flex-col">
      {/* for small screen  */}
      <div className="w-full csm:hidden block">
        <StatsHeader />
      </div>

      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
      {/* trades for small screen ---> */}
      <div className="w-full csm:hidden block">
        <Trades />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
