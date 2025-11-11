import React from 'react';
import Banner from './Banner';
import RecentBill from './RecentBill';
import CategorySection from './CategorySection';
import Bills from './AddBills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            {/* <RecentBill></RecentBill> */}
            <Bills></Bills>
        </div>
    );
};

export default Home;