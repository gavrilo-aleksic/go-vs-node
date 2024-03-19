const InputDataController = (req, { send }) => {
  send({ status: 200, body: "This is Input " });
};

module.exports = InputDataController;
