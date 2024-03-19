const http = require("http");
const routes = require("./routes/routes");
const { mapToRoute } = require("./routes/routes.utils");
const { logRequest } = require("./log/log");
const { createReq, createRes } = require("./handlers/handler");

http
  .createServer((req, res) => {
    const { url, method } = req;
    const router = mapToRoute(url, method, routes);
    logRequest({ router, url });
    if (!router) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }
    router.handler(createReq(req), createRes(res));
  })
  .listen(3000, () => {
    console.log("NodeJS server started on port 3000");
  });
