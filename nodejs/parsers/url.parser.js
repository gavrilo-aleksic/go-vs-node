const parsePathParams = (url, router) => {
  const pathParamsIndices = router.path
    .split("/")
    .filter((segment) => segment.startsWith(":"));
  console.log(pathParamsIndices);
  return pathParamsIndices;
};

module.exports = { parsePathParams };
