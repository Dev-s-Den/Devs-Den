import React, { useState } from "react";
import axios from 'axios';
// Styles
import "./Styles/Signin-Signup.scss";

export default function SigninSignup(props) {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    github_url: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    
      axios.post('/api/users', formData)
      .then(data => {
        console.log(data)
        axios.post('https://api.chatengine.io/users/', 
          {
          username: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          secret: 'fromdata'
          }, 
          {
            headers: {'PRIVATE-KEY': process.env.REACT_APP_chatPrivateKey}
          }
        )

      props.setUser(data.data)
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
              type="text"
              name="first_name"
              className="form-control"
              id="floatingInput"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="last_name"
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
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
              id="floatingInput"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="github_url"
              className="form-control"
              id="floatingInput"
              placeholder="GitHub-URL"
              value={formData.github_url}
              onChange={handleChange}
            />
          </div>
          <button className="w-100 btn btn-lg btn-outline-dark" type="submit" onClick={handleSubmit}>
            Sign-Up
          </button>
          <div className="signup">
            <p>Have An Account?</p>
            <p onClick={() => props.setNewUser(false)}><u>Sign-In</u></p>
          </div>
      </div>
    </form>
  )
}