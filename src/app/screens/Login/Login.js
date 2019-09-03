import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
      email: 'user@nnodes.com',
      password: '123123123'
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
    dispatch(requestSignIn({ user: { email, password } }));
  };

  render() {
    const { email, password } = this.state;
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
              onChange={e => this.setState({ email: e.target.value })}
            />
            <BasicInput
              placeholder="Contraseña"
              size="md"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
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
  const { ongoingRequest, signedIn } = state.auth;
  return {
    ongoingRequest,
    signedIn
  };
};

export default withRouter(connect(mapStateToProps)(Login));
