const NewsClient = require("../src/newsClient");

require("jest-fetch-mock").enableMocks();

describe("NewsClient class", () => {
  it("calls fetch and loads news info", (done) => {
    const client = new NewsClient();
    fetch.mockResponseOnce(
      JSON.stringify({
        headline: "headline1",
      })
    );

    client.getNewsInfo("", (repoInfo) => {
      expect(repoInfo.headline).toBe("headline1");

      done();
    });
  });
});
