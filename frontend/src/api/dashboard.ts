// frontend/src/api/dashboard.ts

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // ✅ this line uses the env var

export const getDashboardData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/status`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('❌ Error fetching dashboard data:', err);
    throw err;
  }
};

export const updatePlannerSettings = async (settings: {
  strategy: string;
  target: string;
  deadline: string;
  flashMode: boolean;
  learningBooster: boolean;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/api/planner`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('❌ Failed to update planner settings:', err);
    throw err;
  }
};
