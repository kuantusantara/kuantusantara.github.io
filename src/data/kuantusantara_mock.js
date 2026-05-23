// src/data/kuantusantara_mock.js

export const institutionalMetrics = {
  eas: [
    {
      asset: "XAUUSD",
      strategy: "Volatility Edge / Precision Swing",
      metrics: {
        sharpeRatio: "2.84",
        sortinoRatio: "4.15",
        maxDrawdown: "4.82%",
        recoveryFactor: "6.5",
        monthlyAlpha: "3.20%"
      },
      validation: {
        monteCarloConfidence: "98.5%",
        outOfSampleTested: "120 Months",
        dataFeed: "Tick-by-Tick (Dukascopy)"
      },
      safetyProtocols: ["Strict Pending Orders", "Volatility-Adjusted Position Sizing", "Zero Martingale"]
    },
    {
      asset: "EURUSD",
      strategy: "Macro Trend / Institutional Swing",
      metrics: {
        sharpeRatio: "2.12",
        sortinoRatio: "3.05",
        maxDrawdown: "3.15%",
        recoveryFactor: "5.2",
        monthlyAlpha: "1.85%"
      },
      validation: {
        monteCarloConfidence: "99.1%",
        outOfSampleTested: "144 Months",
        dataFeed: "Tick-by-Tick (IC Markets)"
      },
      safetyProtocols: ["Strict Pending Orders", "Dynamic Stop-Loss", "Zero Grid"]
    },
    {
      asset: "NASDAQ",
      strategy: "Momentum Capture / Index Swing",
      metrics: {
        sharpeRatio: "2.45",
        sortinoRatio: "3.60",
        maxDrawdown: "6.20%",
        recoveryFactor: "8.1",
        monthlyAlpha: "4.15%"
      },
      validation: {
        monteCarloConfidence: "97.8%",
        outOfSampleTested: "96 Months",
        dataFeed: "Tick-by-Tick (Pepperstone)"
      },
      safetyProtocols: ["Strict Pending Orders", "Session-Specific Routing", "Zero Martingale"]
    }
  ],
  pricing: [
    { tier: "Quarterly", months: 3, label: "Retail Standard", cta: "Request Allocation" },
    { tier: "Biannual", months: 6, label: "Pro Trader", cta: "Request Allocation" },
    { tier: "Annual", months: 12, label: "Institutional License", cta: "Contact Desks" }
  ]
};