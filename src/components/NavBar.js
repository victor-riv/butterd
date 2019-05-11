import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h3>Butterd</h3>
      <div className="nav-bar-links">
        <p>Movies</p>
        <p>News</p>
      </div>
      <div className="nav-bar-account">
        <p>Create Account</p>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
