import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hook/UseProductDetails';

const Invoice = () => {
    const { invoiceId } = useParams()
    let [products] = UseProductDetails(invoiceId)
    console.log(products);


    function refreshPage() {
        window.location.reload();
    }

    // const [quantitys, setQuantitys] = useState(10)

    const handleDelivered = () => {

        let { quantity, name, description, price, img, supplierName } = products;

        if (quantity > 0) {
            quantity = quantity - 1;
            products = { quantity, name, description, price, img, supplierName }
            console.log(products);
        }


        const url = `http://localhost:5000/product/${invoiceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(products),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('qantity updated')
                refreshPage()

            })


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
                    <p className='mb-0'>Quantity : {products.quantity}</p>
                    <p>supplier Name : {products.supplierName}</p>
                    <button onClick={handleDelivered} style={{ background: 'lightcyan', borderRadius: '5px' }} className='border-1'>Delivered</button>
                </div>
            </div>


            <Link to='/manageinventory'><span >Go to Manage Inventory page</span></Link>
        </div>
    );
};

export default Invoice;