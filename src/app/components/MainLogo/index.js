import React from "react";
import { Image } from "react-bootstrap";

const MainLogo = ({ src, alt, width }) => {
  return (
    <Image src={src} alt={alt} className="logo" style={{ width: width }} />
  );
};

export default MainLogo;
