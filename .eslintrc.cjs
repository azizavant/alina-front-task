module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  "rules": {
    'quotes': [
      'error',
      'single',
      {
        "avoidEscape": true
      }
    ],
    "semi": ["error", "never"],
    '@typescript-eslint/triple-slash-reference': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": 'off',
    "react/react-in-jsx-scope": "off",
    "eqeqeq": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'padded-blocks': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'multiline-ternary': 'off',
    'spaced-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'no-unused-vars': 'off',
    'react-refresh/only-export-components': 'off',
    'no-constant-condition': 'off',
    'no-undef': 'off'
  }
}
