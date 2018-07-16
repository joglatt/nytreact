import React, { Component } from "react";
class Item extends Component {
  render() {
    const { article, deleteArticle } = this.props;
    return (
      <div className="container container-fluid text-center">
        <div className="row">
          <div className="col-md-11">
            <h5>{article.headline}</h5>
            <a href={article.link}>{article.link}</a>
            <div>{article.date}</div>
          </div>
          <div className="col-md-1">
            <button
              onClick={() => deleteArticle(article._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
