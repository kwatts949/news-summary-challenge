const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const NewsClient = require("./newsClient");
const apiKey = require("../resources/apiKey");

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

view.display();
