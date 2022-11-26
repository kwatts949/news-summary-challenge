const NewsModel = require("../src/newsModel");

beforeEach(() => {
  model = new NewsModel();
});

describe("NewsModel", () => {
  it("initially returns an empty array of news items", () => {
    expect(model.getNews().length).toEqual(0);
    expect(model.getNews()).toEqual([]);
  });

  it("initially returns an empty array of news items", () => {
    model.setNews(['Headline', 'Another Headline'])
    expect(model.getNews().length).toEqual(2);
    expect(model.getNews()).toEqual(['Headline', 'Another Headline']);
  });
});