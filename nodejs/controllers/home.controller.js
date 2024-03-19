const HomeController = (req, { send }) => {
  send({ status: 200, body: "This is Home " });
};

module.exports = HomeController;
