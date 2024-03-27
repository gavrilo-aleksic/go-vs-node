const { parseBody } = require("../parsers/body.parser");
const { parsePathParams } = require("../parsers/url.parser");

const createReq = (originalRequest, router) => {
  return {
    originalRequest,
    pathParams: parsePathParams(originalRequest.url, router),
    body: {
      parseBody: () => parseBody(originalRequest),
    },
  };
};

const createRes = (originalResponse) => {
  return {
    send: ({ status, body }) => {
      let responseBody = body;
      if (typeof body === "object") {
        originalResponse.setHeader("Content-Type", "application/json");
        responseBody = JSON.stringify(body);
      }
      originalResponse.writeHead(status);
      originalResponse.write(responseBody);
      originalResponse.end();
    },
    originalResponse,
  };
};

module.exports = {
  createReq,
  createRes,
};
