import React, { Component } from "react";
class Item extends Component {
  render() {
    const { article, deleteArticle } = this.props;
    return (
      <div>
        <h5>{article.headline}</h5>
        <h5>{article._id}</h5>
        <a href={article.link}>{article.link}</a>
        <div>{article.date}</div>
        <button
          onClick={() => deleteArticle(article._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
