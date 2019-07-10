import React from "react";
import sb from "../assets/sb.png";
import { ReactComponent as Menu } from "../assets/menu.svg";

const Header = () => {
  return (
    <>
      <img src={sb} className="logo" alt="logo" />
      <Menu className="logo" />
    </>
  );
};

export default Header;
