class NewsModel {
  // what is the purpose of the model? It doesnt really do anything in the context of this program
  constructor() {
    this.newsInfo = [];
  }

  getNews() {
    return this.newsInfo;
  }

  setNews(newsInfo) {
    this.newsInfo = newsInfo;
  }
}

module.exports = NewsModel;
