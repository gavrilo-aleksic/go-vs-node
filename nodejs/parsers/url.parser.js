const removeQueryParamFromUrl = (url) =>
  url.indexOf("?") !== -1 ? url.slice(0, url.indexOf("?")) : url;

const parsePathParams = (url, router) => {
  const pathParams = {};
  const urlSegments = removeQueryParamFromUrl(url).split("/");
  router.path.split("/").forEach((segment, index) => {
    if (segment.startsWith(":")) {
      pathParams[segment.slice(1)] = urlSegments[index];
    }
  });

  return pathParams;
};

const parseQueryParams = (url) => {
  const queryParamsSegment =
    url.indexOf("?") !== -1 ? url.slice(url.indexOf("?") + 1) : "";
  if (!queryParamsSegment) return {};
  const uri = new URLSearchParams(queryParamsSegment);
  const queryParams = {};
  for (const [key, value] of uri.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
};

module.exports = { parsePathParams, parseQueryParams };
