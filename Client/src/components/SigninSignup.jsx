import React from "react";

// Styles
import "./Styles/Signin-Signup.scss";

export default function SigninSignup(props) {
  return (
    <div className="form-signin">
      <form>
        <img
          className="mb-4"
          src="https://i.imgur.com/fuOFQoH.png"
          alt=""
          width="120"
          height="120"
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

        <div className="checkbox mb-3">
          <label>
            {/* <input type="checkbox" value="remember-me">
              {" "}
              Remember me
            </input> */}
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  );
}
