import React from 'react';
import UseProducts from '../../Hook/UseProducts';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [products, setProducts] = UseProducts()
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5'> My ManageInventory</h2>
            <div className="products">
                {
                    products.map(product => <ManageInventoryDetails
                        key={product.id}
                        product={product}
                    >

                    </ManageInventoryDetails>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;