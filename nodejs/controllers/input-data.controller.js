const InputDataController = async ({ body }, { send }) => {
  const body = await body.parseBody();
  send({ status: 200, body });
};

module.exports = InputDataController;
