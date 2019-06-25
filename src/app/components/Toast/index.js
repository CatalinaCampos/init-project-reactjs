import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Toast, Col, Button } from 'react-bootstrap';

class BasicToast extends Component {
  static propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
  };
  
  static defaultProps = {
    src: null,
    text: null,
    title: null
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  };

  render() {
    const { show } = this.state;
    const handleShow = () => this.setState({ show: true });
    const handleClose = () => this.setState({ show: false });
    const { src, text, body, title, header } = this.props;
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={handleClose} show={show} delay={3000} autohide>
            <Toast.Header>
              <img src={src} className='rounded mr-2' alt='' />
              <strong className='mr-auto'>{header}</strong>
              <small>{text}</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={handleShow}>{title}</Button>
        </Col>
      </Row>
    );
  }
}; 

export default BasicToast;
