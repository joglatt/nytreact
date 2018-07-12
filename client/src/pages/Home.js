import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import API from "../utils/API.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      startYear: "",
      endYear: "",
      results: []
    };
  }
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.term, this.state.startYear, this.state.endYear)
      .then(res => {
        if (res.status === "error") {
          throw new Error(res.status);
        }
        this.setState({ results: res.data.response.docs });
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };
  save = () => {
    API.saveArticle({
      headline: this.props.obj.title,
      link: this.props.obj.link,
      date: this.props.obj.date
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Search
          handleFormSubmit={this.handleFormSubmit}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          term={this.state.term}
          handleInputChange={this.handleInputChange}
        />
        <Results save={this.save} results={this.state.results} />
      </div>
    );
  }
}

export default Home;
