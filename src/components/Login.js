import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMolecule from "./molecules/InputMolecule";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrors({ username: "Username is required." });
      return;
    }

    if (password === "") {
      setErrors({ password: "Password is required." });
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        if (result === "Login successful!") {
          navigate("/home");
        } else {
          setMessage("Invalid username or password.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="card">
      <div className="card-header">User Login Form</div>
      <div className="card-body">
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <InputMolecule
            labelId="username"
            labelName="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Please enter your username."
            id="username"
            error={errors.username}
          />

          <InputMolecule
            labelId="password"
            labelName="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Please enter your password."
            id="password"
            error={errors.password}
          />

          <button type="submit" className="btn btn-outline-success float-end">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
