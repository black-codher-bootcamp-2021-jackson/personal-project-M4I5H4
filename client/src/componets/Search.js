import React from "react";

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setImages(props.setTerm);
  };
  return (
    <div>
      <form
        className="form"
        id="searchAPI"
        onSubmit={handleSubmit}
      >
        <label className="label">
          Search For a Reference:{" "}
        </label>
        <input
          id="term"
          className="searchBar"
          type="text"
          placeholder="please type here..."
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
        />
        <button
          className="submit-btn"
          type="submit"
        >
          Search
        </button>
      </form>

    </div>
  );
};

export default Search;
