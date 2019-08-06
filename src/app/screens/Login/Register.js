import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavbarTop } from '../../components';
import './style.scss';
import { signUpRequest } from '../../actions/auth';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      email: '',
      password: ''
      // repeatPassword: ''
    };
  }

  handleCreateAccount = () => {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      alert('Faltan datos');
    } else {
      this.signUpAsync();
    }
  };

  signUpAsync = async () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(signUpRequest({ user: { email, password } }));
  };

  componentWillReceiveProps = nextProps => {
    const { signedIn, history } = this.props;
    if (signedIn !== nextProps.signedIn && nextProps.signedIn) {
      history.push('/home');
    } else {
      console.log('error');
    }
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
            <h4>CREAR CUENTA</h4>
            {/* <FormControl
              placeholder="Nombre"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            /> */}
            <FormControl
              placeholder="Email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <FormControl
              placeholder="Contraseña"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {/* <FormControl
              placeholder="Repetir Contraseña"
              value={repeatPassword}
              onChange={e => this.setState({ repeatPassword: e.target.value })}
            /> */}
            <Button onClick={this.handleCreateAccount}>Crear Cuenta</Button>
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

export default withRouter(connect(mapStateToProps)(Register));
