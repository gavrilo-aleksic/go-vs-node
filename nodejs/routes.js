const routes = {
  "/home": {
    method: "GET",
    handler: (req, send) => {
      console.log(req);
    },
  },
};

module.exports = routes;
