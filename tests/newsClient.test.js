const Client = require('../src/newsClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const client = new Client();

    fetch.mockResponseOnce(JSON.stringify({
      headline: "Headline",
      id: 123
    }));

    client.getNewsInfo((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("headline");
      expect(returnedDataFromApi.id).toBe(123);

      done();
    });
  });
});