/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsClient = require("../src/newsClient");

const NewsModel = require("../src/newsModel");
const NewsView = require("../src/newsView");

describe("News view", () => {
  it("displays two news items", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    // 1. Setting up model and view
    const model = new NewsModel();
    const client = new NewsClient();
    const view = new NewsView(model, client);
  });
});
