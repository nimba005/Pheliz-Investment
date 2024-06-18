import React from "react";
import { useNavigate } from "react-router-dom";

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