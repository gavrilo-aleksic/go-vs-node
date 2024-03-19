const http = require("http");
const routes = require("./routes");
const { mapToRoute, logRequest } = require("./utils");
const { createReq, createRes } = require("./handler");
http
  .createServer((req, res) => {
    const { url, method } = req;
    const router = mapToRoute(url, method, routes);
    logRequest({ router, url });
    if (!router) {
      res.writeHead(404);
      res.end();
      return;
    }
    router.handler(createReq(req), createRes(res));
  })
  .listen(3000);
