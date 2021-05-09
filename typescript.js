module.exports = {
  extends: 'eslint-config-egg/typescript',
  env: {
    browser: true,
  },
  // for experimental features support
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'sort-imports-es6-autofix',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-react': [ 'error' ],
    'react/jsx-uses-vars': [ 'error' ],
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': [ 'error', { before: true, after: false }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [ 2, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    }],
  },
}