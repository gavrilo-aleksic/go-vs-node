const { sendRequest, createEndpoint } = require("../nodejs/test.utils");

describe("Test NodeJS controllers", () => {
  describe("Tests the matching routing and returning 404", () => {
    test("Should return Not Found for not found route", async () => {
      const request = createEndpoint({
        method: "GET",
        route: "/notfound",
      });
      const { status, data } = await sendRequest(request);
      expect(status).toBe(404);
      expect(data).toBe("Not Found");
    });

    test("Should return not found if missing second path param", async () => {
      const request = createEndpoint({
        method: "GET",
        route: "/data/someId",
      });

      const { status } = await sendRequest(request);
      expect(status).toBe(404);
    });

    test("Should return not found if invalid method provided", async () => {
      const request = createEndpoint({
        method: "PUT",
        route: "/home",
      });

      const { status } = await sendRequest(request);
      expect(status).toBe(404);
    });
  });

  describe("Tests the /data/:id/:id2 endpoint", () => {
    test("Should return path parameter with names when provided", async () => {
      const request = createEndpoint({
        method: "GET",
        route: "/data/someId/someOtherId",
      });

      const { status, data } = await sendRequest(request);
      expect(status).toBe(200);
      expect(data).toMatchObject({
        pathParams: { id: "someId", id2: "someOtherId" },
      });
    });

    test("Should return query parameter with names when provided", async () => {
      const request = createEndpoint({
        method: "GET",
        route: "/data/someId/someOtherId?query=Gavrilo",
      });

      const { status, data } = await sendRequest(request);
      expect(status).toBe(200);
      expect(data).toMatchObject({
        pathParams: { id: "someId", id2: "someOtherId" },
        queryParams: { query: "Gavrilo" },
      });
    });

    test("Should return empty query parameter with when no query params provided", async () => {
      const request = createEndpoint({
        method: "GET",
        route: "/data/someId/someOtherId?",
      });

      const { status, data } = await sendRequest(request);
      expect(status).toBe(200);
      expect(data).toMatchObject({
        pathParams: { id: "someId", id2: "someOtherId" },
        queryParams: {},
      });
    });
  });

  describe("Tests the /post endpoint", () => {
    test("Should return request body when provided", async () => {
      const request = createEndpoint({
        method: "POST",
        body: { name: "Gavrilo" },
        route: "/post",
      });
      const { status, data } = await sendRequest(request);
      expect(status).toBe(200);
      expect(data).toMatchObject({ name: "Gavrilo" });
    });

    test("Should return empty body when no payload sent", async () => {
      const request = createEndpoint({
        method: "POST",
        route: "/post",
      });
      const { status, data } = await sendRequest(request);
      expect(status).toBe(200);
      expect(data).toBe(null);
    });
  });
});
