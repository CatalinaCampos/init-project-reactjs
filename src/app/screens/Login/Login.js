import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  BasicInput,
  DefaultButton,
  NavbarTop,
  CheckBox,
  MainLogo
} from '../../components';
import './style.scss';
import { requestSignIn } from '../../actions/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSingIn = () => {
    const { email, password } = this.state;
    if (email === '') {
      alert('Ingrese email');
    }
    if (password === '') {
      alert('Ingrese contraseña');
    } else {
      this.signInAsync(email, password);
    }
  };

  signInAsync = async (email, password) => {
    const { dispatch } = this.props;
    dispatch(requestSignIn({ email, password }));
  };

  render() {
    const { email, password } = this.state;
    console.log(email);
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavbarTop />
          </Col>
        </Row>
        <Row className="justify-content-center login">
          <Col md={4} className="form-login">
            <MainLogo />
            <h4>INICIAR SESIÓN</h4>
            <BasicInput
              placeholder="Correo"
              size="md"
              className="email"
              value={email}
              change={e => this.setState({ email: e.target.value })}
            />
            <BasicInput
              placeholder="Contraseña"
              size="md"
              className="password"
              value={password}
              change={e => this.setState({ password: e.target.value })}
            />
            <Col className="submit">
              <CheckBox text="Recordar" />
              <DefaultButton
                text="Ingresar"
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

const mapStateToProps = state => {
  const { notice } = state;
  const { headers, ongoingRequest, signedIn } = state.auth;
  return {
    notice,
    headers,
    ongoingRequest,
    signedIn
  };
};

export default connect(mapStateToProps)(Login);
