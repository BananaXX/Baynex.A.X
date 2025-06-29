import React, { useEffect, useState } from 'react';
import { getLogs } from '../api/logs';

interface LogsPanelProps {
  platform: string;
}

const LogsPanel: React.FC<LogsPanelProps> = ({ platform }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const result = await getLogs(platform);
      setLogs(result);
      setLoading(false);
    };
    load();
  }, [platform]);

  return (
    <div className="bg-black text-white p-4 mt-2 rounded-xl border border-red-500">
      <h2 className="text-xl mb-2 font-semibold text-orange-400">📜 Strategy Logs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : logs.length === 0 ? (
        <p className="text-gray-400">No logs yet.</p>
      ) : (
        <div className="max-h-64 overflow-y-auto text-sm space-y-1">
          {logs.map((line, idx) => (
            <div key={idx} className="text-gray-300">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogsPanel;
