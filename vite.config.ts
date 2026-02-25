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
      }
    },
    plugins: [
      react(),
      {
        name: 'serve-desktop-images',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url || '';
            if (url.includes('/projects-data/')) {
              const decodedUrl = decodeURIComponent(url);
              const marker = '/projects-data/';
              const index = decodedUrl.indexOf(marker);
              if (index !== -1) {
                const relativePath = decodedUrl.substring(index + marker.length).split('?')[0];
                const filePath = path.join(desktopPath, relativePath).replace(/\\/g, '/');

                if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                  const ext = path.extname(filePath).toLowerCase();
                  const mimes: Record<string, string> = {
                    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.JPG': 'image/jpeg',
                    '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp'
                  };
                  res.writeHead(200, {
                    'Content-Type': mimes[ext] || 'image/jpeg',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'public, max-age=86400'
                  });
                  res.end(fs.readFileSync(filePath));
                  return;
                }
              }
            }
            next();
          });
        }
      }
    ],
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || ""),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
