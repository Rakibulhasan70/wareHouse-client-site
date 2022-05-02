import { useEffect, useState } from 'react';

const UseProductDetails = productId => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://floating-bastion-64213.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseProductDetails;