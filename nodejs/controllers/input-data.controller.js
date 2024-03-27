const InputDataController = async ({ body }, { send }) => {
  const { data } = await body.parseBody();
  send({ status: 200, body: data });
};

module.exports = InputDataController;
