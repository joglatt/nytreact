import React, { Component } from "react";
import API from "../utils/API";
import SavedItem from "../components/SavedItem";
class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.getSaved();
  }
  getSaved = () => {
    API.getArticles()
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then((res => this.getSaved()))
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.articles);
    return (
      <div>
        Saved
        {this.state.articles.map(article => (
          <SavedItem key={article._id} article={article} deleteArticle={this.deleteArticle} />
        ))}
      </div>
    );
  }
}

export default Saved;
