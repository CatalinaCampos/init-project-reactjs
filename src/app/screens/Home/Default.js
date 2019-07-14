import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarTop } from '../../components';
import './style.scss';

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={{ padding: '0' }}>
            <NavbarTop />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Default;
