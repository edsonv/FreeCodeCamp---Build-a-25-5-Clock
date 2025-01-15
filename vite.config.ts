import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/FreeCodeCamp---Build-a-25-5-Clock/',
  plugins: [react()],
});
