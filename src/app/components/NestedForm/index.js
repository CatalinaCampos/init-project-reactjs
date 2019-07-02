import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonDefault } from "../index";
import "./style.css";
import { Button } from "react-bootstrap";

class NestedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [{ name: "" }],
      valueInp: ""
    };
  }

  handleAddItem = () => {
    this.setState({
      item: this.state.item.concat([{ name: "" }])
    });
  };

  handleRemove = () => {
    console.log("deleted");
  };

  render() {
    const itemInput = this.state.item;
    console.log(this.props);
    console.log(this.state.valueInp);
    return (
      <div>
        {itemInput.map((i) => (
          <div className="form">
            {this.props.children}
            <ButtonDefault name="-" variant="danger" />
          </div>
        ))}
        <ButtonDefault name="+" onClick={this.handleAddItem} />
      </div>
    );
  }
}

export default NestedForm;
