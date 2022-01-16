import React, { useState } from "react";

// Components

// Styles
import "./Styles/NavBar.scss";

// Helper functions
import { click } from "../helpers/helper";

export default function Navbar(props) {
  //States
  const [clicked, setClicked] = useState({ width: "60px" });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-1"
      style={{ backgroundColor: "#222" }}
    >
      <a className="navbar-brand" href="#">
        <img
          src="https://i.imgur.com/fuOFQoH.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Dev's Den"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <div className="navbar-search mr-auto" style={clicked}>
          <div
            className="icon"
            onClick={() => click(clicked, setClicked)}
          ></div>
          <div className="input">
            <input
              id="search-input"
              type="text"
              placeholder="Explore"
              onChange={(e) => props.setValue(e.target.value)}
              value={props.value}
            ></input>
          </div>
          <div className="clear" onClick={() => props.setValue("")}></div>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              data-toggle="dropdown"
              role="button"
            >
              <b>Login| Signup</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}