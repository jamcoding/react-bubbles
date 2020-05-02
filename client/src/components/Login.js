import React from "react";
// import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(response => {
        console.log("login.js: login: success: response: ", response);
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/bubbles");
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
    <div className="login">
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={this.login}>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  )};
};

export default Login;
