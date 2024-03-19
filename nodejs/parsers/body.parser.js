const transformData = (data, req) => {
  if (req.headers["content-type"] === "application/json") {
    try {
      return { data: JSON.parse(data) };
    } catch (e) {
      return { error: e, data: data };
    }
  }
  return { data };
};

module.exports = {
  transformData,
};
