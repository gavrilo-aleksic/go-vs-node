const createReq = (originalReq) => {
  return originalReq;
};

const createRes = (originalRes) => {
  return ({ status, body }) => {
    originalRes.writeHead(status);
    originalRes.write(body);
    originalRes.end();
  };
};

module.exports = {
  createReq,
  createRes,
};
