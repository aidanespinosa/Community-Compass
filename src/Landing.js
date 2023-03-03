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
    <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 25 }}>
      <header>
        <h1 style={{ color: "black", marginBottom: 20, fontSize: 45, position: 'absolute', top: 25, left: 10 }}>
          Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
        </h1>
      </header>
      <main className="main">
        <div className="search">
          <input type="text" value={search} onChange={handleInputChange} onKeyDown={handleInputKeyDown} placeholder="Search for an address" />
          <button className="cool-button" onClick={handleSearch}>Search</button>
        </div>
        <div className="search-result" style={{ justifyContent: 'center', alignItems: 'center' }}>
          {searched && (
            <img
              src={searchResult}
              alt="Search result"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 25 }}
            />
          )}
          {!searched && (
            <img
              src="https://source.unsplash.com/1600x900/?house"
              alt="Search result"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 25 }}
            />
          )}
        </div>
        {searched && (
          <div className="result-window" style={{ borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 25, backgroundImage: `url(${searchResult})`, backgroundSize: 'cover' }}>
            <div className="title" style={{ borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
              <p style={{ color: "#fff", fontSize: 35 }}>{search}</p>
            </div>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </main>
      {searched && (
        <div className="crimeGrade" style={{ marginTop: "300px", borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{/*crime grade API call results*/}</p>
        </div>
      )}
      {searched && (
        <div className="schoolGrade" style={{ marginTop: "600px", borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{/*school grade API call*/}</p>
        </div>
      )}
      {searched && (
        <div className="amenities" style={{ marginTop: "300px", borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{/*amenities API call*/}</p>
        </div>
      )}
      {searched && (
        <div className="recreation" style={{ marginTop: "600px", borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
          <p style={{ color: "#fff", fontSize: 35 }}>{/*rec areas API call*/}</p>
        </div>
      )}
    </div>
  );
}

export default LandingPage;