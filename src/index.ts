import { Plugin } from 'vite';

export const ViteStarter = (): Plugin => {
  return {
    name: 'vite-plugin-typescript-starter',
    // plugin code: https://vitejs.dev/guide/api-plugin.html
  };
};

export default {
  ViteStarter,
};
