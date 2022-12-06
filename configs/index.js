module.exports = {
  APP_PORT: 5002,
  DATABASE_URL: "mongodb://localhost/microservices-auth",
  PROXY_ROUTES: [
    {
      url: '/api/users',
      auth: false,
      creditCheck: false,
      rateLimit: {
        windowMs: 15 * 60 * 1000,
        max: 5
      },
      proxy: {
        target: "http://localhost:5000/v1/users",
        changeOrigin: true,
        pathRewrite: {
          '^/api/users': ''
        },
      }
    },
    {
      url: '/api/documents',
      auth: false,
      creditCheck: false,
      proxy: {
        target: "http://localhost:5001/v1/documents",
        changeOrigin: true,
        pathRewrite: {
          '^/api/documents': ''
        }
      }
    }
  ]
};
