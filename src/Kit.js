import React, { Component } from "react";

class Kit extends Component {
  render() {
    const { id, name, description, price } = this.props;
    return (
      <li>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={() => this.props.chooseKit(id)}>
          Choose this kit
        </button>
      </li>
    );
  }
}

export default Kit;
