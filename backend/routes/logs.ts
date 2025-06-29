import express from 'express';
import { readLogs } from '../utils/logManager';

const router = express.Router();

router.get('/logs/:platform', async (req, res) => {
  try {
    const platform = req.params.platform;
    const logs = await readLogs(platform);
    res.json({ logs });
  } catch (err) {
    console.error('Error reading logs:', err);
    res.status(500).json({ error: 'Failed to read logs' });
  }
});

export default router;
