import React from "react";
import ButtonAtom from "./atoms/ButtonAtom";
import NavbarMolecule from "./molecules/NavBarMolecule";
import SearchFormMolecule from "./molecules/SearchFormMolecule";
import LoginMolecule from "./molecules/LoginMolecule";
import LogoAtom from "./atoms/LogoAtom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <LogoAtom src="/logo.png" alt="Hopeful Haven Animals" />
        <ButtonAtom />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarMolecule />
          <SearchFormMolecule />
          <LoginMolecule />
        </div>
      </div>
    </nav>
  );
};

export default Header;
