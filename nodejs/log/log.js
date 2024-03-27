const logRequest = ({ router, url }) =>
  console.log(
    `[${new Date().toISOString()}] Route: ${router?.path} Method: ${
      router?.method
    }, URL: ${url}`
  );

module.exports = {
  logRequest,
};
