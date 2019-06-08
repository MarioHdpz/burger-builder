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

  addIngredient = idIngrediente => {
    const newIngredients = this.state.ingredients;
    newIngredients.push(idIngrediente);
    this.setState({ingredients: newIngredients})
  }

  render() {
    return (
      <div>
        <ControlPanel onAdd={x => {this.addIngredient(x)}} />
        <Burger ingredients={this.state.ingredients} />
        <h1>$ {this.getPrice()}</h1>
      </div>
    );
  }
}

export default Builder;
