import React, { useState } from "react";

import './SearchForm.css'

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchType}: ${searchTerm}`);
    // Call search function with searchType and searchTerm as parameters
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
         <div className="search-bar">
            <input type="text" value={searchTerm} onChange={handleInputChange} className="search-input" />
            <button type="submit" className="search-button"></button>
         </div>
      </label>
      <div>
        <input
          type="radio"
          name="searchType"
          value="title"
          checked={searchType === "title"}
          onChange={handleSearchTypeChange}
        />
        <label>Title</label>
        <input
          type="radio"
          name="searchType"
          value="artist"
          checked={searchType === "artist"}
          onChange={handleSearchTypeChange}
        />
        <label>Artist</label>
        <input
          type="radio"
          name="searchType"
          value="user"
          checked={searchType === "user"}
          onChange={handleSearchTypeChange}
        />
        <label>User</label>
      </div>
      
    </form>
  );
}

export default SearchForm;