import React from 'react';
import UseProducts from '../../Hook/UseProducts';
import './MyItemDetails.css'

const MyItemDetails = (props) => {
    const { _id, supplierName, quantity, price, description, picture } = props.product


    const [products, setProducts] = UseProducts()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `http://localhost:5000/product/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }

    return (
        <div className='myitemdetails container '>
            <div className='ps-2 mt-2'>
                <img className='w-50 mx-auto' src={picture} alt="" />
                <p> Supplier Name: {supplierName ? supplierName : 'undefined'}</p>
                <p>Quantity: {quantity ? quantity : 'undefined'}</p>
                <p>Price: {price ? price : 'undefined'}</p>
                <p><small>Description: {description ? description : 'undefined'}</small></p>
                <button onClick={() => handleDeleteBtn(_id)} className='btn btn-danger mb-2'>Delete</button>
            </div>

        </div>
    );
};

export default MyItemDetails;