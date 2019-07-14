import React from "react";
import { Image } from "react-bootstrap";
import logo from './logo.png'

const MainLogo = ({ width }) => {
  return (
    <Image src={logo} alt="Logo" className="logo" style={{ width }} />
  );
};

export default MainLogo;
