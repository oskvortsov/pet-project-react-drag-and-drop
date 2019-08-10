/* eslint-disable */
// @ts-ignore: Unreachable code error
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:3200/"
    })
  );
};
/* eslint-enable */
