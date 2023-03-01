import React, { useState } from "react";

function LandingPage() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    // Make an API call to retrieve search results
    // Replace below URL with first API call
    fetch(`https://google.com/${search}`)
      .then((response) => response.json())
      .then((data) => {
        // Update state with the search result
        setSearchResult(data.image);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
      <h1 style={{ color: "black", marginBottom: 20, fontSize: 45 }}>
        Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
      </h1>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for an address"
        />
        <button className="cool-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="search-result">
        {searchResult && <img src={searchResult} alt="Searched object" />}
      </div>
    </div>
  );
}

export default LandingPage;