import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hook/UseProductDetails';

const Invoice = () => {
    const { invoiceId } = useParams()
    const [products] = UseProductDetails(invoiceId)

    return (
        <div className='container mt-3 mb-5'>
            <h5>ProducID:{invoiceId}</h5>
            <div className='w-50 mx-auto'>
                <img width='200px' src={products.img} alt="" />
                <h5>Name : {products.name}</h5>
                <p className='mb-0'>Description : {products.description}</p>
                <p className='mb-0'>price :{products.price}</p>
                <p className='mb-0'>Quantity : {products.quantity}</p>
                <p>supplier Name : {products.supplierName}</p>
            </div>


            <Link to='/manageinventory'><span >Go to Manage Inventory page</span></Link>
        </div>
    );
};

export default Invoice;