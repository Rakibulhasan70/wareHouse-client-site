import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-4' >My Electronic Grocery</h1>
            <Banner></Banner>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;