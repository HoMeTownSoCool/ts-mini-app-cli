// https://eslint.bootcss.com/docs/rules/
module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off'
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module'
      }
    }
  ],
  globals: {
    wx: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    Component: true,
    requirePlugin: true,
    requireMiniProgram: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-floating-promises': 'off'
  }
}
