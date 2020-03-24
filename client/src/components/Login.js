import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [cred, setCred] = useState({username: "Lambda School", password: ""});
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    setCred({...cred, [e.target.name]: e.target.value })
  }
  const handleSubmit = e =>
    e.preventDefault();
    axiosWithAuth()
    .post(`http://localhost:5000/api/login`, cred)
    .then (res => {
      console.log('login success', res)
      localStorage.setItem("token", res.data.payload)    
      props.history.push('/Bubbles')
    })
    .catch (err => console.log('handleSubmit error', err))
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
      <input type="text"
             name="username"
             placeholder="username"
             onChange={handleChange}
             value={cred.username} />
      <input type="password"
             name="password"
             placeholder="password"
             onChange={handleChange}
             value={cred.password} />
      <button type="submit">Login</button>

      </form>
    </>
  );
};

export default Login;
