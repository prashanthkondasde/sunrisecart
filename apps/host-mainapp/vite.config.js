import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss  from  '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode,'.', '')
    return {
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          catalog: env.VITE_CATALOG_URL,
          product: env.VITE_PRODUCT_URL,
        //catalog: 'http://localhost:3001/assets/remoteEntry.js',
        // product: 'http://localhost:3002/assets/remoteEntry.js',
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
     tailwindcss()
  ],
    server:  {
      port: 3000,
      strictPort: true,
      host: true,
      cors: true, 
      //  watch: {
      //   usePolling: true
      // }
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
  }
})