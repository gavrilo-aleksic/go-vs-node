const InputDataController = async (req, { send }) => {
  const body = await req.parseBody();
  send({ status: 200, body });
};

module.exports = InputDataController;
