import React, { useEffect, useState } from 'react';
import { getGoal, setGoal } from '../api/goal';
import { getStrategies, switchStrategy, pauseStrategy } from '../api/strategy';
import { Toggle } from './Toggle';

const platforms = ['deriv', 'iqoption', 'mt5'];

export default function StrategyPlanner() {
  const [platform, setPlatform] = useState('deriv');
  const [strategies, setStrategies] = useState<string[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [goal, setGoalData] = useState({ profitTarget: '', deadline: '' });
  const [loading, setLoading] = useState(false);
  const [flashMode, setFlashMode] = useState(false);
  const [learningBoost, setLearningBoost] = useState(false);

  useEffect(() => {
    async function fetchInitial() {
      const goalData = await getGoal(platform);
      const strategyList = await getStrategies(platform);
      if (goalData) setGoalData(goalData);
      setStrategies(strategyList || []);
    }
    fetchInitial();
  }, [platform]);

  const handleSwitch = async () => {
    setLoading(true);
    await switchStrategy(platform, selectedStrategy);
    setLoading(false);
  };

  const handlePause = async () => {
    setLoading(true);
    await pauseStrategy(platform);
    setLoading(false);
  };

  const handleGoalUpdate = async () => {
    setLoading(true);
    await setGoal(platform, {
      profitTarget: parseFloat(goal.profitTarget),
      deadline: goal.deadline,
    });
    setLoading(false);
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-black text-white max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🎯 Strategy Planner Panel</h2>
      <div className="mb-4">
        <label className="block mb-1">Platform</label>
        <select
          className="w-full p-2 text-black"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Strategy</label>
        <select
          className="w-full p-2 text-black"
          value={selectedStrategy}
          onChange={(e) => setSelectedStrategy(e.target.value)}
        >
          {strategies.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className="bg-orange-600 px-4 py-2 rounded"
          onClick={handleSwitch}
          disabled={loading}
        >
          Switch Strategy
        </button>
        <button
          className="bg-gray-600 px-4 py-2 rounded"
          onClick={handlePause}
          disabled={loading}
        >
          Pause Strategy
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Target Profit ($)</label>
        <input
          className="w-full p-2 text-black"
          type="number"
          value={goal.profitTarget}
          onChange={(e) => setGoalData({ ...goal, profitTarget: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Deadline (e.g., 1h, 3h, 1d)</label>
        <input
          className="w-full p-2 text-black"
          type="text"
          value={goal.deadline}
          onChange={(e) => setGoalData({ ...goal, deadline: e.target.value })}
        />
      </div>
      <button
        className="bg-green-600 px-4 py-2 rounded mb-4"
        onClick={handleGoalUpdate}
        disabled={loading}
      >
        Update Goal
      </button>

      <div className="flex justify-between items-center mb-4">
        <label>⚡ Flash Mode</label>
        <Toggle enabled={flashMode} setEnabled={setFlashMode} />
      </div>
      <div className="flex justify-between items-center">
        <label>🧠 Learning Booster</label>
        <Toggle enabled={learningBoost} setEnabled={setLearningBoost} />
      </div>
    </div>
  );
}
