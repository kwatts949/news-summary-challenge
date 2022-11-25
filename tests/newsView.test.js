/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NewsModel = require("../src/newsModel");
const NewsView = require("../src/newsView");

describe("News view", () => {
  it("displays two news items", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    // 1. Setting up model and view
    const model = new NewsModel();
    const view = new NewsView(model);
    model.addNews("Headline1");
    model.addNews("Headline2");

    // 2. Display the notes on the page
    view.displayNews();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll("div.news").length).toEqual(2);
    expect(document.querySelectorAll("div.news")[0].textContent).toEqual('Headline1');
  });
});
