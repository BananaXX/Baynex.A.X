export const getLogs = async (platform: string): Promise<string[]> => {
  try {
    const res = await fetch(`/api/logs/${platform}`);
    const data = await res.json();
    return data.logs || [];
  } catch (err) {
    console.error('Failed to fetch logs:', err);
    return [];
  }
};
