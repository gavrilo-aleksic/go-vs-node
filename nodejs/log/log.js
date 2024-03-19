const logRequest = ({ router, url }) =>
  console.log(
    `[${new Date().toISOString()}] Route: ${router?.route} Method: ${
      router?.method
    }, URL: ${url}`
  );

module.exports = {
  logRequest,
};
