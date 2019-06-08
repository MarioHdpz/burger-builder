import React, { Component } from "react";
import Burger from "../Burger";
import ControlPanel from "../ControlPanel";

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

const prices = {
    'bacon': 10,
    'salad': 2,
    'cheese': 5,
    'meat': 20,
}

class Builder extends Component {
  state = {
    ingredients: [],
    price: 0
  };

  render() {
    return (
      <div>
        <ControlPanel />
        <Burger ingredients={this.state.ingredients} />
        <h1>$ {this.state.price}</h1>
      </div>
    );
  }
}

export default Builder;
