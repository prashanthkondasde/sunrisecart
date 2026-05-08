import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss  from  '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'catalog',
      filename: 'remoteEntry.js',
      exposes: {
        './CatalogApp': './src/App.jsx',
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
      name: 'vite-plugin-notify-host-on-rebuild',
      apply(config, { command }) {
        return Boolean(command === 'build' && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch('http://localhost:3000/__fullReload');
          } catch (e) {
            console.log(e);
          }
        }
      },
    },
    tailwindcss()
  ],
  server:  {
    port: 3001,
    strictPort: true,
    //  host: true,
     cors: true,
      headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 3001,
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
