// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const RecentBill = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:2000/bills/recent")
//       .then((res) => res.json())
//       .then((data) => setBills(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-bold mb-5">Recent Bills</h2>

//       <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {bills.map((bill) => (
//           <div
//             key={bill._id}
//             className="p-5 shadow-md rounded-xl bg-white border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
//           >
//             <h2 className="text-lg font-semibold">{bill.title}</h2>

//             <p className="text-gray-600">{bill.category}</p>
//             <p className="text-gray-600">{bill.location}</p>
//             <p className="text-gray-400 text-sm">{bill.date}</p>

//             <Link to={`/bills/${bill._id}`}>
//               <button className="btn btn-primary w-full mt-3">
//                 See Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentBill;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentBill = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:2000/bills/recent")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSeeDetails = (id) => {
    console.log("User clicked to see details for bill:", id);
    navigate(`/bills/${id}`);
  };

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Recent <span className="text-color1">Bills</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {bills.map((bill) => (
          <div
            key={bill._id}
            className="p-5 shadow-md rounded-xl bg-white border hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-lg font-semibold">{bill.title}</h2>
            <p className="text-gray-600">{bill.category}</p>
            <p className="text-gray-600">{bill.location}</p>
            <p className="text-gray-400 text-sm">{bill.date}</p>

            <button
              className="btn btn-primary w-full mt-3"
              onClick={() => handleSeeDetails(bill._id)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBill;
