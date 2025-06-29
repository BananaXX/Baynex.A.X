import fs from 'fs';
import path from 'path';

const LOG_DIR = path.join(__dirname, '../../logs');

export function logEvent(platform: string, message: string) {
  const logPath = path.join(LOG_DIR, `${platform}.log`);
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;

  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.appendFileSync(logPath, line, 'utf8');
}

export function readLogs(platform: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const logPath = path.join(LOG_DIR, `${platform}.log`);
    fs.readFile(logPath, 'utf8', (err, data) => {
      if (err) return resolve([]);
      const lines = data.split('\n').filter(Boolean).reverse();
      resolve(lines.slice(0, 100)); // last 100 logs
    });
  });
}
