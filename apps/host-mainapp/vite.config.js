import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss  from  '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'hostapp',
      remotes: {
        catalog: 'http://localhost:3001/assets/remoteEntry.js',
        product: 'http://localhost:3002/assets/remoteEntry.js',
        // cart: 'http://localhost:5003/assets/remoteEntry.js',
        // checkout: 'http://localhost:5004/assets/remoteEntry.js',
        // admin: 'http://localhost:5005/assets/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
         'react-dom': {
          singleton: true,
          eager: true,
        },
         'react-router-dom': {
          singleton: true,
          eager: true,
        },
         '@reduxjs/toolkit': {
          singleton: true,
          eager: true,
        },
         'react-redux': {
          singleton: true,
          eager: true,
        },
      },
    }),
    {
      name: 'vite-plugin-reload-endpoint',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/__fullReload') {
            server.hot.send({ type: 'full-reload' });

            res.end('Full reload triggered');
          } else {
            next();
          }
        });
      },
    },
    tailwindcss()
  ],
  server:  {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true, 
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true,     
  }, 

  build: {
    outDir: 'dist',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
     
})
