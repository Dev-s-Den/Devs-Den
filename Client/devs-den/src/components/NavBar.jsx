import React from "react";

// Styles
import "./Styles/NavBar.scss";

/**
 * This is for className "clear" to clear the input.
 * onClick="document.getElementById(search-input).value = ''"
 *
 * Scripts commented in index.html are used to minimize and expanding the search
 */

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-user"></div>
      <div className="navbar-search">
        <div className="icon"></div>
        <div className="input">
          <input id="search-input" type="text" placeholder="Explore"></input>
        </div>
        <div className="clear"></div>
      </div>
      <div className="navbar-login_logout">
        <h3>Login | Logout</h3>
      </div>
    </div>
  );
}

export default NavBar;
