module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 1,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-closing-bracket-location': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};

// 'react/jsx-props-no-spreading': 0,
//     'func-call-spacing': 2, // instead of no-spaced-func
//     'import/extensions': 0,
//     'react/prop-types': 0,
//     'react/require-default-props': 0,
//     'no-spaced-func': 0, // deprecated
//     'import/prefer-default-export': 0,
//     'import/no-named-as-default-member': 0,
//     'import/no-named-as-default': 0,
//     'import/no-extraneous-dependencies': 0,
//     'import/no-cycle': 0,
//     'no-underscore-dangle': 0,
//     'jsx-a11y/label-has-associated-control': [ 2, {
//       "depth": 1,
//     }],
//     'consistent-return': 0,
//     'no-trailing-spaces': 0,
//     'operator-linebreak': 0,
//     'implicit-arrow-linebreak': 0,
//     'react/button-has-type': 0,