import React, { useEffect, useState } from 'react';
import { getGoal, setGoal } from '../api/goal';
import { getLogs } from '../api/logs';

const StrategyPanel = ({ platform }: { platform: string }) => {
  const [profitTarget, setProfitTarget] = useState<number>(0);
  const [deadline, setDeadline] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const goalData = await getGoal(platform);
      const logData = await getLogs(platform);
      if (goalData) {
        setProfitTarget(goalData.profitTarget);
        setDeadline(goalData.deadline);
      }
      setLogs(logData);
      setLoading(false);
    }
    fetchData();
  }, [platform]);

  const handleSubmit = async () => {
    await setGoal(platform, { profitTarget, deadline });
  };

  return (
    <div className="bg-black text-red-500 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">📊 Strategy Planner ({platform})</h2>
      <div className="space-y-2">
        <div>
          🎯 <label>Profit Target ($):</label>
          <input
            className="ml-2 bg-gray-800 border border-red-500 px-2 py-1 rounded"
            type="number"
            value={profitTarget}
            onChange={(e) => setProfitTarget(Number(e.target.value))}
          />
        </div>
        <div>
          ⏱️ <label>Deadline:</label>
          <input
            className="ml-2 bg-gray-800 border border-red-500 px-2 py-1 rounded"
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button
          className="bg-red-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          ✅ Save Goal
        </button>
        <div className="mt-4">
          <h3 className="font-bold mb-1">📖 Strategy Logs</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="max-h-40 overflow-y-auto bg-gray-900 p-2 rounded border border-red-400 text-sm">
              {logs.map((log, index) => (
                <li key={index}>🪵 {log}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyPanel;
