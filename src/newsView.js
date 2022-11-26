class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector("#main-container");

    const submitButtonEl = document.querySelector("#search-button");
    const searchInputEl = document.querySelector("#search-input");
    const resetButton = document.querySelector("#reset-button")

    submitButtonEl.addEventListener("click", () => {
      const searchTopic = searchInputEl.value;
      console.log(searchTopic);
      this.client.getNewsInfo(searchTopic, (newsData) => {
        this.display(newsData);
      });
    });

    resetButton.addEventListener("click", () => {
      searchInputEl.value = ''
      this.client.resetNotes();
    });
  }

  display(newsData) {
    const headlinesList = newsData.response.results;
    headlinesList.forEach((headline) => {
      const space = document.createElement("br"); 
      space.className = 'space'
      this.mainContainerEl.append(space);

      const headlineEl = document.createElement("a"); // creates anchor for each headline
      this.mainContainerEl.append(space);
      headlineEl.textContent = headline.webTitle;
      headlineEl.href = headline.webUrl; // sets href to url
      headlineEl.className = "headline"; // sets class
      this.mainContainerEl.append(headlineEl); // appends a to main container in HTML

     

      const newsImg = document.createElement("img"); // set img dynamically
      this.mainContainerEl.append(space);
      newsImg.src = headline.fields.thumbnail;
      newsImg.className = "image";
      this.mainContainerEl.append(newsImg);

      this.mainContainerEl.append(space);
    });
  }
}

module.exports = NewsView;
