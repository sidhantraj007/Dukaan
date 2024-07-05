import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@atom': '/src/components/atoms',
      '@compound': '/src/components/compound',
      '@content': '/src/contents',
    },
  },
})
