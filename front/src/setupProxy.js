const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const target = process.env.VITE_API_TARGET || "http://localhost:3001";
  app.use(
    createProxyMiddleware(["/user"], {
      target: target,
      changeOrigin: true,
    })
  );
};
