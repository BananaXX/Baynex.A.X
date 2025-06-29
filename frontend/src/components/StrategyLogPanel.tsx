import React from 'react';

interface LogEntry {
  timestamp: string;
  type: 'trade' | 'switch' | 'voice' | 'goal' | 'error';
  message: string;
}

interface Props {
  logs: LogEntry[];
}

export const StrategyLogPanel: React.FC<Props> = ({ logs }) => {
  const getTypeStyle = (type: LogEntry['type']) => {
    switch (type) {
      case 'trade':
        return 'text-green-400';
      case 'switch':
        return 'text-orange-400';
      case 'voice':
        return 'text-yellow-300';
      case 'goal':
        return 'text-blue-400';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="mt-6 text-white">
      <h2 className="text-orange-400 text-lg font-semibold mb-2">📝 Strategy Logs</h2>
      <div className="bg-black border border-orange-600 rounded p-3 h-64 overflow-y-scroll text-sm">
        {logs.length === 0 ? (
          <p className="text-gray-500">No logs yet.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className={`mb-1 ${getTypeStyle(log.type)}`}>
              [{log.timestamp}] {log.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
