
import React from 'react';

const Search = () => {
  return <div>
      <form>
          <label className="label">
            Search For a Reference:{" "}
          </label>
          <input className="searchBar" type="text"/>
          <button className="submit-btn" type="submit">
              Search
          </button>
      </form>
  </div>;
};

export default Search;
