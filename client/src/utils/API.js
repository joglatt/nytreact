import axios from "axios";

export default {
  search: function(term, start, end) {
    term = term.replace(/ /g, "+");
    let queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
      "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931" +
      "&q=" +
      term +
      "&begin_date=" +
      start +
      "0101" +
      "&end_date=" +
      end +
      "0101";
    console.log(queryURL);
    return axios.get(queryURL);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("api/articles/" + id);
  }
};
