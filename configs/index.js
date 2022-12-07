const USERS_SERVICE_URL = "http://localhost:5000/v1/users";
const DOCUMENTS_SERVICE_URL = "http://localhost:5001/v1/documents";
module.exports = {
  APP_PORT: 5002,
  DATABASE_URL: "mongodb://localhost/microservices-auth",
  USERS_SERVICE_URL,
  DOCUMENTS_SERVICE_URL,
  PROXY_ROUTES: [
    {
      url: '/api/users',
      auth: false,
      creditCheck: false,
      proxy: {
        target: USERS_SERVICE_URL,
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
        target: DOCUMENTS_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api/documents': ''
        }
      }
    }
  ]
};
