const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://cloudapis.xyz',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
            headers: {
                'Origin': 'http://localhost:3000', // Replace with your frontend URL
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    );
};
