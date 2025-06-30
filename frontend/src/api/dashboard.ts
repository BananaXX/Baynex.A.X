// frontend/src/api/dashboard.ts

export const getDashboardData = async () => {
  const response = await fetch('https://baynex-bot-1.onrender.com/api/status');
  return await response.json();
};

export const updateStrategyPlan = async (plan: {
  strategy: string;
  target: number;
  deadline: string;
  flashMode: boolean;
  learningBooster: boolean;
}) => {
  const response = await fetch('https://baynex-bot-1.onrender.com/api/plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(plan),
  });
  return await response.json();
};
