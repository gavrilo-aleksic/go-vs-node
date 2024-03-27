const parsePathParams = (url, router) => {
  const pathParamsIndices = router.path
    .split("/")
    .filter((segment) => segment.startsWith(":"));
  return pathParamsIndices;
};

module.exports = { parsePathParams };
