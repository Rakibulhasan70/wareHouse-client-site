import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hook/UseProductDetails';

const Invoice = () => {
    const { invoiceId } = useParams()
    const [products] = UseProductDetails(invoiceId)

    const [quantitys, setQuantitys] = useState(1)
    const handleDelivered = () => {
        const newQuantitys = quantitys + 1;
        setQuantitys(newQuantitys)

    }

    return (
        <div className='container mt-3 mb-5'>
            <h5>ProducID:{invoiceId}</h5>
            <div style={{ boxShadow: "0 0 10px lightgrey" }} className='w-50  mx-auto mt-4'>
                <div className='w-50 mx-auto mb-5 pb-3'>
                    <img width='200px' src={products.img} alt="" />
                    <h5>Name : {products.name}</h5>
                    <p className='mb-0'>Description : {products.description}</p>
                    <p className='mb-0'>price :{products.price}</p>
                    <p className='mb-0'>Quantity : {quantitys}</p>
                    <p>supplier Name : {products.supplierName}</p>
                    <button onClick={handleDelivered} style={{ background: 'lightcyan', borderRadius: '5px' }} className='border-1'>Delivered</button>
                </div>
            </div>


            <Link to='/manageinventory'><span >Go to Manage Inventory page</span></Link>
        </div>
    );
};

export default Invoice;