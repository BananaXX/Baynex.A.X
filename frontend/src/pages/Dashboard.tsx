import React, { useEffect, useState } from 'react';
import StrategyPanel from '../components/StrategyPanel';
import Baynexa from '../components/Baynexa';
import { updateStrategyPlan, getDashboardData } from '../api/dashboard';

const Dashboard = () => {
  const [strategy, setStrategy] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [flashMode, setFlashMode] = useState(false);
  const [learningBooster, setLearningBooster] = useState(false);
  const [status, setStatus] = useState('Awaiting updates...');

  const applyChanges = async () => {
    try {
      setStatus('Updating strategy...');
      const result = await updateStrategyPlan({
        strategy,
        target: parseFloat(target),
        deadline,
        flashMode,
        learningBooster,
      });
      setStatus(result.message || 'Updated successfully!');
    } catch (error) {
      setStatus('Error updating strategy.');
    }
  };

  useEffect(() => {
    getDashboardData().then((data) => {
      if (data?.status) setStatus(data.status);
    });
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold text-green-500">✅ BAYNEX.A.X Dashboard is LIVE and Ready!</h1>
      <Baynexa />
      <h2 className="text-xl font-semibold mt-4">🎯 Strategy Planner Panel</h2>
      <div className="space-y-2">
        <input
          placeholder="Active Strategy"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="bg-black text-white border border-white p-2 w-full"
        />
        <input
          placeholder="Goal Target ($)"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="bg-black text-white border border-white p-2 w-full"
        />
        <input
          placeholder="Deadline (e.g. 1h, 2d)"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="bg-black text-white border border-white p-2 w-full"
        />
        <div className="flex space-x-4">
          <label>
            <input type="checkbox" checked={flashMode} onChange={() => setFlashMode(!flashMode)} />
            Flash Mode
          </label>
          <label>
            <input type="checkbox" checked={learningBooster} onChange={() => setLearningBooster(!learningBooster)} />
            Learning Booster
          </label>
        </div>
        <button
          onClick={applyChanges}
          className="bg-green-700 hover:bg-green-900 px-4 py-2 text-white font-semibold"
        >
          ✅ Apply Changes
        </button>
        <p className="text-sm mt-2">Current Status: {status}</p>
      </div>
      <StrategyPanel />
    </div>
  );
};

export default Dashboard;
