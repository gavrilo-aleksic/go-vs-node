const {
  HomeController,
  InputDataController,
  RootController,
} = require("../controllers");

const routes = {
  "/home": {
    method: "GET",
    handler: HomeController,
  },
  "/root": {
    method: "GET",
    handler: RootController,
  },
  "/post": {
    method: "POST",
    handler: InputDataController,
  },
};

module.exports = routes;
