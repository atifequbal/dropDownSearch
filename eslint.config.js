const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'out-tsc/**'
    ]
  },
  {
    files: ['projects/angular-drop-down-search/src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: [
          './projects/angular-drop-down-search/tsconfig.lib.json',
          './projects/angular-drop-down-search/tsconfig.spec.json'
        ],
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'off'
    }
  }
];
