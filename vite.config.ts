import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    react()
  ],
  server: {
    host: 'localhost',
    port: 3000
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ],
  }
})
