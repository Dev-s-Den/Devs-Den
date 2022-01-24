import React, { useState, useEffect } from "react";
import axios from "axios";
import SigninSignup from "./SigninSignup";
// Styles
import "./Styles/NavBar.scss";
// Helper functions
import { click, logForm } from "../helpers/helper";

export default function Navbar(props) {
  const {
    form,
    setForm,
    setTitle,
    user,
    setUser,
    value,
    setValue,
    setSearchValue,
    redirect,
    loginRef,
  } = props;

  //States
  const [clicked, setClicked] = useState({ width: "60px" });

  const logout = () => {
    axios.get("/api/users/logout").then(() => {
      setUser({
        user_id: "",
        avatar: "",
        first_name: "",
        last_name: "",
        email: "",
        github_url: "",
      });
    });
  };

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-1" id="primarynav">
      <a className="navbar-brand" href="#home">
        <img
          src="https://i.imgur.com/fuOFQoH.png"
          width="70"
          height="70"
          className="navbar-logo"
          onClick={() => {
            redirect(0);
            setTitle("");
            setValue("");
          }}
          alt="Dev's Den"
        />
      </a>
      <img
        className="Devsbrand"
        src={require("../img/devs.png")}
        width="90"
        height="90"
        alt="logo"
      />
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
            ></div>
          </li>
        </ul>
        <div className="navbar-search mr-auto" style={clicked}>
          <form>
            <div
              className="icon"
              onClick={() => click(clicked, setClicked)}
            ></div>
            <div className="input">
              <input
                id="search-input"
                type="text"
                placeholder="Explore"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                value={value}
              ></input>
            </div>
            <div className="clear" onClick={() => setValue("")}></div>
            <div
              className="search-send"
              onClick={(e) => {
                e.preventDefault();
                setTitle("");
                redirect(100);
              }}
            >
              <ion-icon name="send-outline"></ion-icon>
            </div>
          </form>
        </div>
        {!(user.user_id === "") && (
          <div className="nav-userInfo">
            <img className="nav-avatar" src={user.avatar} alt="user avatar" />
            <h1>
              {user.first_name} {user.last_name}
            </h1>
          </div>
        )}
        {user.user_id === "" && (
          <ul className="nav navbar-nav navbar-right">
            <button
              className="btn btn-lg login-logout"
              onClick={() => logForm(form, setForm)}
            >
              Login
            </button>
            <div ref={loginRef}>
              <SigninSignup setUser={setUser} state={form} />
            </div>
          </ul>
        )}
        {!(user.user_id === "") && (
          <ul className="nav navbar-nav navbar-right">
            <button
              className="btn btn-lg login-logout"
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
