import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  render() {
    const {
      term,
      startYear,
      endYear,
      handleInputChange,
      handleFormSubmit
    } = this.props;
    return (
      <div>
        Search Term
        <input
          className="form-control"
          value={term}
          onChange={handleInputChange}
          name="term"
          placeholder="Search Term"
        />
      Starting Year
        <input
          className="form-control"
          value={startYear}
          onChange={handleInputChange}
          name="startYear"
          placeholder="Start Year"
        />
       Ending Year 
        <input
          className="form-control"
          value={endYear}
          onChange={handleInputChange}
          name="endYear"
          placeholder="End Year"
        />
        <button
          onClick={handleFormSubmit}
          // disabled={!(term && startYear && endYear)}
          className="btn btn-success"
        >
          Submit Search
        </button>
      </div>
    );
  }
}
Search.props = {
  term: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  handleInputChange: PropTypes.function,
  handleFormSubmit: PropTypes.function
};
export default Search;
