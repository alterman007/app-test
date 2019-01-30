module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'import/extensions': ['error', 'ignorePackages', {
      '.js': 'never',
      '.jsx': 'never',
      '.vue': 'never',
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
