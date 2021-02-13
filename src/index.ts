import type { Plugin } from 'vite';

let envInjectionFailed = false;

const createPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-package-version',
    config: (_, env) => {
      if (env) {
        return {
          define: {
            ['import.meta.env.PACKAGE_VERSION']:
              process.env.npm_package_version,
          },
        };
      } else {
        envInjectionFailed = true;
      }
    },
    configResolved(config) {
      if (envInjectionFailed) {
        config.logger.warn(
          `[vite-plugin-package-version] import.meta.env.PACKAGE_VERSION was not injected due ` +
            `to incompatible vite version (requires vite@^2.0.0-beta.69).`
        );
      }
    },
  };
};

export default createPlugin;
