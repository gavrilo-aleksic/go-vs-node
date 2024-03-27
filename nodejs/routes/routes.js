const {
  HomeController,
  InputDataController,
  RootController,
  PathParamController,
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
  "/data/:id/:id2": {
    method: "GET",
    handler: PathParamController,
  },
};

module.exports = Object.keys(routes).reduce(
  (prev, curr) => ({ ...prev, [curr]: { ...routes[curr], path: curr } }),
  {}
);
