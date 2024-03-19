const http = require("http");
const routes = require("./routes");

http
  .createServer((req, res) => {
    const { url, method } = req;
  })
  .listen(3000);
