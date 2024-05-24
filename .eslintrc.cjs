module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 12, sourceType: 'module' },
  plugins: ['react', 'react-refresh', 'import', 'sort-keys', 'sort-destructure-keys'],
  rules: {
    'sort-keys': 0,
    semi: ['error', 'always'],
    'linebreak-style': 0,
    'no-param-reassing': 0,
    'consistent-return': 0,
    'no-console': ['error'],
    'no-plusplus': 0,
    'implicit-arrow-linebreak': 0,
    'no-array-index-key': 0,
    'function-paren-newline': 0,
    'jsx-quotes': [1, 'prefer-single'],
    'no-shadow': 'error',
    'no-unsafe-optional-chaining': 0,
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '([Rr]eact|_+)',
        argsIgnorePattern: '_+',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
        },
      },
    ],
    'sort-keys/sort-keys-fix': 1,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'react/function-component-definition': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/jsx-fragments': 0,
    'react/button-has-type': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    'react-refresh/only-export-components': 'warn',
    'jsx-ally/control-has-associated-label': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'import/order': [
      1,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        pathGroupsExcludedImportTypes: ['react'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: 'components/**',
            position: 'after',
          },
          {
            group: 'internal',
            pattern: 'pages/**',
            position: 'after',
          },
          {
            group: 'internal',
            pattern: 'styles/**',
            position: 'after',
          },
        ],
      },
    ],
  },
};
