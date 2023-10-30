module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 80 }],
    'no-var': 'error',
    'max-params': ['error', 3],
    'no-unused-vars': 'error',
    'no-eval': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': 'error',
  },
};
