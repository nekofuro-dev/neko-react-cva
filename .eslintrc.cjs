module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb', 'airbnb-typescript', 'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'arrow-body-style': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
  },
}
