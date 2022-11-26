const apiKey = require("../resources/apiKey");

class NewsClient {
  constructor() {
    this.apiKey = apiKey;
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

  resetNotes() {
    console.log("resetting");
    const headlines = document.querySelectorAll(".headline");
    const images = document.querySelectorAll(".image");
    const spaces = document.querySelectorAll(".space");

    fetch(this.url, {
      method: "DELETE",
    })
      .then(
        spaces.forEach((space) => {
          space.remove();
        })
      )
      .then(
        headlines.forEach((headline) => {
          headline.remove();
        })
      )
      .then(
        images.forEach((image) => {
          image.remove();
        })
      );
  }
}

module.exports = NewsClient;
