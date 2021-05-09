module.exports = {
  extends: 'eslint-config-egg',
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // createDefaultProgram: true,
  },
  plugins: [
    'react',
    'sort-imports-es6-autofix',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-react': [ 'error' ],
    'react/jsx-uses-vars': ['error'],
    'no-useless-constructor': [ 'off' ],
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': [ 'error', { before: true, after: false }],
    'sort-imports-es6-autofix/sort-imports-es6': [ 2, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    }],
  },
}