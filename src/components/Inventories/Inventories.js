import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center'> My Inventory</h2>
            <div className='products '>
                {
                    products.slice(0, 6).map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }

            </div>
            <p className='text-center mt-4'> <Link style={{ fontFamily: 'cursive' }} to='/manageinventory' >Show All Products</Link></p>
        </div>
    );
};

export default Inventories;