const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
  routes.forEach(r => {
    app.use(r.url, createProxyMiddleware({ ...r.proxy, onProxyReq: fixRequestBody }));
  })
}

exports.setupProxies = setupProxies