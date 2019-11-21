module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb','airbnb-base', 'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier'
  ],
  rules: {
    "prettier/prettier": "error", //prettier identifica e retorna erro no eslint
    "class-methods-use-this": "off", //permite classes não usar o this
    "no-param-reassign": "off", //permite receber e alterar parametros
    "camelcase": "off", //permite utilizar _ no nome de variáveis
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};
