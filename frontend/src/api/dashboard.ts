// frontend/src/api/dashboard.ts
const BASE_URL = 'https://baynex-bot-1.onrender.com';

export const getDashboardData = async () => {
  const res = await fetch(`${BASE_URL}/status`);
  return await res.json();
};

export const sendCommand = async (command: string) => {
  const res = await fetch(`${BASE_URL}/command`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ command }),
  });
  return await res.json();
};

export const updateStrategy = async (strategy: string) => {
  const res = await fetch(`${BASE_URL}/strategy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ strategy }),
  });
  return await res.json();
};

export const updateVoiceMode = async (mode: string) => {
  const res = await fetch(`${BASE_URL}/voice-mode`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode }),
  });
  return await res.json();
};

export const updateGoal = async (target: number, deadline: string) => {
  const res = await fetch(`${BASE_URL}/goal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ target, deadline }),
  });
  return await res.json();
};
