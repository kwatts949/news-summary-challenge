const NewsModel = require("../src/newsModel");

beforeEach(() => {
  // sets the model before each test
  model = new NewsModel();
});

describe("NewsModel", () => {
  it("initially returns an empty array of news items", () => {
    expect(model.getNewsInfo().length).toEqual(0);
    expect(model.getNewsInfo()).toEqual([]);
  });
});
