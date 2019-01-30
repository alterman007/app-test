const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
// const proxyMiddleware = require('http-proxy-middleware');
const app = express();

// app.use('*', (req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

app.use(express.urlencoded({ extended: true }));
// app.use('/static', express.static(path.join(__dirname, 'dist')));
// app.use(proxyMiddleware('/sampleplot', {
//   target: 'http://59.202.40.49:8080',
//   changeOrigin: true
// }));

app.use(
  history({
    verbose: true,
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    index: '/static/index.html',
    // rewrites: [
    //   {
    //     from: /\/entrance/,
    //     to: '/static/entrance.html',
    //   },
    // ],
  }),
);
app.use('/static', express.static(path.join(__dirname, '../dist')));

app.listen(8080, () => {
  console.log('server running at');
  console.log('http://localhost:8080');
});
