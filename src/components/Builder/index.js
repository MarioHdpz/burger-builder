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
    ingredients: ["salad", "meat", "meat"],
  };

  getPrice = () => {
    const pricesArray = this.state.ingredients.map(ingredient => {
      return prices[ingredient];
    })
    const price = pricesArray.reduce((ant, act) => {
      return ant + act;
    }, 0)
    return price;
  }

  render() {
    return (
      <div>
        <ControlPanel />
        <Burger ingredients={this.state.ingredients} />
        <h1>$ {this.getPrice()}</h1>
      </div>
    );
  }
}

export default Builder;
