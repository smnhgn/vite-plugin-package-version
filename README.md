# vite-plugin-package-version

[![npm](https://img.shields.io/npm/v/vite-plugin-package-version.svg)](https://www.npmjs.com/package/vite-plugin-package-version)

**Note: this plugin requires `vite@^2.0.0-beta.69`**.

Load package version of your package.json into your [vite](https://github.com/vitejs/vite) environment.

Will inject `import.meta.env.PACKAGE_VERSION` with the version specified in your package.json.

## Installation

```
npm i vite-plugin-package-version
```

## Usage

```js
// vite.config.js
import loadVersion from 'vite-plugin-package-version';

export default {
  plugins: [loadVersion()],
};
```
