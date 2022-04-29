import React from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {

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
            .then(result => console.log(result))
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 mb-4'>Add to Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Name" />
                <textarea className='mb-2 mt-2' {...register("Description")} type="text" placeholder="Description" />
                <input className='mb-2 ' type="number" {...register("price",)} placeholder="Price" />
                <input className='mb-2 ' {...register("name")} type="text" placeholder="Supplier Name" />
                <input className='mb-2 ' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-5 btn btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default Add;