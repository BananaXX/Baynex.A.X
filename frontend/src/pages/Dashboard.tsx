import React, { useEffect, useState } from 'react';
import { getDashboardData } from '../api/dashboard';
import StrategyPanel from '../components/StrategyPanel';
import Baynexa from '../components/Baynexa';

const Dashboard: React.FC = () => {
  const [platform, setPlatform] = useState('deriv');
  const [data, setData] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);

  const refreshData = async () => {
    const result = await getDashboardData(platform);
    setData(result);
  };

  useEffect(() => {
    refreshData();
  }, [platform, refresh]);

  return (
    <div className="min-h-screen bg-black text-red-500 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          BAYNEX.A.X Dashboard — <span className="text-orange-400">{platform.toUpperCase()}</span>
        </h1>
        <select
          className="bg-gray-800 border border-red-500 px-2 py-1 rounded"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="deriv">Deriv</option>
          <option value="iqoption">IQ Option</option>
          <option value="mt5">MT5</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">📈 Account Stats</h2>
          <p>💰 Balance: ${data?.balance ?? '0.00'}</p>
          <p>📊 Win Rate: {data?.winRate ?? 0}%</p>
          <p>📉 PnL: ${data?.todaysPnL?.pnl ?? 0}</p>
          <p>🟢 Active Trades: {data?.activeTrades ?? 0}</p>
        </div>

        <StrategyPanel platform={platform} />
      </div>

      <div className="mt-6">
        <Baynexa feedback={data?.baynexaFeedback} />
      </div>

      <footer className="text-center text-gray-500 text-xs mt-8">
        Built with guidance from AI using ChatGPT · God the creator of heaven and Earth is my provider. ISAIAH:35;1-10
      </footer>
    </div>
  );
};

export default Dashboard;
