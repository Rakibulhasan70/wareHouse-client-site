import React from 'react';
import './Inventory.css'

const Inventory = (props) => {
    const { name, img, description, price, supplierName } = props.inventory
    return (
        <div className='product-details ps-5' >
            <img src={img} alt="" />
            <h4 className='mt-0'>Name: {name}</h4>
            <p className='mb-0'> Description: {description}</p>
            <p className='mb-0'> Price: {price}</p>
            <p className='mb-3'> Supplier: {supplierName}</p>
            <button className='mb-3 mt-0 update-btn'>Update</button>
        </div >
    );
};

export default Inventory;