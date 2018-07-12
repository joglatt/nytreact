import React, { Component } from "react";
class Item extends Component {
  render() {
    const { obj, save } = this.props;
    return (
      <div>
        <h5>{obj.headline.main}</h5>
        <a href={obj.web_url}>{obj.web_url}</a>
        <div>{obj.pub_date}</div>
        <button onClick={save} className="btn btn-success">
          Save
        </button>
      </div>
    );
  }
}

export default Item;
