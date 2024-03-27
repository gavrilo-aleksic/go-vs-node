const PathParamController = (req, { send }) => {
  const pathParams = req.pathParams;
  const queryParams = req.queryParams;

  send({ status: 200, body: { pathParams, queryParams } });
};

module.exports = PathParamController;
