import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Navigation/Header';
import Footer from '../Component/Navigation/Footer';

const RootLayOut = () => {
    return (
        <div className='bg-base-300'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;