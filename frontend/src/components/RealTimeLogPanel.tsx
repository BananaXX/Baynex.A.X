import React, { useEffect, useState } from 'react';

interface LogEntry {
  timestamp: string;
  message: string;
}

export default function RealTimeLogPanel() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/logs');
        const data = await res.json();
        setLogs(data.logs);
      } catch (err) {
        console.error('Failed to load logs:', err);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white p-4 rounded-lg h-64 overflow-y-scroll shadow-md">
      <h2 className="text-lg font-semibold mb-2">📜 Real-Time Logs</h2>
      <ul className="space-y-1 text-sm">
        {logs.map((log, idx) => (
          <li key={idx}>
            <span className="text-gray-400">{log.timestamp}:</span> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
