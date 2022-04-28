import React from 'react';

const ManageInventoryDetails = (props) => {
    const { name, img, description, price, supplierName } = props.product
    return (
        <div className='product-details'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <h5>{supplierName}</h5>
        </div>
    );
};

export default ManageInventoryDetails;