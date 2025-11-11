// import React, { useEffect, useState } from "react";

// const Bills = () => {
//   const [bills, setBills] = useState([]);

//  useEffect(() => {
//      fetch("http://localhost:2000/bills/recent")
//        .then((res) => res.json())
//        .then((data) => setBills(data))
//        .catch((err) => console.log(err));
//    }, []);

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


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    fetch("http://localhost:2000/bills/recent")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8"><span className="text-color2">Recent</span> <span className="text-color1">Bills</span></h2>

      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {bills.map(bill => (
          <div key={bill._id} className="border rounded-lg shadow hover:shadow-lg transition p-4">

            {/* Image */}
            <img
              src={bill.image}
              alt={bill.title}
              className="w-full h-40 object-cover rounded"
            />

            {/* Text */}
            <h3 className="text-xl font-bold mt-3">{bill.title}</h3>
            <p><span className="font-semibold">Category:</span> {bill.category}</p>
            <p><span className="font-semibold">Amount:</span> {bill.amount} BDT</p>
            <p><span className="font-semibold">Location:</span> {bill.location}</p>
            <p className="text-sm text-gray-500">{bill.date}</p>

            {/* Button */}
            <button
              onClick={() => navigate(`/bill/${bill._id}`)} // navigate hook
              className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Bills;
