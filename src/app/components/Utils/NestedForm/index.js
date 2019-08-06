import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
            <Button variant="danger">-</Button>
          </div>
        ))}
        <Button onClick={this.handleAddItem}>+</Button>
      </div>
    );
  }
}

export default NestedForm;
