// import React, { useEffect, useState } from "react";

// const Bills = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:2000/bills")
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8">All Bills</h2>

//       {/* Card Grid */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//         {bills.map(bill => (
//           <div key={bill._id} className="border rounded-lg shadow hover:shadow-lg transition p-4">

//             {/* Image */}
//             <img
//               src={bill.image}
//               alt={bill.title}
//               className="w-full h-40 object-cover rounded"
//             />

//             {/* Text */}
//             <h3 className="text-xl font-bold mt-3">{bill.title}</h3>
//             <p><span className="font-semibold">Category:</span> {bill.category}</p>
//             <p><span className="font-semibold">Amount:</span> {bill.amount} BDT</p>
//             <p><span className="font-semibold">Location:</span> {bill.location}</p>
//             <p className="text-sm text-gray-500">{bill.date}</p>

//             {/* Button */}
//             <button
//               onClick={() => window.location.href = `/bill/${bill._id}`}
//               className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
//             >
//               View Details
//             </button>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Bills;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Bills = () => {
//   const [bills, setBills] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(false); // ✅ loading state
//   const navigate = useNavigate();

//   const getBills = (category) => {
//     setLoading(true); // start loading
//     let url = "http://localhost:2000/bills";

//     if (category && category !== "All") {
//       url += `?category=${category}`;
//     }

//     fetch(url)
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(err => console.log(err))
//       .finally(() => setLoading(false)); // stop loading
//   };

//   useEffect(() => {
//     getBills(filter);
//   }, [filter]);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8">All Bills</h2>

//       {/* ✅ Category Filter */}
//       <div className="mb-6 flex justify-center">
//         <select
//           className="border px-4 py-2 rounded-md shadow-md"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All Bills</option>
//           <option value="Electricity">Electricity</option>
//           <option value="Gas">Gas</option>
//           <option value="Water">Water</option>
//           <option value="Internet">Internet</option>
//         </select>
//       </div>

//       {/* ✅ Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center h-40">
//           <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {/* ✅ Card Grid */}
//       {!loading && (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {bills.map(bill => (
//             <div key={bill._id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
//               <img
//                 src={bill.image}
//                 alt={bill.title}
//                 className="w-full h-40 object-cover rounded"
//               />

//               <h3 className="text-xl font-bold mt-3">{bill.title}</h3>
//               <p><strong>Category:</strong> {bill.category}</p>
//               <p><strong>Amount:</strong> {bill.amount} BDT</p>
//               <p><strong>Location:</strong> {bill.location}</p>
//               <p className="text-sm text-gray-500">{bill.date}</p>

//               <button
//                 onClick={() => navigate(`/bill/${bill._id}`)}
//                 className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Simple CSS Spinner */}
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










// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Bills = () => {
//   const [bills, setBills] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const getBills = (category) => {
//     setLoading(true);
//     let url = "http://localhost:2000/bills";

//     if (category && category !== "All") {
//       url += `?category=${category}`;
//     }

//     fetch(url)
//       .then(res => res.json())
//       .then(data => setBills(data))
//       .catch(err => console.log(err))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     getBills(filter);
//   }, [filter]);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8">All Bills</h2>

//       {/* Category Filter */}
//       <div className="mb-6 flex justify-center">
//         <select
//           className="border px-4 py-2 rounded-md shadow-md"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All Bills</option>
//           <option value="Electricity">Electricity</option>
//           <option value="Gas">Gas</option>
//           <option value="Water">Water</option>
//           <option value="Road">Road</option>
//           <option value="Cleanliness">Cleanliness</option>
//           <option value="Environment">Environment</option>
//         </select>
//       </div>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center h-40">
//           <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//       )}

//       {/* No Bills Found Message */}
//       {!loading && bills.length === 0 && (
//         <p className="text-center text-gray-500 mt-10 text-lg">No bills found for this category.</p>
//       )}

//       {/* Card Grid */}
//       {!loading && bills.length > 0 && (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {bills.map(bill => (
//             <div key={bill._id || bill.billsId} className="border rounded-lg shadow hover:shadow-lg transition p-4">
//               <img
//                 src={bill.image}
//                 alt={bill.title}
//                 className="w-full h-40 object-cover rounded"
//               />

//               <h3 className="text-xl font-bold mt-3">{bill.title}</h3>
//               <p><strong>Category:</strong> {bill.category}</p>
//               <p><strong>Amount:</strong> {bill.amount} BDT</p>
//               <p><strong>Location:</strong> {bill.location}</p>
//               <p className="text-sm text-gray-500">{bill.date}</p>

//               <button
//                 onClick={() => navigate(`/bill/${bill._id || bill.billsId}`)}
//                 className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Simple CSS Spinner */}
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

const Bills = () => {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = ["Electricity", "Gas", "Water", "Internet"];

  // fetch bills from backend
  const fetchBills = (category) => {
    setLoading(true);

    let url = "http://localhost:2000/bills";
    if (category && category !== "All") {
      url += `?category=${category}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setBills(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBills(filter);
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8"><span className="text-color2">All</span> <span className="text-color1">Bills</span></h2>

      {/* Category Filter */}
      <div className="mb-6 flex justify-center">
        <select
          className="border px-4 py-2 rounded-md shadow-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Bills</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-4 border-blue-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {/* No bills found */}
      {!loading && bills.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-lg">No bills found for this category.</p>
      )}

      {/* Card Grid */}
      {!loading && bills.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bills.map((bill) => (
            <div key={bill._id || bill.billsId} className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img
                src={bill.image}
                alt={bill.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-3">{bill.title}</h3>
              <p><strong>Category:</strong> {bill.category}</p>
              <p><strong>Amount:</strong> {bill.amount} BDT</p>
              <p><strong>Location:</strong> {bill.location}</p>
              <p className="text-sm text-gray-500">{bill.date}</p>

              <button
                onClick={() => navigate(`/bill/${bill._id || bill.billsId}`)}
                className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Spinner CSS */}
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
