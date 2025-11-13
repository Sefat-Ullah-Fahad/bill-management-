

import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import RecentBill from './RecentBill';
import CategorySection from './CategorySection';
import Bills from './AddBills';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';
import usePageTitle from '../../utils/usePageTitle';

const Home = () => {
  const [loading, setLoading] = useState(true);

    // ✅ Use custom hook for dynamic title
  usePageTitle("Home | Utility Bill System");


  useEffect(() => {
    // Simulate page data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <CategorySection />
      {/* <RecentBill /> */}
      <Bills />
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;

