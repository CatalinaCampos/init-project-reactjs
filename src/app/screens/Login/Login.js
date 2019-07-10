import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BasicInput,
  ButtonDefault,
  NavbarTop,
  CheckBox,
  MainLogo
} from "../../components/";
import "./style.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavbarTop />
          </Col>
        </Row>
        <Row className="justify-content-center login">
          <Col md={4} className="form-login">
            {/* <MainLogo src="https://nnodes.com/Logo_Nnodes.png" width="150px" /> */}
            <h4>INICIAR SESIÓN</h4>
            <BasicInput placeholder="Correo" size="md" classN="email" />
            <BasicInput placeholder="Contraseña" size="md" classN="password" />
            <Col className="submit">
              <CheckBox text="Recordar" />
              <ButtonDefault name="Ingresar" size="md" />
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
