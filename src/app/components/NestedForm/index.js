import React, { Component } from 'react';
import { DefaultButton } from '../Button';
import './style.css';

class NestedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [{ name: '' }]
    };
  }

  handleAddItem = () => {
    const { item } = this.state;
    this.setState({
      item: item.concat([{ name: '' }])
    });
  };

  render() {
    const { item } = this.state;
    const { children } = this.props;
    return (
      <div>
        {item.map(i => (
          <div className="form" key={i}>
            {children}
            <DefaultButton text="-" variant="danger" />
          </div>
        ))}
        <DefaultButton text="+" onClick={this.handleAddItem} />
      </div>
    );
  }
}

export default NestedForm;
