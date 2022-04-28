import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Invoice = () => {
    const { invoiceId } = useParams()
    return (
        <div className='container'>
            <h2>Invoice:{invoiceId}</h2>

            <Link to='/manageinventory'>Go to Manage Inventory page</Link>
        </div>
    );
};

export default Invoice;