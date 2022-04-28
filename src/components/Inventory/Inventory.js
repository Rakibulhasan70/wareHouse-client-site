import React from 'react';
import './Inventory.css'

const Inventory = (props) => {
    const { name, img } = props.inventory
    return (
        <div className='product-details'>
            <img className='img' src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Inventory;