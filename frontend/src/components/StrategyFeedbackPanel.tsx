import React, { useEffect, useState } from 'react';
import { getStrategyStats } from '../api/strategy';

interface StrategyStats {
  strategy: string;
  winRate: number;
  pnl: number;
  activeTrades: number;
  tradesToday: number;
}

interface Props {
  platform: string;
}

const StrategyFeedbackPanel: React.FC<Props> = ({ platform }) => {
  const [stats, setStats] = useState<StrategyStats[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const result = await getStrategyStats(platform);
        setStats(result);
      } catch (err) {
        console.error('Failed to fetch strategy stats:', err);
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, [platform]);

  return (
    <div className="bg-black text-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2">📊 Strategy Feedback</h2>
      <ul className="space-y-2">
        {stats.map((stat, index) => (
          <li key={index} className="bg-gray-900 p-3 rounded-xl">
            <div className="flex justify-between">
              <span className="font-medium">{stat.strategy}</span>
              <span className="text-sm">{stat.winRate}% win</span>
            </div>
            <div className="text-sm">
              PnL: ${stat.pnl.toFixed(2)} | Active: {stat.activeTrades} | Today: {stat.tradesToday}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrategyFeedbackPanel;
