import axios from 'axios';

const API_BASE = '/api/strategy';

export const getStrategyStats = async (platform: string) => {
  const res = await axios.get(`${API_BASE}/stats?platform=${platform}`);
  return res.data;
};

export const switchStrategy = async (platform: string, strategy: string) => {
  const res = await axios.post(`${API_BASE}/switch`, {
    platform,
    strategy,
  });
  return res.data;
};

export const pauseStrategy = async (platform: string) => {
  const res = await axios.post(`${API_BASE}/pause`, { platform });
  return res.data;
};

export const setGoalTarget = async (platform: string, goal: number, deadline: number) => {
  const res = await axios.post(`/api/goal/${platform}`, {
    targetProfit: goal,
    deadlineMinutes: deadline,
  });
  return res.data;
};

export const toggleFlashMode = async (platform: string, enabled: boolean) => {
  const res = await axios.post(`${API_BASE}/flash`, { platform, enabled });
  return res.data;
};

export const toggleLearningBooster = async (platform: string, enabled: boolean) => {
  const res = await axios.post(`${API_BASE}/learn`, { platform, enabled });
  return res.data;
};
