class NewsModel {
  constructor() {
    this.newsArray = [];
  }

  getNews() {
    return this.newsArray;
  }

  addNews(news) {
    this.newsArray.push(news);
  }

  reset() {
    this.newsArray = [];
  }
}

module.exports = NewsModel;
