const PathParamController = (req, { send }) => {
  send({ status: 200, body: "This is Path Param " });
};

module.exports = PathParamController;
