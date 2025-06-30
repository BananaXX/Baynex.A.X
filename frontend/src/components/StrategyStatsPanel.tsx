import React, { useEffect, useState } from 'react';
import { getStrategyStats } from '../api/stats';

interface StrategyStats {
  strategy: string;
  winRate: number;
  pnl: number;
  activeTrades: number;
  isPinned: boolean;
}

export default function StrategyStatsPanel() {
  const [stats, setStats] = useState<StrategyStats[]>([]);

  useEffect(() => {
    async function fetchStats() {
      const result = await getStrategyStats();
      if (result) setStats(result);
    }
    fetchStats();
  }, []);

  const pinned = stats.find((s) => s.isPinned);

  return (
    <div className="p-4 mt-4 bg-black text-white rounded-xl shadow-md max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-2">📊 Strategy Performance Overview</h2>
      {pinned && (
        <div className="bg-red-700 text-white p-3 rounded-lg mb-4 shadow-lg">
          <h3 className="text-lg font-bold">🔥 Best Performing Strategy (Pinned)</h3>
          <p>
            <span className="font-bold">{pinned.strategy}</span> — Win Rate: {pinned.winRate}% | PnL: ${pinned.pnl.toFixed(2)} | Active Trades: {pinned.activeTrades}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((s, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg p-3 bg-gray-900">
            <h4 className="font-bold text-orange-400">{s.strategy}</h4>
            <p>✅ Win Rate: {s.winRate}%</p>
            <p>💰 PnL: ${s.pnl.toFixed(2)}</p>
            <p>📈 Active Trades: {s.activeTrades}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
