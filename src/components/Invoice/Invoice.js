import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import UseProducts from '../../Hook/UseProducts';

const Invoice = () => {
    const { invoiceId } = useParams()
    // const [products] = UseProducts(invoiceId)
    // console.log(products);
    return (
        <div className='container mt-3'>
            <h2>Invoice:{invoiceId}</h2>
            <h2>name:{invoiceId.name}</h2>


            <Link to='/manageinventory'>Go to Manage Inventory page</Link>
        </div>
    );
};

export default Invoice;