import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Navigation/Header';
import Footer from '../Component/Navigation/Footer';

const RootLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;