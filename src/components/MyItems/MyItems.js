import axios from 'axios';
import { signOut } from 'firebase/auth';
import './MyItems.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const navigte = useNavigate()
    const email = user?.email

    const [products, setProduct] = useState([])
    console.log(products);
    useEffect(() => {

        const run = async () => {
            const url = `http://localhost:5000/myItem/${email}`
            try {
                await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(function (res) {
                        setProduct(res.data)
                    })
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403)
                    signOut(auth)
                navigte('/login')
            }
        }
        run()
    }, [email])

    return (
        <div className='w-50 mx-auto mt-3 mb-5'>
            <h2 className='text-center mb-3'>My product   {products.length}</h2>
            <div className='myitem'>
                {
                    products.map(product => <MyItemDetails
                        key={product._id}
                        product={product}
                    >

                    </MyItemDetails>)
                }
            </div>
        </div>
    );
};

export default MyItems;