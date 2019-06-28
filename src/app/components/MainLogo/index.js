import React from "react";
import { Image } from "react-bootstrap";
import "./style.scss";

const MainLogo = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="logo_nnodes" />;
};

export default MainLogo;
