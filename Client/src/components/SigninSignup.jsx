import React, { useState } from "react";

// Styles
import "./Styles/Signin-Signup.scss";

// Components
import Signin from "./SignIn";
import Signup from "./SignUp";

export default function SigninSignup(props) {
  // States
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="form-signin" style={{ display: props.state }}>
      <img
        className="form-img"
        src="https://i.imgur.com/fuOFQoH.png"
        alt="Dev's Den Logo"
      />
      {!newUser && <Signin setUser={props.setUser} setNewUser={setNewUser} />}
      {newUser && <Signup setUser={props.setUser} setNewUser={setNewUser} />}
      <p>&copy; 2017–2021</p>
    </div>
  );
}
