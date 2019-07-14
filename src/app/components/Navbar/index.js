import React from "react";
import { Navbar, Row, Col, Container } from "react-bootstrap";
import { LinkButton, MainLogo } from "../../components/";

const PrincipalNavbar = ({ children }) => (
  <Navbar expand="lg" variant="light" bg="light" fixed="top">
    <Navbar.Brand href="/">{children}</Navbar.Brand>
  </Navbar>
);

const NavbarTop = () => (
  <Container>
    <Row>
      <Col>
        <PrincipalNavbar>
          <MainLogo src="https://i.imgur.com/LP69Ill.png" width="40px" />
          <LinkButton variant="link" text="Iniciar Sesión" to="/login" />
          <LinkButton variant="outline-info" text="Crear Cuenta" to="/register" />
        </PrincipalNavbar>
      </Col>
    </Row>
  </Container>
);

export { PrincipalNavbar, NavbarTop };
