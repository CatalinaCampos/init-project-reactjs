import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavbarLogged, DefaultButton } from '../../components';
import { requestSignOut } from '../../actions/auth';

import './style.scss';

class Logged extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logoutAsync = async () => {
    const { dispatch } = this.props;
    dispatch(requestSignOut());
  };

  componentWillReceiveProps = nextProps => {
    const { signedIn, history } = this.props;
    if (signedIn !== nextProps.signedIn) {
      history.push('/login');
    } else {
      console.log('error al cerrar sesión');
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavbarLogged>
              <DefaultButton
                variant="outline-info"
                text="Cerrar Sesión"
                onClick={this.logoutAsync}
              />
            </NavbarLogged>
          </Col>
        </Row>
        <Row className="justify-content-center login">
          <Col md={4} className="form-login">
            <h4>Homee</h4>
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

export default withRouter(connect(mapStateToProps)(Logged));
