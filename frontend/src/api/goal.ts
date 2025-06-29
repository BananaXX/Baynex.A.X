export async function getGoal(platform: string) {
  try {
    const res = await fetch(`/api/goal/${platform}`);
    if (!res.ok) throw new Error('Failed to fetch goal');
    return await res.json();
  } catch (error) {
    console.error('Error fetching goal:', error);
    return null;
  }
}

export async function setGoal(platform: string, data: { profitTarget: number; deadline: string }) {
  try {
    const res = await fetch(`/api/goal/${platform}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.error('Error setting goal:', error);
  }
}
