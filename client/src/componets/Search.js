
import React from 'react';

const Search = () => {
  return <div>
      <form>
          <label>
            Search For Reference:{" "}
          </label>
          <input className="searchBar" type="text"/>
          <button className="submit-btn" type="submit">
              Search
          </button>
      </form>
  </div>;
};

export default Search;
