const http = require("http");
const routes = require("./routes");
const { mapToRoute, logRequest } = require("./utils");

http
  .createServer((req, res) => {
    const { url, method } = req;
    const router = mapToRoute(url, method, routes);
    if (!router) {
      res.writeHead(404);
      res.end();
      return;
    }
    logRequest({ router, url });
  })
  .listen(3000);
