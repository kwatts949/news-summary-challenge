class NewsView {
  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    const newsList = this.model.getNews(); // gets array of news items
    newsList.forEach((news) => {
      const newsEl = document.createElement("div"); // creates a div for each note
      newsEl.textContent = news;
      newsEl.className = "news"; // sets class
      this.mainContainerEl.append(newsEl); // appends div to main container in HTML
    });
  }
}

module.exports = NewsView;
