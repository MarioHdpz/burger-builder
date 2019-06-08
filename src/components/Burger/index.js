import React from 'react';
import Ingredient from '../Ingredient';

const Burger = props => {
    const burgerIngredients = props.ingredients.map(
        (ingredient, index) => <Ingredient id={ingredient} />
    )

    return (
        <div className='burger'>
            <Ingredient id='bread-top' />
                {burgerIngredients}
            <Ingredient id='bread-bottom'/>
        </div>
    )
}

export default Burger;