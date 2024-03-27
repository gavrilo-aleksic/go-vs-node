const { sendRequest, createEndpoint } = require("../test.utils");

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
