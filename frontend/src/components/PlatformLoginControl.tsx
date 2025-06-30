import React, { useState } from 'react';

type Platform = 'deriv' | 'iqoption' | 'mt5';

interface LoginProps {
  onLogin: (platform: Platform, credentials: Record<string, string>) => void;
}

export default function PlatformLoginControl({ onLogin }: LoginProps) {
  const [platform, setPlatform] = useState<Platform>('deriv');
  const [credentials, setCredentials] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onLogin(platform, credentials);
  };

  const renderInputs = () => {
    switch (platform) {
      case 'deriv':
        return (
          <>
            <input
              className="input"
              placeholder="Deriv API Token"
              onChange={(e) => handleChange('token', e.target.value)}
            />
          </>
        );
      case 'iqoption':
        return (
          <>
            <input
              className="input"
              placeholder="IQ Option Email"
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <input
              className="input"
              placeholder="IQ Option Password"
              type="password"
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </>
        );
      case 'mt5':
        return (
          <>
            <input
              className="input"
              placeholder="MT5 Server"
              onChange={(e) => handleChange('server', e.target.value)}
            />
            <input
              className="input"
              placeholder="MT5 Login ID"
              onChange={(e) => handleChange('login', e.target.value)}
            />
            <input
              className="input"
              placeholder="MT5 Password"
              type="password"
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </>
        );
    }
  };

  return (
    <div className="p-4 bg-black text-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">🔐 Platform Login</h2>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value as Platform)}
        className="select mb-3"
      >
        <option value="deriv">Deriv</option>
        <option value="iqoption">IQ Option</option>
        <option value="mt5">MT5</option>
      </select>
      <div className="space-y-2">{renderInputs()}</div>
      <button onClick={handleSubmit} className="btn mt-4 bg-orange-600 hover:bg-orange-700">
        Connect
      </button>
    </div>
  );
}
