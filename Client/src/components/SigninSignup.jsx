import React, { useState } from "react";
import axios from "axios";
// Styles
import "./Styles/Signin-Signup.scss";

export default function SigninSignup(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.all([axios.post("/api/users/login", formData)]).then((data) => {
      props.setUser(data[0].data);
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={formData.emai}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-100 btn btn-lg btn-outline-dark"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3">&copy; 2017–2021</p>
      </form>
    </div>
  );
}
