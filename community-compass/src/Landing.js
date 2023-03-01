import React, { useState } from "react";

function LandingPage() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    fetch(`https://source.unsplash.com/1600x900/?${search}`)
      //.then((response) => response.json())
      .then((data) => {
        setSearchResult(data.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
      <h1 style={{ color: "black", marginBottom: 20, fontSize: 45 }}>
        Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
      </h1>
      <div className="search">
        <input type="text" value={search} onChange={handleInputChange} onKeyDown={handleInputKeyDown} placeholder="Search for an address" />
        <button className="cool-button" onClick={handleSearch}>Search</button>
      </div>
      <div className="search-result" style={{ justifyContent: 'center', alignItems: 'center' }}>
      </div>
      <div className="result-window" style={{ borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 25, backgroundImage: `url(${searchResult})`, backgroundSize: 'cover' }}>
        <div style={{ borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{search}</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;