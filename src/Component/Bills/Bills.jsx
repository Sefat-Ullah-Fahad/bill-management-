// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Bills = () => {
//   const navigate = useNavigate();
//   const [bills, setBills] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(false);

//   const categories = ["Electricity", "Gas", "Water", "Internet"];

//   // fetch bills from backend
//   const fetchBills = (category) => {
//     setLoading(true);

//     let url = "https://bill-management-server-black.vercel.app/bills";
//     if (category && category !== "All") {
//       url += `?category=${category}`;
//     }

//     fetch(url)
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchBills(filter);
//   }, [filter]);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8"><span className="text-color2">All</span> <span className="text-color1">Bills</span></h2>

//       {/* Category Filter */}
//       <div className="mb-6 flex justify-center">
//         <select
//           className="border px-4 py-2 rounded-md shadow-md"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All Bills</option>
//           {categories.map(cat => (
//             <option key={cat} value={cat}>{cat}</option>
//           ))}
//         </select>
//       </div>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center h-40">
//           <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {/* No bills found */}
//       {!loading && bills.length === 0 && (
//         <p className="text-center text-gray-500 mt-10 text-lg">No bills found for this category.</p>
//       )}

//       {/* Card Grid */}
//       {!loading && bills.length > 0 && (

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//   {bills.map((bill) => (
//     <div
//       key={bill._id || bill.billsId}
//       className=" border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col"
//     >
//       <img
//         src={bill.image}
//         alt={bill.title}
//         className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-lg sm:text-xl font-semibold  mb-2">
//         {bill.title}
//       </h3>
//       <p className=" mb-1">
//         <span className="font-medium">Category:</span> {bill.category}
//       </p>
//       <p className=" mb-1">
//         <span className="font-medium">Amount:</span> {bill.amount} BDT
//       </p>
//       <p className=" mb-2">
//         <span className="font-medium">Location:</span> {bill.location}
//       </p>
//       <p className="text-sm text-gray-400 mb-4">{bill.date}</p>

//       <button
//         onClick={() => navigate(`/bill/${bill._id || bill.billsId}`)}
//         className="mt-auto w-full bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-medium px-5 py-2 rounded-md hover:from-indigo-400 hover:to-sky-300 transition-all duration-300"
//       >
//         View Details
//       </button>
//     </div>
//   ))}
// </div>

//       )}

//       {/* Spinner CSS */}
//       <style>
//         {`
//           .loader {
//             border-width: 4px;
//             border-color: #3b82f6;
//             border-top-color: transparent;
//             border-radius: 50%;
//             width: 48px;
//             height: 48px;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Bills;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../utils/usePageTitle";

const Bills = () => {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = ["Electricity", "Gas", "Water", "Internet"];


      // ✅ Use custom hook for dynamic title
    usePageTitle("Bills | Utility Bill System");



  // ✅ Fetch Bills From Backend
  const fetchBills = async (category) => {
    try {
      setLoading(true);

      let url = "https://bill-management-server-black.vercel.app/bills";
      if (category !== "All") {
        url += `?category=${category}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setBills(data);
    } catch (error) {
      console.error("Failed to load bills:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch when filter changes
  useEffect(() => {
    fetchBills(filter);
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-color2">All</span>{" "}
        <span className="text-color1">Bills</span>
      </h2>

      {/* ✅ Category Filter */}
      <div className="mb-6 flex justify-end">
        <select
          className="border px-4 py-2 rounded-md shadow-md bg-base-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Bills</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Loader */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {/* ✅ No Data */}
      {!loading && bills.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No bills found for this category.
        </p>
      )}

      {/* ✅ Bills Grid */}
      {!loading && bills.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bills.map((bill) => (
            <div
              key={bill._id}
              className="border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col"
            >
              <img
                src={bill.image}
                alt={bill.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {bill.title}
              </h3>

              <p className="mb-1">
                <span className="font-medium">Category:</span> {bill.category}
              </p>
              <p className="mb-1">
                <span className="font-medium">Amount:</span> {bill.amount} BDT
              </p>
              <p className="mb-2">
                <span className="font-medium">Location:</span> {bill.location}
              </p>
              <p className="text-sm text-gray-400 mb-4">{bill.date}</p>

              <button
                onClick={() => navigate(`/bill/${bill._id}`)}
                className="mt-auto w-full card-btn text-white  font-bold px-5 py-2 rounded-md  transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Loader Animation */}
      <style>
        {`
        .loader {
          border-width: 4px;
          border-color: #3b82f6;
          border-top-color: transparent;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
      </style>
    </div>
  );
};

export default Bills;
