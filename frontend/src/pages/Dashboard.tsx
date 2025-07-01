import React, { useEffect, useState } from 'react';
import Baynexa from '../components/Baynexa';
import StrategyPanel from '../components/StrategyPanel';
import { getDashboardData, updatePlannerSettings } from '../api/dashboard';

const Dashboard: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [flashMode, setFlashMode] = useState(false);
  const [learningBooster, setLearningBooster] = useState(false);
  const [status, setStatus] = useState('Awaiting updates...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData();
        setStatus(data.status || '✅ Connected to BAYNEX core.');
      } catch (error) {
        setStatus('❌ Error connecting to backend.');
      }
    };
    fetchData();
  }, []);

  const handleApplyChanges = async () => {
    try {
      await updatePlannerSettings({
        strategy: activeStrategy,
        target: goalTarget,
        deadline,
        flashMode,
        learningBooster,
      });
      setStatus('✅ Planner settings updated!');
    } catch (error) {
      setStatus('❌ Failed to update settings.');
    }
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-2">✅ BAYNEX.A.X</h1>
      <p className="text-xl mb-4">Dashboard is LIVE and Ready!</p>

      {/* Pass status to Baynexa */}
      <Baynexa message={status} />

      {/* Strategy Buttons */}
      <StrategyPanel activeStrategy={activeStrategy} onSwitch={setActiveStrategy} />

      {/* Input Fields */}
      <div className="mt-6 space-y-3">
        <div>
          <label className="block">Goal Target ($)</label>
          <input
            type="text"
            value={goalTarget}
            onChange={(e) => setGoalTarget(e.target.value)}
            className="text-black px-2 py-1 w-full"
          />
        </div>

        <div>
          <label className="block">Deadline (e.g. 1h, 2d)</label>
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="text-black px-2 py-1 w-full"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label>
            <input
              type="checkbox"
              checked={flashMode}
              onChange={() => setFlashMode(!flashMode)}
            /> Flash Mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={learningBooster}
              onChange={() => setLearningBooster(!learningBooster)}
            /> Learning Booster
          </label>
        </div>

        <button
          onClick={handleApplyChanges}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          ✅ Apply Changes
        </button>

        <p className="mt-4 font-mono">Current Status: {status}</p>
      </div>
    </div>
  );
};

export default Dashboard;
