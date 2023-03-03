import React, { useState } from "react";

function LandingPage() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        //we need to update this url with the actual url we'll use to search the home address
        `https://source.unsplash.com/1600x900/?${search}`
      );
      if (!response.ok) {
        throw new Error("Oops! Something that wasn't supposed to happen happened!");
      }
      setSearchResult(response.url);
      setSearched(true);
      setSearch("");
    } catch (error) {
      setError(error.message);
    }
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
    <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <header>
        <h1 style={{ color: "black", marginBottom: 20, fontSize: 45, position: 'absolute', top: 25, left: 10 }}>
          Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
        </h1>
        <p style={{ position: "fixed", left: 0, maxWidth: 250, marginLeft: 25, marginTop: 100 }} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </header>
      <main className="main">
        <div className="search">
          <input type="text" value={search} onChange={handleInputChange} onKeyDown={handleInputKeyDown} placeholder="Search for an address" />
          <button className="cool-button" onClick={handleSearch}>Search</button>
        </div>
        <div className="search-result" style={{ justifyContent: 'center', alignItems: 'center' }}>
          {!searched && (
            <img src="https://source.unsplash.com/1600x900/?neighborhood" alt="Search result" style={{ zIndex: 1, maxWidth: "100%", maxHeight: "100%", borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 300 }}
            />
          )}
        </div>
        {searched && (
          <div className="result-window" style={{ zIndex: 1, maxWidth: "100%", maxHeight: "100%", borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 300, backgroundImage: `url(${searchResult})`, backgroundSize: 'cover' }}>
            <div className="title" style={{ borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
              <p style={{ color: "#fff", fontSize: 35 }}>{search}</p>
            </div>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </main>
      {searched && (
        <div className="crimeGrade" style={{ marginTop: 300, borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{"Crime Grade C-"/*crime grade API call results*/}</p>
        </div>
      )}
      {searched && (
        <div className="schoolGrade" style={{ marginTop: 450 , borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{"School Zone ****"/*school grade API call*/}</p>
        </div>
      )}
      {searched && (
        <div className="amenities" style={{ marginTop: 600, borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{"LOCKED"/*amenities API call*/}</p>
        </div>
      )}
      {searched && (
        <div className="recreation" style={{ marginTop: 750, borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{"LOCKED"/*rec areas API call*/}</p>
        </div>
      )}
    </div>
  );
}

export default LandingPage;