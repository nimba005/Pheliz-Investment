import React from "react";

function Search() {
  return (
    <div className="container">
      <h2>Search</h2>
      <form>
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;