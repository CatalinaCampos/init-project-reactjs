import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavbarLogged, DataTable } from '../../components';
import { requestSignOut } from '../../actions/auth';
import { getSlides, sendAlert } from '../../actions/utils';
import columns from './columns';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(getSlides());
  };

  logoutAsync = async () => {
    const { dispatch } = this.props;
    dispatch(requestSignOut());
  };

  handleButtonClick = (item, action) => {
    const { dispatch } = this.props;
    dispatch(
      sendAlert({
        kind: 'success',
        message: `Item ID: ${item.id} | Acción: ${action}`
      })
    );
  };

  render() {
    const { slides } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavbarLogged>
              <Button variant="outline-info" onClick={this.logoutAsync}>
                Cerrar Sesión
              </Button>
            </NavbarLogged>
          </Col>
        </Row>
        <DataTable columns={columns(this.handleButtonClick)} data={slides} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { slides } = state.utils;
  return {
    slides
  };
};

export default withRouter(connect(mapStateToProps)(Home));
