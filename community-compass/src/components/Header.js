import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header mb-4 py-3 flex-row align-center" >
      <div className="">
        <div>
          <Link className="text-light" to="/">
          <h1 style={{ color: "black", marginBottom: 20, fontSize: 45, position: 'absolute', top: 25, left: 10 }}>
          Safe<span style={{ color: "#fff", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>Zone</span>
        </h1>
          </Link>
        </div>
        <div className="buttons" style={{ position: "absolute", top: 0, right: 0 }}>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="cool-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="cool-button" to="/login">
                Login
              </Link>
              <Link className="cool-button" to="/signup">
                Signup
              </Link>
              <Link className="cool-button" to="/Contact">
                Contact Us
              </Link>
              <Link className="cool-button" to="/">
                Home
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;