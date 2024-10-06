import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['vue']
});
