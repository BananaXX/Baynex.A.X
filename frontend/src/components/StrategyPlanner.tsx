import React, { useState } from 'react';

const BACKEND_URL = 'https://baynex-bot-1.onrender.com';

const StrategyPlanner: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [flashMode, setFlashMode] = useState(false);
  const [learningBooster, setLearningBooster] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApply = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/apply-goal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal,
          deadline,
          flashMode,
          learningBooster,
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        setError('❌ Failed to apply goal settings');
      } else {
        setError(null);
        alert('✅ Goal settings updated');
      }
    } catch (err) {
      setError('❌ Error applying settings');
    }
  };

  return (
    <div>
      <h2>🎯 Strategy Planner</h2>
      <input
        type="number"
        placeholder="Goal Target ($)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Deadline (e.g. 1h, 2d)"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={flashMode}
          onChange={(e) => setFlashMode(e.target.checked)}
        />
        Flash Mode
      </label>
      <label>
        <input
          type="checkbox"
          checked={learningBooster}
          onChange={(e) => setLearningBooster(e.target.checked)}
        />
        Learning Booster
      </label>
      <br />
      <button onClick={handleApply}>✅ Apply Changes</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StrategyPlanner;
