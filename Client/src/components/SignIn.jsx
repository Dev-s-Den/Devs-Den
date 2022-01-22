import React, { useState } from "react";
import axios from 'axios';
// Styles
import "./Styles/Signin-Signup.scss";

export default function SigninSignup(props) {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    Promise.all([
      axios.post('/api/users/login', formData),
    ]).then(data => {
      props.setUser(data[0].data)
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (

    <form className="inner-form">
      <div>

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
        <button className="w-100 btn btn-lg btn-outline-dark" type="submit" onClick={handleSubmit}>
          Sign in
        </button>
        <div className="signup">
          <p>Do Not Have An Account?</p>
          <p onClick={() => props.setNewUser(true)}><u>Sign-Up</u></p>
        </div>
      </div>
    </form>
  )
}