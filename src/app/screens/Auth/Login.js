import React, { Component } from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavbarTop, CheckBox, MainLogo, LinkButton } from '../../components';
import { requestSignIn } from '../../actions/auth';
import './style.scss';

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
            <FormControl
              placeholder="Correo"
              className="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <FormControl
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Col className="submit">
              <CheckBox text="Recordar" />
              <Button size="md" onClick={this.handleSingIn}>
                Ingresar
              </Button>
            </Col>
            <LinkButton
              variant="link"
              text="¿Olvidaste tu cuenta?"
              to="/recovery_password"
            />
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
