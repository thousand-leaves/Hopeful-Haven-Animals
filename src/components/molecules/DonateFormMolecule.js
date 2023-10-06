import React from "react";
import IconAtom from "../atoms/IconAtom";
import { NavLink } from "react-router-dom";

const NavbarMolecule = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink className="nav-link2" to="/donateform">
        <IconAtom IconImage="fa fa-heart mx-1" IconTitle="Donation Form" />
      </NavLink>
    </ul>
  );
};

export default NavbarMolecule;
