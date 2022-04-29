import React from 'react';

const ManageInventoryDetails = (props) => {
    const { name, img, description, price, supplierName } = props.product
    return (
        <div className='product-details ps-5 mb-5'>
            <img src={img} alt="" />
            <h4 className='mt-0'>Name: {name}</h4>
            <p className='mb-0'> Description: {description}</p>
            <p className='mb-0'> Price: {price}</p>
            <p className='mt-0 mb-3'> Supplier: {supplierName}</p>
        </div>
    );
};

export default ManageInventoryDetails;