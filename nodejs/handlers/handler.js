const { transformData } = require("../parsers/body.parser");

const createReq = (originalRequest) => {
  return {
    originalRequest,
    parseBody: () => {
      return new Promise((resolve, reject) => {
        let body = "";
        originalRequest.on("data", (data) => {
          body += data.toString();
        });
        originalRequest.on("end", () => {
          const { error, data } = transformData(body, originalRequest);
          if (error) {
            reject({ error, data });
          } else {
            resolve({ data });
          }
        });
      });
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
