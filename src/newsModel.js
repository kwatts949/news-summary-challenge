class NewsModel {
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
