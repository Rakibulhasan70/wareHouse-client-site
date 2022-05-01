// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const MyItems = () => {
//     const [user] = useAuthState(auth)
//     const [products, setproducts] = useState([])
//     useEffect(() => {
//         const getProducts = async () => {
//             const email = user.email;
//             const url = `http://localhost:5000/product?email=${email}`
//             const { data } = await axios.get(url);
//             setproducts(data)
//         }
//         getProducts()

//     }, [user])
//     return (
//         <div>
//             <h2>MyItems:{products.length}</h2>
//         </div>
//     );
// };

// export default MyItems;