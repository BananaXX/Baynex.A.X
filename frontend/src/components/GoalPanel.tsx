import React, { useEffect, useState } from 'react';
import { getGoal, setGoal } from '../api/goal';

interface Goal {
  profitTarget: number;
  deadline: string;
}

interface GoalPanelProps {
  platform: string;
}

const GoalPanel: React.FC<GoalPanelProps> = ({ platform }) => {
  const [goal, setLocalGoal] = useState<Goal>({ profitTarget: 0, deadline: '' });
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const g = await getGoal(platform);
      setLocalGoal(g || { profitTarget: 0, deadline: '' });
    };
    load();
  }, [platform]);

  const handleSave = async () => {
    await setGoal(platform, goal);
    setStatus('Saved ✅');
    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <div className="bg-zinc-900 text-white p-4 rounded-xl mt-2 border border-orange-500">
      <h2 className="text-xl mb-2 font-bold text-orange-400">🎯 Goal Settings</h2>
      <div className="space-y-2 text-sm">
        <div>
          <label className="block text-gray-400">Profit Target ($)</label>
          <input
            type="number"
            value={goal.profitTarget}
            onChange={(e) => setLocalGoal({ ...goal, profitTarget: parseFloat(e.target.value) })}
            className="w-full bg-black border border-gray-600 rounded p-1"
          />
        </div>
        <div>
          <label className="block text-gray-400">Deadline (e.g., 1h, 2d)</label>
          <input
            type="text"
            value={goal.deadline}
            onChange={(e) => setLocalGoal({ ...goal, deadline: e.target.value })}
            className="w-full bg-black border border-gray-600 rounded p-1"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded"
        >
          Save Goal
        </button>
        {status && <p className="text-green-500 text-sm mt-1">{status}</p>}
      </div>
    </div>
  );
};

export default GoalPanel;
