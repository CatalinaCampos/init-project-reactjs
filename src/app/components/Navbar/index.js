import React from "react";
import { Navbar } from "react-bootstrap";
import { ButtonDefault, MainLogo } from "../../components/";

const PrincipalNavbar = ({ children }) => (
  <Navbar expand="lg" variant="light" bg="light" fixed="top">
    <Navbar.Brand href="/">{children}</Navbar.Brand>
  </Navbar>
);

const NavbarTop = () => (
  <PrincipalNavbar>
    <MainLogo src="https://i.imgur.com/LP69Ill.png" width="40px" />
    <ButtonDefault variant="link" name="Iniciar Sesión" path="/login" />
    <ButtonDefault variant="outline-info" name="Crear Cuenta" />
  </PrincipalNavbar>
);

export { PrincipalNavbar, NavbarTop };
