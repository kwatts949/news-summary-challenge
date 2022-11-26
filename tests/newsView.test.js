/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsClient = require("../src/newsClient");
const NewsModel = require("../src/newsModel");
const NewsView = require("../src/newsView");
require("jest-fetch-mock").enableMocks();

describe("News view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    model = new NewsModel();
    client = new NewsClient();
    view = new NewsView(model, client);
  });

  it("connects and fetches", (done) => {
    fetch.mockResponseOnce(JSON.stringify(["test headline"]));
    client.getNewsInfo("", (data) => {
      expect(data).toEqual(["test headline"]);
      done();
    });
  });
});
