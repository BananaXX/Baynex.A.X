/frontend/src/components/RealTimeStats.tsx — Displays Live Strategy Feedback Includes:

Overall Profit/Loss (PnL)

Win Rate

Active Trades

Per-strategy win stats

Timeframe filter (Today, Week, Month)


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RealTimeStats = () => {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState('today');

  const fetchStats = async () => {
    try {
      const res = await axios.get(`/api/stats?filter=${filter}`);
      setData(res.data);
    } catch (err) {
      console.error('Stats error:', err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, [filter]);

  if (!data) return <div className="text-white">Loading stats...</div>;

  return (
    <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-md border border-orange-500 space-y-4">
      <h2 className="text-xl font-bold text-orange-400">📊 Real-Time Strategy Feedback</h2>

      <div className="flex gap-3 items-center">
        <label>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 p-2 rounded"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-zinc-400">📈 PnL:</span>
          <div className={`text-2xl ${data.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${data.pnl.toFixed(2)}
          </div>
        </div>

        <div>
          <span className="text-zinc-400">✅ Win Rate:</span>
          <div className="text-2xl">{data.winRate.toFixed(1)}%</div>
        </div>

        <div>
          <span className="text-zinc-400">📊 Active Trades:</span>
          <div className="text-2xl">{data.activeTrades}</div>
        </div>
      </div>

      <div>
        <h3 className="text-orange-300 mt-4 mb-2">Per Strategy:</h3>
        <ul className="space-y-2 text-sm">
          {data.strategies.map((s: any) => (
            <li key={s.name} className="flex justify-between">
              <span>{s.name}:</span>
              <span>{s.winRate}% win</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeStats;

