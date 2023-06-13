import React from "react";
import IconAtom from "../atoms/IconAtom";
import { NavLink } from "react-router-dom";

const NavbarMolecule = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink className="nav-link" to="/home">
        <IconAtom IconImage="fa fa-home mx-1" IconTitle="Home" />
      </NavLink>

      <NavLink className="nav-link" to="/login">
        <IconAtom IconImage="fa fa-file mx-1" IconTitle="Reports" />
      </NavLink>

      <NavLink className="nav-link" to="/register">
        <IconAtom IconImage="fa fa-heart mx-1" IconTitle="Donate" />
      </NavLink>

      <NavLink className="nav-link" to="/login">
        <IconAtom IconImage="fa fa-comment mx-1" IconTitle="Forum" />
      </NavLink>
    </ul>
  );
};

export default NavbarMolecule;
