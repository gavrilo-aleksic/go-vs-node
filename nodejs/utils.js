/**
 * Maps the url to the route handler
 * @constructor
 * @param {string} url - url to be processed
 * @param {string} method -  HTTP Method (GET/POST/PUT/DELETE)
 * @param {Record<string,{method: string, handler: () => void}>} routes
 */
const mapToRoute = (url, method, routes) => {
  let foundRoute = null;
  Object.keys(routes).find((r) => {
    if (routes[r].method !== method || foundRoute) return;
    const urlParts = url.split("/").filter((e) => !!e);
    const routesParts = r.split("/").filter((e) => !!e);
    if (urlParts.length !== routesParts.length) return;

    if (
      urlParts.every((urlPart, index) => {
        return routesParts[index].startsWith(":")
          ? true
          : urlPart === routesParts[index];
      })
    ) {
      foundRoute = routes[r];
    }
  });
  return foundRoute;
};

const logRequest = ({ router, url }) =>
  console.log(
    `[${new Date().toISOString()}] Route: ${router.route} Method: ${
      router.method
    }, URL: ${url}`
  );

module.exports = {
  mapToRoute,
  logRequest,
};
