import React from "react";
import LoginAtom from "../atoms/LoginAtom";
import { NavLink } from "react-router-dom";

const LoginMolecule = () => {
  return (
    <ul className="navbar-nav d-flex">
      <NavLink className="nav-link" to="/login">
        <LoginAtom LoginTitle="Login" LoginImage="fa fa-user mx-1" />
      </NavLink>
    </ul>
  );
};

export default LoginMolecule;
