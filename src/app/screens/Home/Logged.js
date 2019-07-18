import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarLogged } from '../../components';

import './style.scss';

const Logged = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavbarLogged />
        </Col>
      </Row>
      <Row className="justify-content-center login">
        <Col md={4} className="form-login">
          <h4>Home</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Logged;
