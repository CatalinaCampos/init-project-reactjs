import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { closeAlert } from '../../../actions/utils';

class Notification extends Component {
  componentDidUpdate() {
    const {
      alert: { message, show, kind, timeout }
    } = this.props;

    if (show) {
      this.notify(message, kind, timeout);
      this.silenceToast();
    }
  }

  notify = (message, kind, timeout) => {
    if (kind === 'info') {
      toast.info(message, { autoClose: timeout });
    } else if (kind === 'warning') {
      toast.warn(message);
    } else if (kind === 'success') {
      toast.success(message, { autoClose: timeout });
    } else if (kind === 'error') {
      toast.error(message, { autoClose: timeout });
    } else {
      toast(message, { autoClose: timeout });
    }
  };

  silenceToast = () => {
    const { dispatch } = this.props;
    dispatch(closeAlert());
  };

  render() {
    return <ToastContainer />;
  }
}

const mapStateToProps = state => {
  const { alert } = state.utils;
  return {
    alert
  };
};

export default connect(mapStateToProps)(Notification);
