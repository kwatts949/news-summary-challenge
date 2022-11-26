class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");

    const submitButtonEl = document.querySelector("#search-button");
    const searchInputEl = document.querySelector("#search-input");
    const resetButton = document.querySelector("#reset-button");

    submitButtonEl.addEventListener("click", () => {
      const searchTopic = searchInputEl.value;

      this.client.getNewsInfo(searchTopic, (newsData) => {
        this.display(newsData);
      });
    });

    resetButton.addEventListener("click", () => {
      searchInputEl.value = "";
      this.resetNews();
    });
  }

  display(newsData) {
    this.model.setNews(newsData);
    console.log(newsData.response)

    const headlinesList = newsData.response.results;

    headlinesList.forEach((headline) => {
      const space = document.createElement("br");
      space.className = "space";
      this.mainContainerEl.append(space);

      const headlineEl = document.createElement("a");
      this.mainContainerEl.append(space);
      headlineEl.textContent = headline.webTitle;
      headlineEl.href = headline.webUrl;
      headlineEl.className = "headline";
      this.mainContainerEl.append(headlineEl);

      const newsImg = document.createElement("img");
      this.mainContainerEl.append(space);
      newsImg.src = headline.fields.thumbnail;
      newsImg.className = "image";
      this.mainContainerEl.append(newsImg);
      this.mainContainerEl.append(space);
    });
  }

  resetNews() {
    const headlines = document.querySelectorAll(".headline");
    const images = document.querySelectorAll(".image");
    const spaces = document.querySelectorAll(".space");

    headlines.forEach((headline) => {
      headline.remove();
    });
    images.forEach((image) => {
      image.remove();
    });
    spaces.forEach((space) => {
      space.remove();
    });
  }
}

module.exports = NewsView;
