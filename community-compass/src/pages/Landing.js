import React, { useState } from "react";
import SearchBar from "./searchBar";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

function LandingPage() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
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


  return (
    <div className="container" >

      <main className="main">
        <div className="search">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="search-result" style={{ justifyContent: 'center', alignItems: 'center' }}>
        </div>
        {searched && (
          <div className="result-window" style={{ borderRadius: "50px", bottom: 0, left: 0, width: 1400, height: 750, marginLeft: 25, backgroundImage: `url(${searchResult})`, backgroundSize: 'cover' }}>
            <div style={{ borderRadius: "25px", width: "400px", height: "100px", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }} >
              <p style={{ color: "#fff", fontSize: 35 }}>{search}</p>
            </div>
          </div>
        )}
        {Auth.loggedIn() ? (
          <>
              <button className="cool-button" onClick={logout}>
                Logout
              </button>
              <Link className="cool-button" to="/membership">
                Upgrage Membership
              </Link>
          </>
        ) : (
          <>
                <button className="cool-button" onClick={logout}>
                Notworking
              </button>
          </>
        )}
        {error && <div className="error">{error}</div>}

      </main>
    </div>


  );
}

export default LandingPage;