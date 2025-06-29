import axios from 'axios';

export const getLogs = async (platform: string) => {
  const res = await axios.get(`/api/logs/${platform}`);
  return res.data.logs;
};
