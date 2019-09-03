import React, { Component } from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavbarTop, MainLogo } from '../../components';
import './style.scss';
import { requestPasswordRecovery } from '../../actions/auth';

class RecoveryPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: 'user@nnodes.com'
    };
  }

  handleRecoveryPassword = () => {
    const { email } = this.state;
    if (email === '') {
      alert('Ingrese email');
    } else {
      this.recoveryPassword(email);
    }
  };

  recoveryPassword = async email => {
    const { dispatch } = this.props;
    dispatch(requestPasswordRecovery({ email }));
  };

  render() {
    const { email } = this.state;
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
            <h4>RECUPERAR CONTRASEÑA</h4>
            <FormControl
              placeholder="Correo"
              className="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Col className="submit">
              <Button size="md" onClick={this.handleRecoveryPassword}>
                Recuperar
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { ongoingRequest } = state.auth;
  return {
    ongoingRequest
  };
};

export default withRouter(connect(mapStateToProps)(RecoveryPassword));
