import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavbarLogged } from '../../components';
import { requestSignOut } from '../../actions/auth';
import { getPage } from '../../actions/utils';

class Other extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logoutAsync = async () => {
    const { dispatch } = this.props;
    dispatch(requestSignOut());
  };

  componentWillMount = () => {
    const { dispatch, match } = this.props;
    dispatch(getPage(match.params.page));
  };

  loading = () => <h4>Cargando...</h4>;

  content = () => {
    const {
      utils: {
        page: { body }
      }
    } = this.props;

    if (body) {
      return <div dangerouslySetInnerHTML={{ __html: body }} />;
    }
    return <h4>404</h4>;
  };

  render() {
    const {
      utils: { ongoingRequest }
    } = this.props;
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
        <Row className="justify-content-center login">
          <Col md={4} className="form-login">
            {ongoingRequest.getPage ? this.loading() : this.content()}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { utils } = state;
  return {
    utils
  };
};

export default withRouter(connect(mapStateToProps)(Other));
