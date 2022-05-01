import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user?.email

    const [products, setProduct] = useState([])
    console.log(products);
    useEffect(() => {

        const run = async () => {
            // const url =`http://localhost:5000/order?email=${email}`
            // const {data}=await axios.get(url)

            // setProduct(data)
            await axios
                .get(`http://localhost:5000/myItem/${email}`)
                .then(function (res) {
                    setProduct(res.data)
                })

        }
        run()
    }, [email])
    return (
        <div>
            <h2>{products.length}</h2>
        </div>
    );
};

export default MyItems;