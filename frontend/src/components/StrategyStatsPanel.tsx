import React, { useEffect, useState } from 'react';

type StrategyStats = {
  name: string;
  winRate: number;
  pnl: number;
  trades: number;
};

export const StrategyStatsPanel: React.FC = () => {
  const [stats, setStats] = useState<StrategyStats[]>([]);
  const [timeframe, setTimeframe] = useState('today');

  useEffect(() => {
    fetch(`/api/strategy-stats?timeframe=${timeframe}`)
      .then(res => res.json())
      .then(data => setStats(data));
  }, [timeframe]);

  const best = stats.reduce((prev, curr) => (curr.winRate > prev.winRate ? curr : prev), {
    name: '',
    winRate: 0,
    pnl: 0,
    trades: 0,
  });

  return (
    <div className="bg-black text-white p-4 rounded-xl border border-orange-500 shadow mt-4">
      <h2 className="text-lg font-bold text-orange-400 mb-2">📈 Strategy Feedback</h2>
      <div className="mb-2">
        <label className="mr-2">Filter:</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="bg-black border border-orange-500 text-white p-1"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="all">All Time</option>
        </select>
      </div>
      <div className="overflow-auto max-h-64">
        {stats.map((s) => (
          <div
            key={s.name}
            className={`p-2 mb-1 rounded-lg border ${
              s.name === best.name ? 'border-green-400' : 'border-gray-600'
            }`}
          >
            <div className="flex justify-between">
              <strong>{s.name.toUpperCase()}</strong>
              <span className="text-sm">{s.trades} trades</span>
            </div>
            <div className="text-sm">Win Rate: {s.winRate}%</div>
            <div className="text-sm">PnL: ${s.pnl.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
