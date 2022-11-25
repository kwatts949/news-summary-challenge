const NewsModel = require("../src/newsModel");

let model;

beforeEach(() => {
  // sets the model before each test
  model = new NewsModel();
});

describe("NotesModel", () => {
  it("initially returns an empty array of news items", () => {
    expect(model.getNews().length).toEqual(0);
    expect(model.getNews()).toEqual([]);
  });

  it('adds news items to the array', () => {
    model.addNews('Headline1')
    model.addNews('Headline2')
    expect(model.getNews().length).toEqual(2);
    expect(model.getNews()).toEqual(['Headline1', 'Headline2']);
  })

  it('resets the array', () => {
    model.addNews('Headline1')
    model.addNews('Headline2')
    model.reset()
    expect(model.getNews().length).toEqual(0);
    expect(model.getNews()).toEqual([]);
  })
});
