import React, { Component } from "react";
class Item extends Component {
  render() {
    const { obj, saveArticle } = this.props;
    return (
      <div className="row">
        <div className="col-md-11">
          <h5>{obj.headline.main}</h5>
          <a href={obj.web_url}>{obj.web_url}</a>
          <div>{obj.pub_date}</div>
        </div>
        <div className="col-md-1">
        <button onClick={() => saveArticle(obj)} className="btn">
          Save
        </button>
        </div>
      </div>
    );
  }
}

export default Item;
