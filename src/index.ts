import type { Plugin } from 'vite';

const createPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-package-version',
  };
};

export default createPlugin;
