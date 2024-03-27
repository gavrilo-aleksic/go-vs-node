const parseBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (data) => {
      body += data.toString();
    });
    req.on("end", () => {
      const { error, data } = transformBody(body, req);
      if (error) {
        resolve({ error, data: null });
      } else {
        resolve({ data });
      }
    });
  });

const transformBody = (data, req) => {
  if (req.headers["content-type"] === "application/json") {
    try {
      return { data: JSON.parse(data) };
    } catch (e) {
      return { error: e, data: data };
    }
  }
  return { data };
};

module.exports = {
  parseBody,
};
