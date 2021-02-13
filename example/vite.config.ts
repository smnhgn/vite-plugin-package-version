import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { ViteStarter } from 'vite-plugin-typescript-starter';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ViteStarter()],
});
