import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const desktopPath = 'C:/Users/WIN10/Desktop/안티그라피';

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      fs: {
        allow: [
          '.',
          desktopPath
        ]
      },
      // Middleware to serve files from the desktop folder
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/projects-data/')) {
            // Extract the path after /projects-data/
            const relativePath = req.url.slice('/projects-data/'.length);
            const decodedPath = decodeURIComponent(relativePath);
            const filePath = path.join(desktopPath, decodedPath);

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', getContentType(filePath));
              res.setHeader('Cache-Control', 'max-age=3600');
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
          next();
        });
      }
    },
    plugins: [react()],
    define: {
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});

function getContentType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.png': return 'image/png';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    default: return 'application/octet-stream';
  }
}
