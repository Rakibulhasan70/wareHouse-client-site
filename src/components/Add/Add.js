import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const Add = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json '
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('user added successfully!!')
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 mb-4'>Add to Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' {...register("name")} placeholder="user name" value={user?.displayName} disabled />

                <input  {...register("email")} type="email" name="email" placeholder='email' value={user?.email} disabled />

                <input className='mt-2' type="text" placeholder="product name" />

                <textarea className='mb-2 mt-2' {...register("description")} placeholder="Description" />

                <input className='mb-2 ' type="number" {...register("number",)} placeholder="Price" />

                <input className='mb-2 ' placeholder='Photo URL' type="text" {...register("img")} />

                <input className='mb-5 btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default Add;