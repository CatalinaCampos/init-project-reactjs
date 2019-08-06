import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

class DefaultModal extends Component {
  static propTypes = {
    variantBtn: PropTypes.string,
    titleBtn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    variantBtnClose: PropTypes.string,
    titleBtnClose: PropTypes.string.isRequired,
    variantBtnSave: PropTypes.string,
    titleBtnSave: PropTypes.string.isRequired
  };

  static defaultProps = {
    variantBtn: 'info',
    variantBtnClose: 'primary',
    variantBtnSave: 'success'
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const {
      variantBtn,
      titleBtn,
      title,
      body,
      variantBtnClose,
      titleBtnClose,
      variantBtnSave,
      titleBtnSave
    } = this.props;
    const { show } = this.state;
    return (
      <>
        <Button variant={variantBtn} onClick={this.handleShow}>
          {titleBtn}
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            <Button variant={variantBtnClose} onClick={this.handleClose}>
              {titleBtnClose}
            </Button>
            <Button variant={variantBtnSave} onClick={this.handleClose}>
              {titleBtnSave}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const CenteredModal = ({
  header,
  title,
  body,
  titlebtn,
  size,
  onClickHide,
  ...props
}) => (
  <Modal
    {...props}
    size={size}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>{title}</h4>
      <p>{body}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClickHide}>{titlebtn}</Button>
    </Modal.Footer>
  </Modal>
);

CenteredModal.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  titlebtn: PropTypes.string.isRequired,
  size: PropTypes.string
};

CenteredModal.defaultProps = {
  header: null,
  size: 'lg'
};

class ModalCenter extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  modalClose = () => this.setState({ modalShow: false });

  render() {
    const { header, title, body, titlebtn, size, titlebtnmodal } = this.props;
    const { modalShow } = this.state;
    return (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          {titlebtnmodal}
        </Button>

        <CenteredModal
          show={modalShow}
          onHide={this.modalClose}
          header={header}
          title={title}
          body={body}
          titlebtn={titlebtn}
          size={size}
          titlebtnmodal={titlebtnmodal}
        />
      </ButtonToolbar>
    );
  }
}

export { DefaultModal, ModalCenter };
