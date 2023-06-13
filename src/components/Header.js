import React from "react";
import Title from "./atoms/TitleAtom";
import ButtonAtom from "./atoms/ButtonAtom";
import NavbarMolecule from "./molecules/NavBarMolecule";
import SearchFormMolecule from "./molecules/SearchFormMolecule";
import LoginMolecule from "./molecules/LoginMolecule";

const Header = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Title title="Hopeful Haven Animals" />
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
