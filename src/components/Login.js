import React, { Component } from "react";
import InputMolecule from "./molecules/InputMolecule";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { email: "Password is required." } });
      return;
    }

    const loginUser = {
      email: email,
      password: password,
    };

    console.log(loginUser);

    this.setState({ email: "", password: "", errors: {} });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header">User Login Form</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <InputMolecule
              labelId="email"
              labelName="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.onHandleChange}
              placeholder="Please enter a valid email address."
              id="email"
              error={errors.email}
            />

            <InputMolecule
              labelId="password"
              labelName="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.onHandleChange}
              placeholder="Please enter your password."
              id="password"
              error={errors.password}
            />

            <input
              type="submit"
              value="login"
              className="btn btn-outline-success float-end"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
