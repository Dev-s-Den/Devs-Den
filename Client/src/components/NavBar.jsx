import React, { useState } from "react";
import axios from "axios";
import SigninSignup from "./SigninSignup";
// Styles
import "./Styles/NavBar.scss";
// Helper functions
import { click, logForm } from "../helpers/helper";

export default function Navbar(props) {
  //States
  const [clicked, setClicked] = useState({ width: "60px" });
  const [form, setForm] = useState("none");

  const logout = () => {
    axios.get("/api/users/logout").then(() => {
      props.setUser({
        user_id: "",
        avatar: "",
        first_name: "",
        last_name: "",
        email: "",
        github_url: "",
      });
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-1" id="primarynav">
      <a className="navbar-brand" href="#">
        <img
          src="https://i.imgur.com/fuOFQoH.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          onClick={props.redirect}
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
          <li className="nav-item ">
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#"></a>
              <a className="dropdown-item" href="#"></a>
              <a className="dropdown-item" href="#"></a>
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
        {!(props.user.user_id === "") && (
          <div className="nav-userInfo">
            <img
              className="nav-avatar"
              src={props.user.avatar}
              alt="user avatar"
            />
            <h1>
              {props.user.first_name} {props.user.last_name}
            </h1>
          </div>
        )}
        {props.user.user_id === "" && (
          <ul className="nav navbar-nav navbar-right">
            <button
              className="btn btn-lg btn-outline-success"
              onClick={() => logForm(form, setForm)}
            >
              Login
            </button>
            <SigninSignup setUser={props.setUser} state={form} />
          </ul>
        )}
        {!(props.user.user_id === "") && (
          <ul className="nav navbar-nav navbar-right">
            <button
              className="btn btn-lg btn-outline-success"
              onClick={() => logout()}
            >
              Logout
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
}
