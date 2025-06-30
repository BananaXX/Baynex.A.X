import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StrategyPanel = () => {
  const [strategy, setStrategy] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [flashMode, setFlashMode] = useState(false);
  const [booster, setBooster] = useState(false);

  const fetchStatus = async () => {
    const res = await axios.get('/api/strategy/status');
    const data = res.data;
    setStrategy(data.strategy);
    setStatus(data.status);
    setGoal(data.goal || '');
    setDeadline(data.deadline || '');
    setFlashMode(data.flashMode);
    setBooster(data.learningBooster);
  };

  const applyChanges = async () => {
    await axios.post('/api/strategy/update', {
      strategy,
      goal,
      deadline,
      flashMode,
      learningBooster: booster
    });
    fetchStatus();
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="bg-zinc-900 text-white rounded-2xl p-5 shadow-md space-y-4 border border-red-600">
      <h2 className="text-xl font-bold text-orange-400">🎯 Strategy Planner Panel</h2>

      <div className="space-y-2">
        <label className="block text-sm">Active Strategy</label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        >
          <option value="">-- Choose --</option>
          <option value="momentum">Momentum</option>
          <option value="reversal">Reversal</option>
          <option value="swing">Swing</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Goal Target ($)</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Deadline (e.g. 1h, 2d)</label>
        <input
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
        />
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={flashMode} onChange={() => setFlashMode(!flashMode)} />
          Flash Mode
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={booster} onChange={() => setBooster(!booster)} />
          Learning Booster
        </label>
      </div>

      <button
        onClick={applyChanges}
        className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded font-semibold w-full"
      >
        ✅ Apply Changes
      </button>

      <div className="text-sm text-zinc-400">Current Status: <span className="text-green-400">{status}</span></div>
    </div>
  );
};

export default StrategyPanel;
