
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Add = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const navigate = useNavigate()

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     const url = `http://localhost:5000/product`
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json '
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             alert('user added successfully!!')
    //         });

    // };

    const email = user?.email
    const handleAddItem = async (e) => {
        e.preventDefault()
        const supplierName = e.target.supplierName.value;
        const relevantName = e.target.relevantName.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const picture = e.target.picture.value;
        const product = {
            supplierName,
            relevantName,
            price,
            description,
            quantity,
            picture,
        }
        console.log(product);
        const newProduct = {
            ...product, email: email
        }


        // const handlePlaceOrder = event => {
        //     event.preventDefault();
        //     const order = {
        //         email: user.email,
        //         // service: service.name,
        //         // serviceId: serviceId,
        //         price: event.target.price.value,
        //         phone: event.target.phone.value,
        //         price:event.target.price.value,
        //     }
        await axios.post('http://localhost:5000/addItem', newProduct)
            // .then(response => {
            //     // console.log(response);
            //     const { data } = response;
            //     if (data.insertedId) {
            //         alert('Your order is booked!!!');
            //         // event.target.reset();
            //     }
            // })
            .then(function (res) {
                if (res?.data?.insertedId) {
                    navigate('/myitems')
                }
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Added New Product</h2>
            <form className='d-flex flex-column' onSubmit={handleAddItem}>
                <input className='mb-2' placeholder='SupplierName' type="text" name="supplierName" />
                <input className='mb-2' placeholder='RelevantName' type="text" name="relevantName" />
                <textarea className='mb-2' placeholder='Description' type="text" name="description" />
                <textarea className='mb-2' placeholder='email' type="email" value={user?.email} />
                <input className='mb-2' placeholder='Price' type="number" name="price" />
                <input className='mb-2' placeholder='Quantity' type="quantity" name='quantity' />
                <input className='mb-2' placeholder='Photo URL' type="img" name="picture" />
                <input type="submit" value="Add Service" className='btn btn-primary mb-3' />
            </form>


        </div>
    );
};

export default Add;