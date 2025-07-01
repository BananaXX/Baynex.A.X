import React, { useEffect, useState } from 'react';

const BACKEND_URL = 'https://baynex-bot-1.onrender.com';

const StatusPanel: React.FC = () => {
  const [status, setStatus] = useState<string>('Checking...');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/status`);
        const data = await res.json();
        if (data.ok) {
          setStatus('✅ Connected to backend');
          setError(false);
        } else {
          setStatus('❌ Backend error');
          setError(true);
        }
      } catch (err) {
        setStatus('❌ Error connecting to backend.');
        setError(true);
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      <strong>🧠 Baynexa:</strong>
      <p style={{ color: error ? 'red' : 'green' }}>{status}</p>
    </div>
  );
};

export default StatusPanel;
