const http = require("http");

const host = process.env.TEST_HOST;
const port = process.env.PORT;

const sendRequest = (options) => {
  const { body } = options;

  let output = "";
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      res.setEncoding("utf8");

      res.on("data", (chunk) => {
        output += chunk;
      });

      res.on("end", () => {
        try {
          let obj = JSON.parse(output);
          resolve({ status: res.statusCode, data: obj });
        } catch (error) {
          resolve({ data: output, status: res.statusCode });
        }
      });
    });

    req.on("error", (error) => {
      console.log("Error", { error });
      reject(error);
    });
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
};

const createEndpoint = ({ route, method, body }) => ({
  host,
  port,
  path: route,
  method,
  headers:
    method === "POST"
      ? {
          "Content-Type": "application/json",
          ...(body
            ? { "Content-Length": Buffer.byteLength(JSON.stringify(body)) }
            : {}),
        }
      : undefined,
  body,
});

module.exports = { createEndpoint, sendRequest };
