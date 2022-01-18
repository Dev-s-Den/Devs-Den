import React from "react";

// Styles
import "./Styles/Signin-Signup.scss";

export default function SigninSignup(props) {
  return (
    <div className="form-signin" style={{ display: props.state }}>
      <form className="inner-form">
        <img
          className="form-img"
          src="https://i.imgur.com/fuOFQoH.png"
          alt="Dev's Den Logo"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
        </div>
        <button className="w-100 btn btn-lg btn-outline-dark" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3">&copy; 2017–2021</p>
      </form>
    </div>
  );
}
