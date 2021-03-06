import React, { Component } from "react";
import Item from "../components/Item";
class Results extends Component {
  render() {
    return (
      <div className='container container-fluid '>
        {this.props.results.map(item => <Item obj={item} saveArticle={this.props.saveArticle} />)}
      </div>
    );
  }
}

export default Results;
