import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createMockPlugin } from 'vite-plugin-mock';

export default defineConfig({
  plugins: [react(), createMockPlugin()],
});
