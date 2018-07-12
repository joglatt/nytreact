import React, { Component } from "react";
import Item from "../components/Item";
class Results extends Component {
  render() {
    return (
      <div>
        {this.props.results.map(item => <Item obj={item} />)}
      </div>
    );
  }
}

export default Results;
