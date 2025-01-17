import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'out/*',
      'dist/*',
      'node_modules/*',
      '.wdio-vscode-service',
      'build/*',
      'tailwind.config.js',
      'test/specs/test.e2e.ts',
      'webpack.config.js',
      'webviews/globals.d.ts',
    ],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 6,
      sourceType: 'module',
    },
  },
  ...tseslint.config(tseslint.configs.recommended),
];
