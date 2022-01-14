import React from "react";

// Styles
import "./Styles/NavBar.scss";

function NavBar() {
  return (
    <nav  className="navbar navbar-light bg-light">
      <div className="navbar-user"></div>
      <div className="collapse navbar-collapse">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> 
      <div className="navbar-login/logout"><h3>Login | Logout</h3></div> 
    </nav>
  );
}

export default NavBar;
