import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BasicInput,
  ButtonDefault,
  NavbarTop,
  CheckBox
} from "../../components/";
import "./style.scss";
import { connect } from "react-redux";
import { requestSignIn } from "../../actions/auth";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSingIn = () => {
    if (this.state.email === "") {
      alert("Ingrese email");
    }
    if (this.state.password === "") {
      alert("Ingrese contraseña");
    } else {
      this.signInAsync(this.state.email, this.state.password);
    }
  };

  signInAsync = async (email, password) => {
    this.props.dispatch(requestSignIn({ email, password }));
  };

  render() {
    console.log(this.state.email);
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
            <BasicInput
              placeholder="Correo"
              size="md"
              classN="email"
              value={this.state.email}
              change={(e) => this.setState({ email: e.target.value })}
            />
            <BasicInput
              placeholder="Contraseña"
              size="md"
              classN="password"
              value={this.state.password}
              change={(e) => this.setState({ password: e.target.value })}
            />
            <Col className="submit">
              <CheckBox text="Recordar" />
              <ButtonDefault
                name="Ingresar"
                size="md"
                onClick={this.handleSingIn}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { notice } = state;
  return {
    notice
  };
};

export default connect(mapStateToProps)(Login);
