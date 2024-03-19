const routes = {
  "/home": {
    method: "GET",
    handler: (req, send) => {
      send({ status: 200, body: "All Good" });
    },
  },
};

module.exports = routes;
