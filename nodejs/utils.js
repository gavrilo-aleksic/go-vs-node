const mapToRoute = (url, method, routes) => {
  return Object.keys(routes).find((r) => {
    const urlParts = url.split("/");
    const routesPart = routes.split("/");
    if (urlParts.length !== routesPart.length) return false;
  });
};

module.exports = {
  mapToRoute,
};
