import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss  from  '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'srhcart-host-app',
      // filename: 'remoteEntry.js',
      // remotes: {
      //   'srh-catalog-app': 'catalog_app@http://localhost:3001/remoteEntry.js',
      // },
      shared: ['react', 'react-dom']
    }),
    tailwindcss()
  ],
  server:  {
    port: 3000,
    strictPort: true,
     host: true
  },
  build: {
    outDir: 'dist',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  
  preview: {
    port: 3000,
    strictPort: true,
    cors: true, 
    
  },    
})
