import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputCountLetters extends Component {
  static propTypes = {
    limit: PropTypes.number
  };

  static defaultProps = {
    limit: 120
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSave = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    const { limit } = this.props;
    const { text } = this.state;
    return (
      <div>
        <textarea maxLength={limit} value={text} onChange={this.handleSave} />
        <p
          style={{
            color: text.length <= limit - 10 ? 'black' : 'red'
          }}
        >
          {text.length / limit}
        </p>
      </div>
    );
  }
}

export default InputCountLetters;
