import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hook/UseProductDetails';

const Invoice = () => {
    const { invoiceId } = useParams()
    let [products] = UseProductDetails(invoiceId);
    console.log(products);


    // delioverd and delete item
    const handleDelivered = () => {

        let { quantity, name, description, price, img, supplierName } = products;

        if (quantity > 0) {
            quantity = quantity - 1;
            products = { quantity, name, description, price, img, supplierName }
            console.log(products);
        }

        const url = `https://floating-bastion-64213.herokuapp.com/product/${invoiceId}`
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
            })
    }

    // input diye quantity increase
    const handleUpdate = e => {
        e.preventDefault()

        const number = e.target.number.value;
        let { quantity, name, description, price, img, supplierName } = products;

        if (quantity > 0) {
            quantity = parseInt(quantity) + parseInt(number);
            products = { quantity, name, description, price, img, supplierName }
            console.log(products);
        }

        const url = `https://floating-bastion-64213.herokuapp.com/product/${invoiceId}`
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
            })
    }

    return (
        <div className='container mt-3 mb-5'>
            <h5>ProducID:{invoiceId}</h5>
            <div style={{ boxShadow: "0 0 10px lightgrey" }} className='w-50  mx-auto mt-4 '  >
                <div className='w-50 mx-auto mb-5 pb-3'>
                    <img width='200px' src={products.img} alt="" />
                    <h5>Name : {products.name}</h5>
                    <p className='mb-0'>Description : {products.description}</p>
                    <p className='mb-0'>price :{products.price}</p>
                    <p className='mb-0'>Quantity : {products.quantity}</p>
                    <p>supplier Name : {products.supplierName}</p>
                    <button onClick={handleDelivered} style={{ background: 'lightcyan', borderRadius: '5px' }} className='border-1 '>Delivered</button>

                </div>
                <h5 className='text-center'>Enter the Added Number</h5>
                <form onSubmit={handleUpdate} className='d-flex w-50 mx-auto pb-5 '>
                    <input type="number" name="number" id="" placeholder='digit' />
                    <input className='bg-info border-1 rounded' type="submit" value="Add" />
                </form>
            </div>


            <Link to='/manageinventory'><span >Go to Manage Inventory page</span></Link>
        </div>
    );
};

export default Invoice;