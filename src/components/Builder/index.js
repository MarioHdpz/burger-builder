import React, { Component } from 'react'
import Burger from '../Burger';

class Builder extends Component {
    state = {
        ingredients: [
            'bacon',
            'salad',
            'cheese',
            'meat'
        ],
        price: 0,
    }

    render() {
        return (
            <Burger ingredients={this.state.ingredients} /> 
        )
    }
}

export default Builder;