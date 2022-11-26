const apiKey = require("../resources/apiKey");

class NewsClient {
  constructor() {
    this.apiKey = apiKey;
    this.url = ``;
  }
  getNewsInfo(searchInput, callback) {
    fetch(
      `https://content.guardianapis.com/search?q=${searchInput}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = NewsClient;
