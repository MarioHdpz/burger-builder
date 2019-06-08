import React from 'react'

const ControlPanel = props => (
    <div className="control-panel">
        <div onClick={() => {props.onAdd('meat')}} className="button-meat">Meat</div>
        <div onClick={() => {props.onAdd('salad')}} className="button-salad">Salad</div>
        <div onClick={() => {props.onAdd('cheese')}} className="button-cheese">Cheese</div>
        <div onClick={() => {props.onAdd('bacon')}} className="button-bacon">Bacon</div>
    </div>
)

export default ControlPanel;