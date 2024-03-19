const RootController = (req, { send }) => {
  send({ status: 200, body: "This is Root " });
};

module.exports = RootController;
