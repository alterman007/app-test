module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
};
